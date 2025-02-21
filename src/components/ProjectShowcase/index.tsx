import { PROJECT_SHOWCASE_LIST } from '@/content/projectShowcase'
import { ProjectTile } from './ProjectTile'

export function ProjectShowcase() {
  return (
    <div className='dark:bg-navy-blue py-8 dark:text-soft-gray'>
      <h2 id="showcase" className='text-center text-2xl font-semibold uppercase'>
        Project Showcase
      </h2>
      <p className='mx-auto max-w-md py-4 text-center text-sm md:text-base lg:text-base'>
        A few of my latest projects on display
      </p>
      <ul className='flex items-center justify-center gap-8'>
        {PROJECT_SHOWCASE_LIST.map(p => (
          <ProjectTile key={p.url} projectTile={p} />
        ))}
      </ul>
    </div>
  )
}
