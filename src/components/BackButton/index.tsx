import Link from 'next/link'

export function BackButton({ href }: { href: string }) {
  return (
    <Link href={href} className='mx-6 my-2 block font-semibold underline'>
      {'< Back'}
    </Link>
  )
}
