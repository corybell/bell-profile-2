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
import { ResumeButton } from '@/components/ResumeButton'
import { RecruiterButton } from '@/components/RecruiterButton'

export function Intro() {
  return (
    <div className='dark:bg-navy-blue flex flex-col gap-8 pb-12 dark:text-white'>
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
        <ResumeButton />
        <RecruiterButton />
      </div>
      <div className='flex justify-center gap-6'>
        <Link href={GITHUB_URL} target='_blank'>
          <FontAwesomeIcon icon={faGithub} width={32} />
        </Link>
        <Link href={LINKEDIN_URL} target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} width={32} />
        </Link>
      </div>
    </div>
  )
}
