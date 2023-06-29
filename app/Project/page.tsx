'use client'
import Cards from './Cards'
import { useState } from 'react'
import styles from './styles.module.css'

export default function Project() {
  const [selectedItem, setSelectedItem] = useState('All')

  const handleItemClick = (item: string) => {
    setSelectedItem(item)
  }

  const renderNavItem = (item: string) => {
    const isSelected = selectedItem === item

    return (
      <div
        key={item}
        className={`inline-block w-full text-center p-3 relative ${
          isSelected
            ? `${styles.selected} text-slate-300 transition ease-in-out`
            : 'text-slate-600'
        }`}
        onClick={() => handleItemClick(item)}
      >
        {item}
      </div>
    )
  }

  return (
    <section id="project_section" className="py-14 md:py-32 mx-auto max-w-6xl">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#C985FF] to-[#1CDECA]">
            &lt;h1&gt; Projects &lt;/h1&gt;
          </div>
          <div className="text-base text-[#8de8ff] mt-3.5">
            My personal projects and things that I&apos;ve built in the past.
          </div>
        </div>
        <div className="text-slate-300 mt-3.5 flex w-full items-center max-w-xl border-b border-slate-600">
          {['All', 'Web', 'Mobile'].map((item) => renderNavItem(item))}
        </div>
        <div className="w-full mt-10">
          <Cards query={selectedItem} />
        </div>
      </div>
    </section>
  )
}
