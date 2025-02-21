import { ProjectTileType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectTile({ projectTile }: { projectTile: ProjectTileType }) {
  return (
    <Link
      href={projectTile.url}
      className='relative h-[23rem] w-[18rem] shrink-0'
    >
      <Image
        src={`/shapes/${projectTile.shape}`}
        alt={projectTile.title}
        fill
      />
      <div className='absolute -top-3 flex flex-col items-center gap-4 px-8'>
        <div className='relative h-48 w-full'>
          <Image
            src={`/screenshots/${projectTile.screenshot}`}
            alt={projectTile.title}
            fill
          />
        </div>
        <h3 className='text-xl font-semibold underline'>{projectTile.title}</h3>
        <p className='text-center text-base/4.5'>{projectTile.description}</p>
      </div>
    </Link>
  )
}
