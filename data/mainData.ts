export interface Project {
  type: 'work' | 'self'
  title: string
  description?: string
  imgSrc: string
  url?: string
  repo?: string
  builtWith: string[]
  hidden?: boolean

}

export interface Company {
  name: string
  location?: string
  imgSrc?: string
  startDate?: string
  endDate?: string
  url?: string
  active?: boolean
  hidden?: boolean
  description?: string
  descCard?: string
  items: Experience[]

}

export interface TechStackType {
  name: string
  href?: string

}
export interface Experience {
  title: string
  roleType: 'CDI' | 'Part-time' | 'Consultant' | 'Freelance' | 'Alternance'
  startDate: string
  endDate?: string
  description: string
  active?: boolean
  techStack?: TechStackType[]
  hidden?: boolean
}

export interface Skill {
  name: string
  id: string
  category: "Langages" | "Web Dev" | "AI & Data Science" | "DevOps & Outils" 
  field?: string
  subfield?: string
  description?: string
  imgSrc?: string
  level: 'advanced' | 'familiar' | 'learning'
  hidden?: boolean
  href?: string
  mostUsed?: boolean
}

export let projectsData: Project[] = [

  {
    type: 'work',
    title: 'FlowPandas',
    description: 'FlowPandas is an AI BI analyst microservice that allows users to interact with their reports through a chat interface to generate BI insights. The microservice provides text explanations, tables of the data, and visualizations. It connects to an API that supplies JSON data for analysis.',
    imgSrc: '/static/images/projects/7.jpg',
    builtWith: ['Redis Stack', 'OpenAI GPT-3.5', 'FastAPI', 'Pandas', 'PandasAI', 'Langchain'],
  },
  {
    type: 'work',
    title: 'Quality AI',
    description: 'A full-stack web application assists quality auditors by analyzing support agent calls. It uses the Whisper ASR model to transcribe calls, detects silence gaps, and performs text analysis to flag inappropriate language. The Mistral LLM summarizes calls and evaluates them against predefined criteria to generate a call score. The app integrates with ticketing systems like Zendesk and TeamSupport for real-time ticket updates and supports real-time processing and analysis with deployed ASR and LLM models.',
    imgSrc: '/static/images/projects/1.jpg',
    builtWith: ['Mistral LLM', 'Whisper ASR', 'VLLM', 'Sveltekit', 'FastAPI', 'Docker', 'Postgres', 'AWS', 'GitHub', 'NGINX', 'Prisma', 'Tailwind'],
  },
  {
    type: 'work',
    title: 'AI Support Helper',
    description: 'AI Support Helper is a microservice integrated with the Teamsupport ticketing system to track new tickets created by clients. It generates possible fixes for tickets and provides outage notifications if a matching outage article is found. The microservice searches for ticket information in a vector database that is updated periodically to ensure its knowledge remains current.',
    imgSrc: '/static/images/projects/2.jpg',
    builtWith: ['OpenAI', 'Teamsupport API', 'MySQL', 'Pinecone', 'FastAPI', 'Docker', 'AWS', 'Langchain'],
  },
  {
    type: 'work',
    title: 'DocChat',
    description: 'DocChat is a Retrieval-Augmented Generation (RAG) microservice that enables users to interact with documentation. It keeps track of all the content within PDF pages, including text, page numbers, images, categories, and subcategories. This microservice allows for efficient and accurate information retrieval during chats with documentation.',
    imgSrc: '/static/images/projects/3.jpg',
    builtWith: ['OpenAI', 'Pinecone', 'FastAPI', 'Docker', 'AWS S3', 'Langchain'],
  },
  {
    type: 'work',
    title: 'Backlog Classifier',
    description: 'Backlog Classifier is a tool designed to organize backlog tickets by classifying them into clusters based on their embeddings. It then generates a title for each cluster using a Large Language Model (LLM), streamlining the management and prioritization of tickets.',
    imgSrc: '/static/images/projects/4.jpg',
    builtWith: ['OpenAI GPT-3.5', 'OpenAI Ada', 'FastAPI', 'PyTorch', 'Pandas'],
  },
  {
    type: 'work',
    title: 'Tendering App',
    description: 'Tendering App is a full-stack application designed to facilitate the tendering process. It allows contractors, consultants, and suppliers to apply to clients\' tenders, which can then be managed by software admins. The app includes an admin page to control all aspects of the application, ensuring efficient and streamlined tender management.',
    imgSrc: '/static/images/projects/5.jpg',
    builtWith: ['Next.js', 'Postgres', 'AWS S3', 'Prisma', 'Tailwind'],
  },
  {
    type: 'self',
    title: 'Personal website',
    imgSrc: '/static/images/projects/6.jpg',
    repo: 'andrewsam.xyz',
    url: 'https://andrewsam.xyz',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Prisma', 'Umami'],
  },
  {
    type: 'self',
    title: 'AI Voice Assistant',
    imgSrc: '/static/images/projects/7.jpg',
    builtWith: ['OpenAI', 'Langchain', 'Deepgram', 'FastAPI', 'Docker', 'Oracle Cloud', 'LiveKit Agents', 'Pinecone', 'Next.js', 'Postgres', 'WebRTC', 'NGINX'],
    description: "The AI Voice Assistant is a full-stack application designed to facilitate seamless customer interactions through voice commands. It leverages WebRTC to handle reservations, communicate with external APIs for information retrieval, and interact with the backend to manage reservations, including submissions, inquiries, and cancellations. Additionally, the project features a second voice assistant based on Retrieval-Augmented Generation (RAG), allowing users to upload PDF or DOCX files and engage in voice-based conversations to query the document's content.",
    repo: 'VoiceAssistant-Backend',
    url:'https://rtc.andrewsam.xyz/'
  }
  
];

