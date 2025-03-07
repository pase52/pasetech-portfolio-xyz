'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import {
  TouchProvider,
  HybridTooltip,
  HybridTooltipTrigger,
  HybridTooltipContent,
} from '@/components/ui/hybrid-tooltip'
import { LuChevronLeft as ChevronLeft } from 'react-icons/lu'
import { LuChevronRight as ChevronRight } from 'react-icons/lu'

import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { skillsData } from '@/data/mainData'
import { type Skill } from '@/data/mainData'
import IconsBundle from '../social-icons'
import { useState } from 'react'

// Add category translation mapping
const categoryTranslations: Record<string, string> = {
  'Most Used': 'Les plus utilisés',
  // Add other translations as needed
}

// Get display name for a category (translated or original)
function getCategoryDisplayName(category: string): string {
  return categoryTranslations[category] || category
}

function filterSkillsData(skillsData: Skill[]) {
  // returns an object with each category as a key and an array of skills as the value
  const acc: Record<string, Skill[]> = { 'Most Used': [] }

  skillsData.forEach((skill) => {
    if (!skill.hidden) {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)

      // If the skill is most used, add it to the "Most Used" category
      if (skill.mostUsed) {
        acc['Most Used'].push(skill)
      }
    }
  })

  return acc
}

export function Technologies() {
  const filteredSkillsData = filterSkillsData(skillsData)
  const categories = Object.keys(filteredSkillsData)
  const [tabIndex, setTabIndex] = useState(0)

  const onTabChange = (value: string) => {
    const index = categories.indexOf(value)
    setTabIndex(index)
  }

  const onNextTab = () => {
    const nextIndex = (tabIndex + 1) % categories.length
    setTabIndex(nextIndex)
  }

  const onPrevTab = () => {
    const prevIndex = (tabIndex - 1 + categories.length) % categories.length
    setTabIndex(prevIndex)
  }

  return (
    <div className="w-full my-10">
      <h3 className="text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        Technologies maitrisés
      </h3>
      <div className="mt-5">
        <TouchProvider>
          <Tabs
            value={categories[tabIndex]}
            onValueChange={onTabChange}
            defaultValue={categories[0]}
            className=""
          >
            <TabsList
              className={`h-27 grid w-full grid-cols-2 gap-2 md:h-9 md:grid-cols-5 md:gap-1 lg:grid-cols-5 xl:gap-2`}
            >
              {categories.map((category) => (
                <TabsTrigger
                  key={`trigger-${category}`}
                  value={category}
                  className={
                    category === 'Most Used'
                      ? ' col-span-2 from-blue-300 via-sky-300 to-cyan-300 data-[state=active]:bg-gradient-to-tr data-[state=active]:text-slate-900 md:col-span-1 '
                      : ''
                  }
                >
                  {getCategoryDisplayName(category)}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <Card key={category} className="w-full">
                  <CardHeader>
                    <CardTitle>{getCategoryDisplayName(category)}</CardTitle>
                    {category === 'Most Used' && (
                      <CardDescription>Ce sont mes technologies les plus utilisées.</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-5 gap-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10">
                      {filteredSkillsData[category].map((skill) => (
                        <HybridTooltip key={skill.id}>
                          <HybridTooltipTrigger asChild>
                            <Button
                              className={`h-14 p-2 sm:p-2 ${skill.level === 'learning' ? 'border border-green-300' : ''}`}
                              variant="outline"
                            >
                              <IconsBundle 
                                kind={skill.id} 
                                size={
                                  skill.id === "gitlab" ? 15 : 
                                  skill.id === "proxmox" ? 11 : 
                                  10
                                } 
                                iconType="icon" 
                              />
                            </Button>
                          </HybridTooltipTrigger>
                          <HybridTooltipContent className="w-auto">
                            {skill.name}
                          </HybridTooltipContent>
                        </HybridTooltip>
                      ))}
                    </div>
                  </CardContent>
                  {category !== 'Most Used' && (
                    <CardFooter className="flex flex-row items-center px-6 py-3 border-t bg-muted/50">
                      {/* <div className="text-xs text-muted-foreground">
                    Updated <time dateTime="2023-11-23">November 23, 2023</time>
                  </div> */}
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span className="inline-block w-3 h-3 mx-1 bg-green-300 rounded-full"></span>
                        <span>En train d'apprendre</span>
                      </div>
                      <Pagination className="w-auto ml-auto mr-0">
                        <PaginationContent>
                          <PaginationItem>
                            <Button
                              size="icon"
                              variant="outline"
                              className="w-6 h-6"
                              onClick={onPrevTab}
                            >
                              <ChevronLeft className="h-3.5 w-3.5" />
                              <span className="sr-only">Page précédente</span>
                            </Button>
                          </PaginationItem>
                          <PaginationItem>
                            <Button
                              size="icon"
                              variant="outline"
                              className="w-6 h-6"
                              onClick={onNextTab}
                            >
                              <ChevronRight className="h-3.5 w-3.5" />
                              <span className="sr-only">Prochaine page</span>
                            </Button>
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </CardFooter>
                  )}
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </TouchProvider>
      </div>
    </div>
  )
}
