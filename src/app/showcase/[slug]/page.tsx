import { BackButton } from '@/components/BackButton'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ShowcasePageStars } from '@/components/stars/ShowcasePageStars'
import { PROJECT_LIST } from '@/content/projectShowcase'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cory Bell',
  description: 'Full stack developer. Independent software contractor.',
}

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
  if (!project) {
    return null
  }

  const { screenshot, detail, name } = project

  return (
    <main className='dark:bg-navy-blue dark:text-soft-gray w-full'>
      <ShowcasePageStars />
      <Header isShowcase />
      <div className='mx-auto max-w-2xl'>
        <BackButton href='/#showcase' />
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <div className='relative h-[16rem] w-[16rem]'>
            <Image
              src={`/screenshots/${screenshot}`}
              alt={name || 'screenshot'}
              fill
              className='object-contain'
            />
          </div>
          <div className='flex flex-col items-center md:items-baseline'>
            <h2 className='text-3xl font-semibold uppercase'>{name}</h2>
            <span>{detail.description}</span>
            <h3 className='mt-3 text-lg font-bold'>STACK</h3>
            <span className='px-10 text-center md:p-0 md:text-left'>
              {detail.stack.join(', ')}
            </span>
            <Link
              href={detail.url}
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
          <p>{detail.assignment}</p>
          <h3 className='mt-4 text-xl font-semibold'>SOLUTION</h3>
          <p>{detail.solution}</p>
          <div className='relative mt-8 h-64 md:mt-12 md:h-[480px]'>
            <Image
              src={`/screenshots/${detail.image}`}
              alt={detail.imageCaption}
              fill
              className='object-contain'
            />
          </div>
          <p className='mx-8 mt-4 mb-8 text-center text-sm'>
            {detail.imageCaption}
          </p>
          <h3 className='mt-4 text-xl font-semibold'>CHALLENGES</h3>
          <p>{detail.challenges}</p>
          <h3 className='mt-4 text-xl font-semibold'>PARTNERS</h3>
          <p>{detail.partners}</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