// export let experienceData: Company[] = [
//   {
//     name: 'Valsoft - Aspire',
//     location: 'Remote - Canada',
//     description: 'Aspire Software is a division of Valsoft that focuses on acquiring, managing, and building vertical market software businesses.',
//     imgSrc: 'https://www.valsoftcorp.com/wp-content/uploads/2017/10/valsoft-logo.svg',
//     url: 'https://www.valsoftcorp.com/',
//     active: true,
//     items: [
//       {
//         title: 'Software Developer - DockMaster',
//         roleType: 'Fulltime',
//         startDate: '2024/04/15',
//         description: 'Implemented new features and fixed bugs, ensuring the continuous improvement and reliability of the software. Maintained server configurations, ensuring optimal performance and availability. Attended product meetings to ideate and discuss feature enhancements, contributing to the strategic growth and development of the software. Collaborated closely with cross-functional teams to ensure the alignment of development efforts with business goals and user needs. Developing prototypes for AI features to be integrated within the software.',
//         techStack: [
//           { name: 'Django', href: 'https://www.djangoproject.com/' },
//           { name: 'Python', href: 'https://www.python.org/' },
//           { name: 'AWS', href: 'https://aws.amazon.com/' },
//           { name: 'Redis', href: 'https://redis.io/' },
//           { name: 'Datadog', href: 'https://www.datadoghq.com/' },
//           { name: 'GitHub', href: 'https://github.com/' },
//           // { name: 'OpenSearch', href: 'https://opensearch.org/' },
//           { name: 'Bash', href: 'https://www.gnu.org/software/bash/' },
//           { name: 'Postgres', href: 'https://www.postgresql.org/' },
//           // { name: 'DjangoRQ', href: 'https://github.com/rq/django-rq' },
//           { name: 'NGINX', href: 'https://www.nginx.com/' },
//           { name: 'Locust', href: 'https://locust.io/' },
//         ],
//         active: true,
//       },
//       {
//         title: 'AI Backend Developer - Hospitality Portfolio',
//         roleType: 'Fulltime',
//         startDate: '2023/10/15',
//         endDate: '2024/04/15',
//         description: 'Developed prototypes for AI features tailored to the hospitality department, enhancing support and operational efficiency. Created a RAG documentation chat for the support team, streamlining access to information and reducing response times. Implemented automated ticket first replies with suggested solutions, improving customer service efficiency and response accuracy. Designed AI-driven BI solutions to generate insights from databases and software APIs, facilitating data-driven decision-making. Developed tools for summarization and classification of backlog tickets, assisting the product team in prioritizing and addressing issues effectively.',
//         techStack: [
//           { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
//           { name: 'OpenAI', href: 'https://openai.com/' },
//           { name: 'Pinecone', href: 'https://www.pinecone.io/' },
//           // { name: 'Serverless Functions', href: 'https://vercel.com/docs/serverless-functions' },
//           { name: 'Docker', href: 'https://www.docker.com/' },
//           { name: 'Langchain', href: 'https://www.langchain.com/' },
//           { name: 'Pandas', href: 'https://pandas.pydata.org/' },
//           { name: 'Scikitlearn', href: 'https://scikit-learn.org/' },
//           { name: 'Nextjs', href: 'https://nextjs.org/' },
//           { name: 'Gradio', href: 'https://gradio.app/' },
//           { name: 'Postgres', href: 'https://www.postgresql.org/' },
//         ],
//       },
//       {
//         title: 'API Implementation Engineer - InnQuest',
//         roleType: 'Fulltime',
//         startDate: '2022/10/24',
//         endDate: '2023/10/15',
//         description: 'Created, configured, tested, and deployed Agora API integration functionalities, ensuring seamless connectivity and optimal performance. Coordinated the implementation of third-party systems connections with active system monitoring, ensuring reliable and efficient integrations. Developed multiple automation tools to facilitate the search and investigation of issues, significantly improving the efficiency of the troubleshooting process.',
//         techStack: [
//           { name: 'Postman', href: 'https://www.postman.com/' },
//           { name: 'Testrail', href: 'https://www.gurock.com/testrail' },
//           { name: 'Selenium', href: 'https://www.selenium.dev/' },
//           { name: 'Python', href: 'https://www.python.org/' },
//           // { name: 'APIs', href: '#' },
//           { name: 'Pandas', href: 'https://pandas.pydata.org/' },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'FlairsTech',
//     location: 'Maadi - Egypt',
//     description: 'FlairsTech is a software development company that specializes in building custom software solutions for businesses. We help businesses automate their processes and improve their efficiency.',
//     imgSrc: 'https://media.licdn.com/dms/image/C4D0BAQFEqFIZYFhFpA/company-logo_200_200/0/1630540236589/flairstech_logo?e=1726704000&v=beta&t=AuvxQoMg94CqpL1A2-SOgZIChOIE14uscukufiaUDv0',
//     url: 'https://flairstech.com/',
//     active: false,
//     items: [
//       {
//         title: 'AI Fullstack Developer (Consultant)',
//         roleType: 'Consultant',
//         startDate: '2023/02/01',
//         endDate: '2025/01/01',
//         description: 'Developed AI solutions for the operations department, enhancing efficiency and performance across various tasks. Created an AI web application for the quality team, reducing call/ticket evaluation time by up to 80% and achieving a 90% utilization rate for overall call evaluations. Led the development and deployment of the web application, handling frontend, backend, AI microservices, server configurations, and deployment.',
//         techStack: [
//           { name: 'Mistral LLM', href: '#' },
//           { name: 'Whisper ASR', href: '#' },
//           { name: 'VLLM', href: '#' },
//           { name: 'Sveltekit', href: 'https://kit.svelte.dev/' },
//           { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/' },
//           { name: 'Docker', href: 'https://www.docker.com/' },
//           { name: 'Postgres', href: 'https://www.postgresql.org/' },
//           { name: 'AWS', href: 'https://aws.amazon.com/' },
//           { name: 'github', href: 'https://github.com/' },
//           { name: 'nginx', href: 'https://www.nginx.com/' },
//           { name: 'langchain', href: 'https://www.langchain.com/' },
//         ],
//         active: false,
//       },
//     ],
//   },
// ];

