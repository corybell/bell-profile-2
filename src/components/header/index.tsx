import { HEADER_ITEMS } from '@/content/header'
import Link from 'next/link'
import { DarkModeButton } from './DarkModeButton'

export function Header() {
  return (
    <header className='relative p-4 dark:bg-navy-blue'>
      <ul className='flex list-none justify-center gap-12 dark:text-white'>
        <li className='absolute left-2'>
          <DarkModeButton />
        </li>
        {HEADER_ITEMS.map(i => (
          <li key={i.href}>
            <Link className='font-medium' href={i.href}>
              {i.text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
