import Header from '@/Header/page'
import About from "./About/page"
import Experience from './Experience/page'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 px-10 pb-10 md:px-12">
      <Header />
      <About />
      <Experience />
    </main>
  )
}
