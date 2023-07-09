import { skills } from '../../config/skills'
import TooltipPopup from './tooltip'

export default function Skill() {
  
  return (
    <section
      id="skills"
      className="py-20 mx-auto max-w-6xl flex flex-col gap-14"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#C985FF] to-[#1CDECA]">
          03. My Skills
        </div>
        <div className="text-base text-center text-[#8de8ff] mt-3.5">
          Skills that I have learned and used in my projects so far
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 gap-y-12">
        {skills.map((skill) => (
          <div key={skill.text}>
            <div className="flex justify-center">
              <TooltipPopup skill={skill} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