export let experienceData: Company[] = [
  {
    name: 'PaseTech',
    location: 'Vitrolles - France',
    description:
      'Ingénieur DevOps Freelance en collaboration avec Apside, accélérant la croissance digitale pour les clients Pellenc & Airseas.',
    imgSrc: '', // Ajoutez l'URL de votre logo ou une image de remplacement
    url: '', // Ajoutez l'URL de votre site web si disponible
    active: true,
    items: [
      {
        title: 'Ingénieur DevOps Freelance',
        roleType: 'Freelance',
        startDate: '2024/01/01', // Date approximative de début
        description:
          'Mission continue avec les clients Pellenc & Airseas, apportant des solutions DevOps innovantes pour accélérer la transformation digitale.',
        techStack: [
          { name: 'GitLab', href: 'https://gitlab.com/' },
          { name: 'ArgoCD', href: 'https://argo-cd.readthedocs.io/' },
          { name: 'Docker', href: 'https://www.docker.com/' },
          { name: 'Kubernetes', href: 'https://kubernetes.io/' },
          { name: 'Python', href: 'https://www.python.org/' },
        ],
        active: true,
      },
    ],
  },
  {
    name: 'Apside',
    location: 'Aix en Provence - France',
    description:
      'Ingénieur DevOps en missions pour des clients majeurs tels que Dassault Aviation, Naval Group, Airseas et Pellenc.',
    imgSrc: '', // Ajoutez l'URL de votre logo ou une image de remplacement
    url: 'https://www.linkedin.com/company/apside/',
    active: false,
    items: [
      {
        title: 'Ingénieur DevOps - Dassault Aviation (Projet Prevol)',
        roleType: 'CDI',
        startDate: '2022/06/01',
        endDate: '2024/01/01',
        description:
          'Accompagnement et coaching des équipes DevOps avec mise en place de pipelines CI/CD via GitLab CI et ArgoCD. Gestion des infrastructures Docker et Kubernetes et développement d’outils Python sur mesure.',
        techStack: [
          { name: 'GitLab', href: 'https://gitlab.com/' },
          { name: 'XLDeploy', href: 'https://digital.ai/products/deploy/' }, // Manque icone
          { name: 'Docker', href: 'https://www.docker.com/' },
          { name: 'Kubernetes', href: 'https://kubernetes.io/' },
          { name: 'Python', href: 'https://www.python.org/' },
          { name: 'Bash', href: 'https://www.gnu.org/software/bash/' },
          { name: 'Jenkins', href: 'https://www.jenkins.io/' },
        ],
        active: false,
      },
      {
        title: 'Ingénieur DevOps - Naval Group (RAO)',
        roleType: 'CDI',
        startDate: '2022/06/01',
        endDate: '2023/12/01',
        description:
          'Participation à un AO pour la mise en place d’une infrastructure Big Data via un POC, analyse des besoins clients et proposition de solutions adaptées pour des projets critiques.',
        techStack: [
          { name: 'Docker', href: 'https://www.docker.com/' },
          { name: 'Python', href: 'https://www.python.org/' },
          { name: 'ZooKeeper', href: 'https://zookeeper.apache.org/' }, // Manque icone
          { name: 'Kafka', href: 'https://kafka.apache.org/' }, // Manque icone
          { name: 'Hadoop', href: 'https://hadoop.apache.org/' }, // Manque icone
        ],
        active: false,
      },
      {
        title: 'Ingénieur DevOps - Airseas',
        roleType: 'CDI',
        startDate: '2022/06/01',
        endDate: '2023/12/01',
        description:
          'Conception et mise en place d’une infrastructure robuste de Data Engineering (online & offline), intégration d’un SSO via proxy, déploiement de JupyterHub pour la gestion centralisée des notebooks, création de Dockerfiles et coaching DevOps.',
        techStack: [
          { name: 'Jupyter', href: 'https://jupyter.org' },
          { name: 'Docker', href: 'https://www.docker.com/' },
          { name: 'Authy', href: 'https://www.authy.com/' }, // Manque icone
          { name: 'Python', href: 'https://www.python.org/' },
          { name: 'Airflow', href: 'https://airflow.apache.org/' }, // Manque icone
          { name: 'GitLab', href: 'https://gitlab.com/' },
        ],
        active: false,
      },
      {
        title: 'Ingénieur DevOps - Pellenc',
        roleType: 'CDI',
        startDate: '2022/06/01',
        endDate: '2023/12/01',
        description:
          'Implémentation de solutions pour des projets legacy en C++/C, optimisation des pipelines CI/CD via CMake, Make et MPLab, et modernisation de l’infrastructure en migrant de Jenkins/Tuleap vers GitLab CI.',
        techStack: [
          { name: 'CMake', href: 'https://cmake.org/' },
          { name: 'Make', href: 'https://www.gnu.org/software/make/' },
          { name: 'MPLab', href: '#' },
          { name: 'GitLab', href: 'https://gitlab.com' },
          { name: 'Jenkins', href: 'https://www.jenkins.io/' },
        ],
        active: false,
      },
    ],
  },
  {
    name: 'DECADI / GTI',
    location: 'La Fare les Oliviers - France',
    description:
      'Développement sur mesure de solutions en PHP, InfluxDB et Grafana ; maintenance opérationnelle et gestion d’une flotte de plus de 300 caméras IoT autonomes ; coordination des équipes de développement.',
    imgSrc: '', // Ajoutez l'URL de votre logo ou une image de remplacement
    url: 'https://smefazur.fr/',
    active: false,
    items: [
      {
        title: 'Développeur & Opérateur Système',
        roleType: 'CDI',
        startDate: '2019/10/01',
        endDate: '2022/06/01',
        description:
          'Développement de solutions personnalisées, maintenance des systèmes opérationnels et gestion d’une flotte IoT, en coordination avec les équipes de développement.',
        techStack: [
          { name: 'PHP', href: 'https://www.php.net/' },
          { name: 'InfluxDB', href: 'https://www.influxdata.com/' },
          { name: 'Grafana', href: 'https://grafana.com/' },
          { name: 'IoT', href: '#' },
          { name: 'Jenkins', href: 'https://www.jenkins.io/' },
          { name: 'GitLab', href: 'https://gitlab.com' },
          { name: 'Wrike', href: 'https://wrike.com' },
        ],
        active: false,
      },
    ],
  },
  {
    name: 'CIS',
    location: 'Rognac - France',
    description:
      'Support IT complet et maintenance des systèmes en divers rôles.',
    imgSrc: '', // Ajoutez l'URL de votre logo ou une image de remplacement
    url: '',
    active: false,
    items: [
      {
        title: 'Administrateur Systèmes',
        roleType: 'CDI',
        startDate: '2019/03/01',
        endDate: '2019/06/01',
        description: 'Gestion et maintenance des systèmes IT lors d’un engagement court terme.',
        techStack: [{ name: 'Administration Systèmes', href: '#' }],
        active: false,
      },
      {
        title: 'Technicien Informatique',
        roleType: 'Alternance',
        startDate: '2015/09/01',
        endDate: '2018/02/01',
        description: 'Support IT et assistance technique en tant que technicien.',
        techStack: [{ name: 'Support IT', href: '#' }],
        active: false,
      },
    ],
  },
  {
    name: 'ARS',
    location: 'Marseille - France',
    description:
      'Support IT et assistance helpdesk dans un environnement technique dynamique.',
    imgSrc: '', // Ajoutez l'URL de votre logo ou une image de remplacement
    url: 'https://www.ars-info.com/',
    active: false,
    items: [
      {
        title: 'Technicien Helpdesk IT',
        roleType: 'CDI',
        startDate: '2018/08/01',
        endDate: '2019/03/01',
        description:
          'Assistance helpdesk et support IT pour assurer la résolution efficace des problèmes techniques.',
        techStack: [{ name: 'Support IT', href: '#' }],
        active: false,
      },
    ],
  },
  {
    name: 'Charleroi Esport',
    location: 'Charleroi - Belgique',
    description:
      'Déploiement de PC gaming et développement d’une API Python personnalisée pour un événement diffusé en direct.',
    imgSrc: '', // Ajoutez l'URL de votre logo ou une image de remplacement
    url: 'https://twitter.com/charleroiesport',
    active: false,
    items: [
      {
        title: 'Ingénieur Déploiement Événementiel',
        roleType: 'Consultant',
        startDate: '2019/04/01',
        endDate: '2019/04/30',
        description:
          'Déploiement de plus de 50 PC gaming, mise en place de serveurs redondants pour le gaming et l’entrainement, gestion de crise lors d’un événement diffusé en direct et création d’une API Python pour interfacer les données du serveur de jeu.',
        techStack: [
          { name: 'Python', href: 'https://www.python.org/' },
          { name: 'Réseaux', href: '#' },
        ],
        active: false,
      },
    ],
  },
];


