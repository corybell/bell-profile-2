import Image from 'next/image'

export function Header() {
  return (
    <header className='relative h-48 md:mb-6 lg:mb-6'>
      <Image src='/logo.svg' alt='Bell Code Logo' fill priority />
    </header>
  )
}
