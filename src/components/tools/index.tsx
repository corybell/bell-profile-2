'use client'

import { TOOLS_BODY, TOOLS_LIST, TOOLS_TITLE } from '@/content/tools'
import Image from 'next/image'
import { useDarkMode } from 'usehooks-ts'

export function Tools() {
  const { isDarkMode } = useDarkMode({
    initializeWithValue: false,
  })
  const prefix = isDarkMode ? '/tools/dark/' : '/tools/light/'
  return (
    <div className='bg-navy-blue dark:text-navy-blue text-soft-gray dark:bg-soft-gray flex min-h-[289px] flex-col items-center justify-center py-12 md:py-0'>
      <h2
        id='tools'
        className='text-center text-xl font-semibold uppercase md:text-2xl'
      >
        {TOOLS_TITLE}
      </h2>
      <p className='mx-auto max-w-md px-18 py-4 text-center text-sm md:px-0 md:text-base lg:text-base'>
        {TOOLS_BODY}
      </p>
      <ul className='grid grid-cols-3 gap-4 md:flex md:items-center md:justify-center md:px-8'>
        {TOOLS_LIST.map(t => (
          <li key={t.alt} className='flex items-center justify-center'>
            <Image
              src={`${prefix}${t.src}`}
              alt={t.alt}
              width={84}
              height={128}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
