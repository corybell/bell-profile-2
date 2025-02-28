import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Stars } from '@/components/stars/Star'
import { PROJECT_LIST } from '@/content/projectShowcase'
import Image from 'next/image'
import Link from 'next/link'

export async function generateStaticParams() {
  return PROJECT_LIST.map(project => ({
    slug: project.slug,
  }))
}

export default async function Showcase({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const project = PROJECT_LIST.find(p => p.slug === slug)

  return (
    <main className='h-full w-full'>
      {/* <Stars /> */}
      <Header isShowcase />
      <div className='container mx-auto max-w-2xl'>
        <Link href='/#showcase' className='mx-6 font-semibold underline'>
          {'< Back'}
        </Link>
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <div className='relative h-[16rem] w-[16rem]'>
            <Image
              src={`/screenshots/${project?.screenshot}`}
              alt={project?.name || 'screenshot'}
              fill
              className='object-contain'
            />
          </div>
          <div className='flex flex-col items-center md:items-baseline'>
            <h2 className='text-3xl font-semibold uppercase'>
              {project?.name}
            </h2>
            <span>{project?.detail.description}</span>
            <h3 className='mt-3 text-lg font-bold'>STACK</h3>
            <span className='px-10 text-center md:p-0 md:text-left'>
              {project?.detail.stack.join(', ')}
            </span>
            <Link
              href={'/resume_V4.pdf'}
              target='_blank'
              rel='noopener noreferrer'
              className='dark:text-navy-blue text-soft-gray relative mt-4'
            >
              <div
                className={`text-navy-blue dark:text-soft-gray primaryButtonShape -ml-2`}
              />
              <span className='absolute top-3 left-14'>Visit Project</span>
            </Link>
          </div>
        </div>
        <div className='my-10 px-6 md:px-0'>
          <h3 className='mt-4 text-xl font-semibold'>ASSIGNMENT</h3>
          <p>{project?.detail.assignment}</p>
          <h3 className='mt-4 text-xl font-semibold'>SOLUTION</h3>
          <p>{project?.detail.solution}</p>
          <div className='relative mt-8 md:mt-12 h-64 md:h-[480px]'>
            <Image
              src={`/screenshots/${project?.detail.image}`}
              alt='foo'
              fill
              className='object-contain'
            />
          </div>
          <p className='mt-4 mb-8 mx-8 text-sm text-center'>
            {project?.detail.imageCaption}
          </p>
          <h3 className='mt-4 text-xl font-semibold'>CHALLENGES</h3>
          <p>{project?.detail.challenges}</p>
          <h3 className='mt-4 text-xl font-semibold'>PARTNERS</h3>
          <p>{project?.detail.partners}</p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
