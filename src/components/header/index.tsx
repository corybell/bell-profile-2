import { HEADER_ITEMS } from '@/content/header'
import Link from 'next/link'
import { DarkModeButton } from './DarkModeButton'
import { MenuButton } from './MenuButton'

export function Header() {
  return (
    <header className='dark:bg-navy-blue relative p-4'>
      <ul className='dark:text-soft-gray hidden list-none justify-center gap-12 md:flex'>
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
      <ul className='flex items-center justify-between md:hidden'>
        <li>
          <DarkModeButton />
        </li>
        <li>
          <MenuButton />
        </li>
      </ul>
    </header>
  )
}
