import Header from '@/Header/page'
import About from './About/page'
import Experience from './Experience/page'
import Project from './Project/page'
import Footer from '@/Footer/page'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <div className="px-6 md:px-12">
        <About />
        <Experience />
        <Project />
      </div>
      <Footer />
    </main>
  )
}
