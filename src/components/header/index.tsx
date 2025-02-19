import { HEADER_ITEMS } from '@/content/header'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className='mt-3'>
      <ul className='list-none flex justify-center gap-12'>
        {HEADER_ITEMS.map(i => (
          <li className='' key={i.href}>
            <Link className='font-medium' href={i.href}>{i.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
