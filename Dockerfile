##
# 1. Use Debian-based Node as the “base” image
##
FROM node:22-slim AS base

##
# 2. Builder stage: installs dependencies, compiles the app
##
FROM base AS builder

WORKDIR /app

# Install dependencies for node-canvas, sharp, etc.
# (Feel free to remove or add packages as needed for your own environment)
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    pkg-config \
    build-essential \
    libpixman-1-0 \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libpng-dev \
    libgif-dev \
    librsvg2-dev \
    libfreetype6-dev \
    fontconfig \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# Copy lockfiles and enable corepack
COPY . .
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN sed -i '/yarnPath/d' .yarnrc.yml
RUN corepack enable

# Install your dependencies + generate Prisma client
RUN \
    if [ -f yarn.lock ]; then yarn install --immutable; \
    elif [ -f package-lock.json ]; then npm ci && npx prisma generate; \
    elif [ -f pnpm-lock.yaml ]; then pnpm install && npx prisma generate; \
    else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
    fi



# Build Next.js
ARG ENV_VARIABLE
ENV ENV_VARIABLE=${ENV_VARIABLE}
ARG NEXT_PUBLIC_ENV_VARIABLE
ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

RUN \
    if [ -f yarn.lock ]; then yarn build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then pnpm build; \
    else npm run build; \
    fi

##
# 3. Runner stage: copy built output and run the production server
##
FROM base AS runner

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# Create non‐root user (on Debian-based images)
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs
USER nextjs

# Copy only what’s needed for production
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

# Redefine env vars at runtime
ARG ENV_VARIABLE
ENV ENV_VARIABLE=${ENV_VARIABLE}
ARG NEXT_PUBLIC_ENV_VARIABLE
ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

# Note: Don't EXPOSE here if you'll use docker-compose/other orchestration
# CMD ["npm", "run", "start:standalone"]
CMD ["node", "server.js"]
