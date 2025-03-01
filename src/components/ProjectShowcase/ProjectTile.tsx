'use client'
import { Project } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useDarkMode } from 'usehooks-ts'

export function ProjectTile({ projectTile }: { projectTile: Project }) {
  const { isDarkMode } = useDarkMode({
    initializeWithValue: false,
  })
  return (
    <Link
      href={`/showcase/${projectTile.slug}`}
      className='relative h-[20rem] w-[15rem] shrink-0'
    >
      <Image
        src={`/shapes/${isDarkMode ? 'dark' : 'light'}/${projectTile.tile.shape}`}
        alt={projectTile.name}
        fill
        priority
      />
      <div className='absolute -top-3 flex flex-col items-center gap-1'>
        <div className='relative aspect-square h-44'>
          <Image
            src={`/screenshots/${projectTile.screenshot}`}
            alt={projectTile.name}
            className='object-contain'
            fill
          />
        </div>
        <h3 className='font-semibold underline'>{projectTile.name}</h3>
        <p className='px-6 text-center text-sm/tight'>
          {projectTile.tile.text}
        </p>
      </div>
    </Link>
  )
}
