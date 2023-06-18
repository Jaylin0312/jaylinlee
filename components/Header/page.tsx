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
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])
  return (
    <header className="flex mx-auto justify-between py-4 md:py-8 px-7 md:px-10 w-screen bg-slate-900 fixed left-0 z-10">
      <div className="flex text-slate-100 gap-5 lg:gap-8">
        <div className="block text-md">Logo</div>
        <div className="hidden md:block text-md">Skills</div>
        <div className="hidden md:block text-md">Experience</div>
        <div className="hidden md:block text-md">Project</div>
        <div className="hidden md:block text-md">Contacts</div>
      </div>
      <div className="flex align-center text-slate-100 gap-5 lg:gap-8">
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
        } top-14 w-full right-0 transition-opacity duration-500 ease-in-out backdrop-blur-sm fixed z-20`}
      >
        <Dropdown isOpen={isOpen} />
      </div>
    </header>
  )
}
