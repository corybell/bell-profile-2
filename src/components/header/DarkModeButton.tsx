'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'

export function DarkModeButton() {
  const { isDarkMode, toggle } = useDarkMode({
    initializeWithValue: false,
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

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
