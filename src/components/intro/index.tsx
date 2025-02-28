import {
  GITHUB_URL,
  INTRO_BODY,
  INTRO_TITLE,
  LINKEDIN_URL,
} from '@/content/intro'
import Image from 'next/image'
import Link from 'next/link'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ResumeButton } from '@/components/intro/ResumeButton'

export function Intro() {
  return (
    <div className='dark:bg-navy-blue dark:text-soft-gray flex flex-col gap-8 pb-12'>
      <div className='relative mt-8 h-32 w-full md:mt-16 md:h-48'>
        <Image
          src='/profile.png'
          alt='Bell Code Logo'
          className='object-contain'
          fill
          priority
        />
      </div>
      <h1 className='text-center text-xl font-semibold uppercase md:text-2xl'>
        {INTRO_TITLE}
      </h1>
      <p className='mx-auto max-w-md px-8 text-center text-sm md:px-0 md:text-base'>
        {INTRO_BODY}
      </p>
      <div className='flex flex-col items-center gap-4'>
        <ResumeButton />
        <Link href='/recruiters' className='dark:text-soft-gray underline'>
          Recruiter Guide
        </Link>
      </div>
      <div className='flex h-[40px] justify-center gap-6'>
        <Link
          href={GITHUB_URL}
          target='_blank'
          className='text-4xl md:text-5xl'
        >
          {/* <FontAwesomeIcon icon={faGithub} width={48} height={48} /> */}
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          href={LINKEDIN_URL}
          target='_blank'
          className='text-4xl md:text-5xl'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </div>
  )
}
