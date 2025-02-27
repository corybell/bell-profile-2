'use client'

import { TOOLS_BODY, TOOLS_LIST, TOOLS_TITLE } from '@/content/tools'
import Image from 'next/image'
import { useDarkMode } from 'usehooks-ts'

export function Tools() {
  const { isDarkMode } = useDarkMode()
  const prefix = isDarkMode ? '/tools/dark/' : '/tools/light/'
  return (
    <div className='bg-navy-blue dark:text-navy-blue text-soft-gray dark:bg-soft-gray py-8'>
      <h2 id='tools' className='text-center text-xl md:text-2xl font-semibold uppercase'>
        {TOOLS_TITLE}
      </h2>
      <p className='mx-auto max-w-md px-18 py-4 text-center text-sm md:px-0 md:text-base lg:text-base'>
        {TOOLS_BODY}
      </p>
      <ul className='grid grid-cols-3 gap-2 px-8 md:flex md:items-center md:justify-center'>
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
