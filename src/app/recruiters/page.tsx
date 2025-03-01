import { BackButton } from '@/components/BackButton'
import { Header } from '@/components/header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cory Bell',
  description: 'Full stack developer. Independent software contractor.',
}

export default function Recruiters() {
  return (
    <main className='mx-auto h-full w-full'>
      <Header />
      <div className='container mx-auto max-w-2xl'>
        <BackButton href='/' />
        <h1 className='mt-8 text-center text-2xl'>Coming soon</h1>
      </div>
    </main>
  )
}
