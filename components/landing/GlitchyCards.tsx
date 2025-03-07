import React from 'react'
import { Meteors } from '../Meteors'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LuArrowUpRight } from 'react-icons/lu'

export function MeteorsDemo() {
  const data = [
    {
      title: 'Projets',
      buttonText: 'Projets',
      url: '/projects',
      icon: '/projects',
    },
    {
      title: 'À propos',
      buttonText: 'À propos',
      url: '/about',
      icon: '/projects',
    },
    {
      title: 'Mon CV',
      buttonText: 'Mon CV',
      url: '/resume',
      icon: '/projects',
    },
  ]
  return (
    <div className="grid items-center justify-center grid-cols-3 gap-1 my-10">
      {data.map((project, index) => (
        <MeteorButton key={index} {...project} />
      ))}
    </div>
  )
}

type ProjectCardProps = {
  className?: string
  title: string
  description?: string
  buttonText: string
  url: string
  icon: string
  width?: number
  glowScale?: number
  meteors?: number
  meteorsColor?: string
}

export function MeteorCard({
  className,
  title,
  description,
  buttonText,
  url,
  icon,
  width = 16,
  glowScale = 0.7,
  meteors = 20,
  meteorsColor = '#64748b',
}: ProjectCardProps) {
  return (
    <div className={cn('m-2 items-center justify-center', className)}>
      <div className={`relative w-full max-w-[${width}rem]`}>
        {/* <div
          className={`absolute inset-0 h-full w-full scale-[${glowScale}] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl`}
        /> */}
        <div className="relative flex flex-col items-center justify-end h-full p-4 overflow-hidden bg-gray-900 border border-gray-800 shadow-xl rounded-2xl">
          <h1 className="relative z-50 mb-4 text-lg font-bold text-white">{title}</h1>
          {description && (
            <p className="relative z-50 mb-4 text-base font-normal text-slate-500">{description}</p>
          )}

          <Button
            asChild
            variant={'ghost'}
            className="px-4 py-1 text-gray-300 transition duration-200 border border-gray-500 rounded-lg hover:scale-10"
          >
            <Link href={url}>{buttonText}</Link>
          </Button>
          {/* Meaty part - Meteor effect */}
          <Meteors number={meteors} color={meteorsColor} />
        </div>
      </div>
    </div>
  )
}

export function MeteorButton({
  className,
  title,
  description,
  buttonText,
  url,
  icon,
  width = 16,
  glowScale = 0.7,
  meteors = 20,
  meteorsColor = '#64748b',
}: ProjectCardProps) {
  return (
    <div className={cn('m-2 flex items-center justify-center', className)}>
      <div className={`relative w-full max-w-[${width}rem]`}>
        {/* <div
          className={`absolute inset-0 h-full w-full scale-[${glowScale}] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl`}
        /> */}
        <Link href={url}>
          <div className="relative flex flex-col items-center justify-end h-full p-4 overflow-hidden bg-gray-900 border border-gray-800 shadow-xl rounded-2xl">
            <div className="flex flex-row items-center space-x-2">
              <h1 className="relative z-50 text-lg font-bold text-white">{title}</h1>
              <LuArrowUpRight className="w-5 h-5 text-white" />
            </div>

            <Meteors number={meteors} color={meteorsColor} />
          </div>
        </Link>
      </div>
    </div>
  )
}
