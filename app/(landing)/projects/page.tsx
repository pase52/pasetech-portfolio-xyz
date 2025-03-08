import { projectsData } from '@/data/mainData'
import { ProjectCard } from '@/components/ProjectCard'
import { genPageMetadata } from 'app/seo'
import SectionContainer from '@/components/SectionContainer'
import { Separator } from '@/components/ui/separator'

export const metadata = genPageMetadata({ title: 'Projects' })

export default async function Projects() {
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))
  // await delay(10000)
  const workProjects = projectsData.filter(({ type }) => type === 'work')
  const sideProjects = projectsData.filter(({ type }) => type === 'self')
  return (
    <>
      <SectionContainer>
        <div className="">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Mes projets
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
              Quelques projets sur lesquels j'ai travaillé.
            </p>
          </div>
          <Separator />
          <div className="py-12">
            <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight">Profesionnels</h3>
            <div className="grid grid-cols-1 gap-2 -m-4 md:grid-cols-2">
              {workProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
          <Separator />
          <div className="py-12 ">
            <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight">Personnels</h3>
            <div className="grid grid-cols-1 gap-2 -m-4 md:grid-cols-2">
              {sideProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
