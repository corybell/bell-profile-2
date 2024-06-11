import { INTRO_BODY, INTRO_TITLE } from '@/content/intro'
import Image from 'next/image'

export function Intro() {
  return (
    <>
      <h1 className='text-4xl text-center mb-6 md:mb-12 lg:mb-12'>
        {INTRO_TITLE}
      </h1>
      <p className='text-sm md:text-base lg:text-base text-center mb-12 md:mb-24 lg:mb-24'>
        {INTRO_BODY}
      </p>
      <div className='relative h-96 w-full mb-12 md:mb-24 lg:mb-24'>
        <Image
          src='/Cory.jpg'
          alt='Bell Code Logo'
          className='object-contain'
          fill
          priority
        />
      </div>
    </>
  )
}
