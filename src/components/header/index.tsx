import { HEADER_ITEMS } from '@/content/header'
import Link from 'next/link'
import { DarkModeButton } from './DarkModeButton'
import { MenuButton } from './MenuButton'

export function Header({ isShowcase = false }: { isShowcase?: boolean }) {
  return (
    <header className='dark:bg-navy-blue relative h-16 p-0'>
      <ul className='dark:text-soft-gray hidden h-full list-none items-center justify-center gap-12 md:flex'>
        <li className='absolute top-4 left-4'>
          <DarkModeButton />
        </li>
        {HEADER_ITEMS.map(i => (
          <li key={i.href}>
            <Link className={isShowcase && i.href.includes('showcase') ? 'font-bold' : 'font-medium'} href={i.href}>
              {i.text}
            </Link>
          </li>
        ))}
      </ul>
      <ul className='flex items-center justify-between px-6 py-4 md:hidden'>
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
