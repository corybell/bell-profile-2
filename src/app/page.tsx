import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Intro } from '@/components/intro'

export default function Home() {
  return (
    <main className='container mx-auto h-full px-4 md:px-8 lg:px-24 pt-2 '>
      <Header />
      <Intro />   
      <Experience />
      <Footer />
    </main>
  )
}
