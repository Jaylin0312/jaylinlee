'use client';
import Linkedin from "../svg/linkedin";
import Github from "../svg/github";
import Email from "../svg/email";
import Crescent from "../svg/crescent";
import MenuButton from "./MenuButton"

export default function Header() {
  return (
    <div className="flex mx-auto justify-between px-5 py-4">
      <div className="flex text-slate-100 gap-8">
        <div>Logo</div>
        <div className="hidden md:block">Skills</div>
        <div className="hidden md:block">Experience</div>
        <div className="hidden md:block">Project</div>
        <div className="hidden md:block">Contacts</div>
      </div>
      <div className="flex align-center text-slate-100 gap-8">
        <div className="hidden md:block"><Crescent/></div>
        <div className="hidden md:block"><Linkedin/></div>
        <div className="hidden md:block"><Github/></div>
        <div className="hidden md:block"><Email/></div>
        <div className="md:hidden"><MenuButton/></div>
      </div>
    </div>
  );
}
