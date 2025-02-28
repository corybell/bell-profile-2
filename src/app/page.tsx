import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Intro } from '@/components/intro'
import { ProjectShowcase } from '@/components/ProjectShowcase'
import { HomePageStars } from '@/components/stars/HomePageStars'
import { Tools } from '@/components/tools'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cory Bell',
  description: 'Full stack developer. Independent software contractor.',
}

export default function Home() {
  return (
    <main className='mx-auto h-full w-full'>
      <HomePageStars />
      <Header />
      <Intro />
      <Tools />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