export let skillsData: Skill[] = [
  {
    name: 'Javascript',
    id: 'javascript',
    category: 'Langages',
    level: 'advanced',
  },
  {
    name: 'Typescript',
    id: 'typescript',
    category: 'Langages',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'React',
    id: 'react',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'advanced',
  },
  {
    name: 'Next.js',
    id: 'nextjs',
    category: 'Web Dev',
    field: 'Fullstack',
    subfield: 'Frameworks',
    level: 'advanced',
    mostUsed: true,

  },
  {
    name: 'Tailwind',
    id: 'tailwind',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
    mostUsed: true,

  },
  {
    name: 'ShadCN',
    id: 'shadcn',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
  },
  {
    name: 'CSS',
    id: 'css',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
  },
  {
    name: 'OpenAI',
    id: 'openai',
    category: 'AI & Data Science',
    field: 'AI',
    description: 'GPTs, Whisper',
    level: 'familiar',
    mostUsed: true,
  },
  {
    name: 'LangChain',
    id: 'langchain',
    category: 'AI & Data Science',
    field: 'AI',
    subfield: 'Frameworks',
    level: 'familiar',
    mostUsed: true,

  },
  {
    name: 'Python',
    id: 'python',
    category: 'Langages',
    level: 'familiar',
    mostUsed: true,

  },
  {
    name: 'C Lang',
    id: 'clang',
    category: 'Langages',
    level: 'familiar',
  },
  {
    name: 'Node.js',
    id: 'nodejs',
    category: 'Web Dev',
    field: 'Backend',
    level: 'familiar',
  },
  {
    name: 'Fast API',
    id: 'fastapi',
    category: 'Web Dev',
    field: 'Backend',
    level: 'familiar',
    mostUsed: true,

  },
  {
    name: 'Django',
    id: 'django',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Flask',
    id: 'flask',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Docker',
    id: 'docker',
    category: 'DevOps & Outils',
    field: 'Containers',
    level: 'advanced',
    mostUsed: true,

  },
  {
    name: 'AWS',
    id: 'aws',
    category: 'DevOps & Outils',
    field: 'Cloud Providers',
    level: 'advanced',
  },
  {
    name: 'Azure',
    id: 'azure',
    category: 'DevOps & Outils',
    field: 'Cloud Providers',
    level: 'advanced',
  },
  {
    name: 'Git',
    id: 'git',
    category: 'DevOps & Outils',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'Github',
    id: 'github',
    category: 'DevOps & Outils',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'Azure DevOps',
    id: 'azuredevops',
    category: 'DevOps & Outils',
    field: 'Source Control',
    level: 'advanced',
  },
  {
    name: 'Bash',
    id: 'bash',
    category: 'DevOps & Outils',
    field: 'Shell',
    level: 'advanced',
  },
  {
    name: 'Powershell',
    id: 'powershell',
    category: 'DevOps & Outils',
    field: 'Shell',
    level: 'advanced',
  },
  {
    name: 'Linux',
    id: 'linux',
    category: 'DevOps & Outils',
    field: 'OS',
    level: 'advanced',
  },
  {
    name: 'SQL',
    id: 'sql',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
    hidden: true,
  },
  {
    name: 'NoSQL',
    id: 'nosql',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
    hidden: true,

  },
  {
    name: 'MongoDB',
    id: 'mongodb',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'learning',
  },
  {
    name: 'PostgreSQL',
    id: 'postgres',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
    mostUsed: true,

  },
  {
    name: 'MySQL',
    id: 'mysql',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
  },
  {
    name: 'Redis',
    id: 'redis',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Databases',
    level: 'advanced',
    mostUsed: true,

  },
  {
    name: 'Bootstrap',
    id: 'bootstrap',
    category: 'Web Dev',
    field: 'Frontend',
    subfield: 'Styling',
    level: 'advanced',
  },
  {
    name: 'Pandas',
    id: 'pandas',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Numpy',
    id: 'numpy',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Anaconda',
    id: 'anaconda',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Tools',
    level: 'advanced',
  },
  {
    name: 'Jupyter',
    id: 'jupyter',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Tools',
    level: 'advanced',
  },
  {
    name: 'Matplotlib',
    id: 'matplotlib',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Plotly',
    id: 'plotly',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Postman',
    id: 'postman',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'DataDog',
    id: 'datadog',
    category: 'DevOps & Outils',
    field: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'Umami',
    id: 'umami',
    category: 'DevOps & Outils',
    field: 'Analytics',
    level: 'advanced',
  },
  {
    name: 'PowerBI',
    id: 'powerbi',
    category: 'AI & Data Science',
    field: 'Data Science',
    subfield: 'Visualization',
    level: 'advanced',
  },
  {
    name: 'Celery',
    id: 'celery',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'NGINX',
    id: 'nginx',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Vercel',
    id: 'vercel',
    category: 'DevOps & Outils',
    field: 'Cloud Providers',
    level: 'advanced',
  },
  {
    name: 'OpenSource LLMs, Mistral, LLAMA, Vicuna',
    id: 'mistral',
    category: 'AI & Data Science',
    field: 'AI',
    level: 'advanced',
  },
  {
    name: 'Streamlit',
    id: 'streamlit',
    category: 'AI & Data Science',
    field: 'Prototyping',
    level: 'advanced',
  },
  {
    name: 'Gradio',
    id: 'gradio',
    category: 'AI & Data Science',
    field: 'Prototyping',
    level: 'advanced',
  },
  {
    name: 'Huggingface',
    id: 'huggingface',
    category: 'AI & Data Science',
    field: 'AI',
    level: 'advanced',
  },
  {
    name: 'GoLang',
    id: 'golang',
    category: 'Langages',
    level: 'learning',
  },
  {
    name: 'Jira',
    id: 'jira',
    category: 'DevOps & Outils',
    field: 'DevOps & Outils',
    subfield: 'Fullstack',
    level: 'advanced',
  },
  {
    name: 'Sanity',
    id: 'sanity',
    category: 'Web Dev',
    field: 'CMS',
    level: 'advanced',
  },
  {
    name: 'Pinecone',
    id: 'pinecone',
    category: 'AI & Data Science',
    field: 'AI',
    subfield: 'Vectors',
    level: 'advanced',
  },
  {
    name: 'Grafana',
    id: 'grafana',
    category: 'DevOps & Outils',
    field: 'DevOps & Outils',
    subfield: 'Fullstack',
    level: 'advanced',
  },
  {
    name: 'Selenium',
    id: 'selenium',
    category: 'DevOps & Outils',
    field: 'DevOps & Outils',
    level: 'advanced',
  },
  {
    name: 'PyTest',
    id: 'pytest',
    category: 'DevOps & Outils',
    field: 'DevOps & Outils',
    level: 'advanced',
  },
  {
    name: 'Vite',
    id: 'vite',
    category: 'DevOps & Outils',
    field: 'DevOps & Outils',
    level: 'advanced',
  },
  {
    name: 'Yarn',
    id: 'yarn',
    category: 'DevOps & Outils',
    field: 'DevOps & Outils',
    level: 'advanced',
    hidden: true,
  },
  {
    name: 'Three.js',
    id: 'threejs',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'learning',
  },
  {
    name: 'Poetry',
    id: 'poetry',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'PNPM',
    id: 'pnpm',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
    hidden: true,
   },
   {
    name: 'Github Actions',
    id: 'githubactions',
    category: 'DevOps & Outils',
    field: 'Deployment',
    level: 'advanced',
   },
   {
    name: 'Framer Motion',
    id: 'framermotion',
    category: 'Web Dev',
    field: 'Frontend',
    level: 'learning',
  },
  {
    name: 'VS Code',
    id: 'vscode',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'MeiliSearch',
    id: 'meilisearch',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Stripe',
    id: 'stripe',
    category: 'Web Dev',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Notion',
    id: 'notion',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'PHP',
    id: 'php',
    category: 'Langages',
    field: 'Backend',
    level: 'advanced',
  },
  {
    name: 'Laravel',
    id: 'laravel',
    category: 'Web Dev',
    field: 'Backend',
    subfield: 'Frameworks',
    level: 'advanced',
  },
  {
    name: 'GitLab',
    id: 'gitlab',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Wrike',
    id: 'wrike',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'CMake',
    id: 'cmake',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'Kubernetes',
    id: 'kubernetes',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
    mostUsed: true,
  },
  {
    name: 'Jenkins',
    id: 'jenkins',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'ArgoCD',
    id: 'argocd',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'learning',
  },
  {
    name: 'Proxmox',
    id: 'proxmox',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
  },
  {
    name: 'Prometheus',
    id: 'prometheus',
    category: 'DevOps & Outils',
    field: 'Tools',
    level: 'advanced',
  },
]

