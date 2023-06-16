'use client'
import { useState, useEffect } from 'react'
import Dropdown from './Dropdown'
import MenuButton from './MenuButton'
import Linkedin from '@/svg/linkedin'
import Github from '@/svg/github'
import Email from '@/svg/email'
import Crescent from '@/svg/crescent'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  function toggleMenu() {
    setIsOpen(!isOpen)
  }
  function handleResize() {
    if (window.innerWidth > 768) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <header className="flex mx-auto justify-between py-8 max-w-screen-2xl w-full">
      <div className="flex text-slate-100 gap-8">
        <div>Logo</div>
        <div className="hidden md:block">Skills</div>
        <div className="hidden md:block">Experience</div>
        <div className="hidden md:block">Project</div>
        <div className="hidden md:block">Contacts</div>
      </div>
      <div className="flex align-center text-slate-100 gap-8">
        <div className="hidden md:block">
          <Crescent />
        </div>
        <div className="hidden md:block">
          <Linkedin />
        </div>
        <div className="hidden md:block">
          <Github />
        </div>
        <div className="hidden md:block">
          <Email />
        </div>
        <div onClick={toggleMenu} className="md:hidden">
          <MenuButton isOpen={isOpen} />
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'opacity-100 block' : 'opacity-0 invisible'
        } absolute top-20 left-0 w-screen transition-opacity duration-500 ease-in-out z-10 backdrop-blur-sm`}
      >
        <Dropdown isOpen={isOpen} />
      </div>
    </header>
  )
}
