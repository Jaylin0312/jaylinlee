"use client";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import MenuButton from "./MenuButton";
import Linkedin from "../svg/linkedin";
import Github from "../svg/github";
import Email from "../svg/email";
import Crescent from "../svg/crescent";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function handleResize() {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="flex mx-auto justify-between px-5 py-4">
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
          isOpen ? "opacity-100" : "opacity-0"
        } absolute top-14 left-0 w-screen h-screen transition-opacity duration-200 ease-in-out`}
      >
        <Dropdown />
      </div>
    </header>
  );
}
