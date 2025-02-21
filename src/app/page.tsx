import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Intro } from '@/components/intro'
import { ProjectShowcase } from '@/components/ProjectShowcase'
import { Tools } from '@/components/tools'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cory Bell',
  description: 'Full stack developer. Independent software contractor.',
}

export default function Home() {
  return (
    <main className='mx-auto h-full w-full'>
      <Header />
      <Intro />
      <Tools />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
