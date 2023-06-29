'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Dropdown from './Dropdown'
import MenuButton from './MenuButton'
import Linkedin from '@/svg/linkedin'
import Github from '@/svg/github'
import Email from '@/svg/email'

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
    <header className="flex mx-auto justify-between py-4 md:py-8 px-7 md:px-20 w-screen bg-slate-900 fixed left-0 z-10">
      <div className="flex text-slate-300 gap-5 lg:gap-8 items-center">
        <div className="block">
          <Image
            src="/ProfileLogo.png"
            alt="myImage"
            className="select-none"
            width="40"
            height="40"
          />
        </div>
        <a
          href="#exp_section"
          className="hidden md:block text-md hover:text-[#8de8ff] ease-in transition duration-200 hover:translate-y-[-0.1rem]"
        >
          <span className="text-[#8de8ff]">01.</span> Experience
        </a>
        <a
          href="#project_section"
          className="hidden md:block text-md hover:text-[#8de8ff] ease-in transition duration-200 hover:translate-y-[-0.1rem]"
        >
          <span className="text-[#8de8ff]">02.</span> Projects
        </a>
        <div className="hidden md:block text-md">
          <span className="text-[#8de8ff]">03.</span> Skills
        </div>
      </div>
      <div className="flex align-center text-slate-300 gap-5 lg:gap-8 items-center">
        <a href='https://www.linkedin.com/in/lee-jie-ling' className="hidden md:block ease-in transition duration-200 hover:translate-y-[-0.2rem]">
          <Linkedin />
        </a>
        <a href='https://github.com/Jaylin0312' className="hidden md:block ease-in transition duration-200 hover:translate-y-[-0.2rem]">
          <Github />
        </a>
        <a href='mailto:jieling.lee.2021@scis.smu.edu.sg' className="hidden md:block ease-in transition duration-200 hover:translate-y-[-0.2rem]">
          <Email />
        </a>
        <div onClick={toggleMenu} className="md:hidden">
          <MenuButton isOpen={isOpen} />
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'opacity-100 block' : 'opacity-0 invisible'
        } top-14 w-full right-0 transition-opacity duration-500 ease-in-out backdrop-blur-sm fixed z-20`}
      >
        <Dropdown isOpen={isOpen} toggleMenu={toggleMenu}/>
      </div>
    </header>
  )
}
