'use client'

import Image from 'next/image'
import { useDarkMode } from 'usehooks-ts'

export function DarkModeButton() {
  const { isDarkMode, toggle } = useDarkMode()

  return (
    <button
      type='button'
      onClick={toggle}
      className='relative h-8 w-8 cursor-pointer'
    >
      <Image
        src={isDarkMode ? '/icons/icon-sun.svg' : '/icons/icon-moon.svg'}
        alt='Dark mode'
        fill
      />
    </button>
  )
}
