import {
  GITHUB_URL,
  INTRO_BODY,
  INTRO_TITLE,
  LINKEDIN_URL,
} from '@/content/intro'
import Image from 'next/image'
import Link from 'next/link'

export function Intro() {
  return (
    <div className='flex flex-col gap-8 mb-12'>
      <div className='relative mt-16 h-48 w-full'>
        <Image
          src='/profile.png'
          alt='Bell Code Logo'
          className='rounded-lg object-contain'
          fill
          priority
        />
      </div>
      <h1 className='text-center text-3xl font-semibold uppercase'>
        {INTRO_TITLE}
      </h1>
      <p className='mx-auto max-w-md text-center text-sm md:text-base lg:text-base'>
        {INTRO_BODY}
      </p>
      <div className='flex justify-center gap-8'>
        <Link
          id='download-resume'
          href={'/resume_V4.pdf'}
          target='_blank'
          rel='noopener noreferrer'
          style={{ background: `url('/buttons/PrimaryLight.svg') no-repeat` }}
          className='px-12 py-2 text-white'
        >
          Download Resume
        </Link>
        <Link
          href='/recruiters'
          style={{
            background: `url('/buttons/SecondaryLight.svg') no-repeat`,
            height: '44px',
            width: '216px',
            lineHeight: '30px'
          }}
          className='px-12 py-2'
        >
          Recruiter Guide
        </Link>
      </div>
      <div className='flex justify-center gap-6'>
        <Link href={GITHUB_URL} target='_blank'>
          <Image
            src='/icons/icon-github.svg'
            alt='github'
            width={40}
            height={40}
          />
        </Link>
        <Link href={LINKEDIN_URL} target='_blank'>
          <Image
            src='/icons/icon-linkedin.png'
            alt='linkedin'
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  )
}
