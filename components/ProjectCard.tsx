'use client'
import type { ProjectCardProps } from '@//types/components'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imgSrc, url, blogPost, builtWith } = project

  return (
    <Card className="md m-2 max-w-[544px] border-0 p-2 shadow-lg ">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-transparent">
        <Image
          alt={title}
          src={imgSrc}
          className="h-36 object-cover object-center lg:h-60"
          width={1088}
          height={612}
        />
        <div className="flex grow flex-col justify-between space-y-6 p-4 md:p-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              {url ? (
                <Link href={url} aria-label={`Lien vers ${title}`}>
                  <span data-umami-event={title || 'project-press'}>{title}</span>
                </Link>
              ) : (
                title
              )}
            </h2>
            <div className="max-w-none space-y-2 text-gray-500 dark:text-gray-400">
              <p>{description}</p>
            </div>
          </div>
          <div>
            {builtWith && builtWith.length > 0 && (
              <div className="my-2 flex flex-wrap space-x-1.5">
                <span className="shrink-0">Technologies utilisés:</span>
                {builtWith.map((tool, index) => {
                  return (
                    <span key={index} className="font-semibold text-gray-600 dark:text-gray-300">
                      {tool}
                      {index !== builtWith.length - 1 && ','}
                    </span>
                  )
                })}
              </div>
            )}

            <div className="mt-3 flex flex-col gap-2">
              {url && (
                <Link
                  href={url}
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium leading-6 text-primary-500"
                  aria-label={`Link to ${title}`}
                >
                  <span data-umami-event="project-learn-more">En apprendre plus &rarr;</span>
                </Link>
              )}
              {blogPost && (
                <Link
                  href={blogPost}
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium leading-6 text-primary-500"
                  aria-label={`Lisez l'article de blog à propos de ${title}`}
                >
                  <span data-umami-event="project-read-blog">Lire l'article du blog &rarr;</span>
                </Link>
              )}
              {project.cta && (
                <div className="mt-4 flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="default"
                    className="w-full max-w-xs animate-pulse bg-blue-600 py-3 text-base font-semibold text-white hover:bg-blue-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600"
                  >
                    <Link
                      href="mailto:florian@pasetech.fr"
                      aria-label={`Contactez à propos de ${title}`}
                    >
                      <span data-umami-event="project-cta">Contactez-moi</span>
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
