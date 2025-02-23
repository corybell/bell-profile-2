'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { createRef, ReactNode, useEffect, useState } from 'react'
import { HEADER_ITEMS } from '@/content/header'
import Link from 'next/link'
import { Transition } from '@headlessui/react'

function ClickAwayListener({
  children,
  onClickAway,
}: {
  children: ReactNode
  onClickAway: () => void
}) {
  const ref = createRef<HTMLDivElement>()

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Element &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        onClickAway()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [onClickAway])

  return <div ref={ref}>{children}</div>
}

export function MenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className='dark:text-soft-gray m-0 border-0 bg-none p-0 text-4xl'
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <FontAwesomeIcon icon={isOpen ? faClose : faBars} />
      </button>
      <Transition show={isOpen} as='div'>
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <ul className='bg-soft-gray dark:bg-navy-blue dark:text-soft-gray absolute left-0 z-10 flex w-full flex-col items-center gap-2 py-6 drop-shadow-md transition duration-100 ease-in data-[closed]:opacity-0'>
            {HEADER_ITEMS.map(i => (
              <li key={i.href}>
                <Link className='text-xl font-medium underline' href={i.href}>
                  {i.text}
                </Link>
              </li>
            ))}
          </ul>
        </ClickAwayListener>
      </Transition>
    </>
  )
}
