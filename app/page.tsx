import Header from '@/Header/page'
import About from "./About/page"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 px-10">
      <Header />
      <About />
    </main>
  )
}