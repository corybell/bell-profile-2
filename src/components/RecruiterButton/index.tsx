'use client'

import Link from 'next/link'
import { useDarkMode } from 'usehooks-ts'

export function RecruiterButton() {
  const { isDarkMode } = useDarkMode()

  return (
    <Link
      href='/recruiters'
      style={{
        background: `url('${isDarkMode ? '/buttons/SecondaryDark.svg' : '/buttons/SecondaryLight.svg'}') no-repeat`,
        height: '44px',
        width: '216px',
        lineHeight: '30px',
      }}
      className='px-12 py-2 dark:text-white'
    >
      Recruiter Guide
    </Link>
  )
}
