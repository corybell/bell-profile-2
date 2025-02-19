import { INTRO_BODY, INTRO_TITLE } from '@/content/intro'
import Image from 'next/image'
import Link from 'next/link'

export function Intro() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='relative mt-16 h-48 w-full'>
        <Image
          src='/profile.png'
          alt='Bell Code Logo'
          className='rounded-lg object-contain'
          fill
          priority
        />
      </div>
      <h1 className='text-center text-3xl font-semibold uppercase'>{INTRO_TITLE}</h1>
      <p className='mx-auto max-w-md text-center text-sm md:text-base lg:text-base'>
        {INTRO_BODY}
      </p>
      <div className='flex justify-center gap-8'>
        <Link
          id='download-resume'
          href={'/resume_V4.pdf'}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-navy-blue border-navy-blue rounded-lg border-4 border-solid px-12 py-2 text-white'
        >
          Download Resume
        </Link>
        <Link
          href='/recruiters'
          className='border-navy-blue rounded-lg border-4 border-solid px-12 py-2'
        >
          Recruiter Guide
        </Link>
      </div>
    </div>
  )
}
