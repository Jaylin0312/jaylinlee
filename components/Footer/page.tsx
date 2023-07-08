import Linkedin from '@/svg/linkedin'
import Github from '@/svg/github'
import Email from '@/svg/email'

export default function Footer() {
  return (
    <div className="py-5 px-6 lg:px-14 bg-slate-700 flex justify-between items-center">
      <div className="text-sm text-slate-300 sm:text-center dark:text-gray-400">
        © Designed and Built by Jaylin Lee
      </div>
      <div className="flex align-center text-slate-300 gap-3 lg:gap-8 items-center">
        <a
          href="https://www.linkedin.com/in/lee-jie-ling"
          className="block"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/Jaylin0312"
          className="block"
        >
          <Github />
        </a>
        <a
          href="mailto:jieling.lee.2021@scis.smu.edu.sg"
          className="block"
        >
          <Email />
        </a>
      </div>
    </div>
  )
}
