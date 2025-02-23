import { PROJECT_SHOWCASE_LIST } from '@/content/projectShowcase'
import { ProjectTile } from './ProjectTile'

export function ProjectShowcase() {
  return (
    <div className='dark:bg-navy-blue dark:text-soft-gray py-8'>
      <h2
        id='showcase'
        className='text-center text-2xl font-semibold uppercase'
      >
        Project Showcase
      </h2>
      <p className='mx-auto max-w-md py-4 text-center text-sm md:text-base lg:text-base'>
        A few of my latest projects on display
      </p>
      <ul className='flex flex-col items-center justify-center gap-4 md:flex-row'>
        {PROJECT_SHOWCASE_LIST.map(p => (
          <ProjectTile key={p.slug} projectTile={p} />
        ))}
      </ul>
    </div>
  )
}
