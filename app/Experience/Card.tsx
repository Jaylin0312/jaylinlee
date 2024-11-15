import { Experience } from '../../config/types'
import experiences from '../../config/experiences'
import Image from 'next/image'

interface CardProps {
  selectedExperienceIndex: number
  handleExperienceClick: (index: number) => void
}

export default function Card({
  selectedExperienceIndex,
  handleExperienceClick,
}: CardProps) {
  return (
    <ol className="relative border-l border-gray-200 md:w-1/4 md:h-[255px]">
      {experiences.map((experience: Experience, index: number) => (
        <li
          className={`ml-6 ${
            selectedExperienceIndex === index
              ? 'underline decoration-wavy underline-offset-[10px] text-[#8de8ff]'
              : ''
          } ${index === experiences.length - 1 ? 'pb-0' : 'pb-10'}`}
          key={index}
          onClick={() => handleExperienceClick(index)}
        >
          <div
            className={`absolute w-4 h-4 rounded-full mt-1.5 -left-2 border border-white ${
              selectedExperienceIndex === index ? 'bg-[#8de8ff]' : 'bg-slate-100'
            }`}
          ></div>
          <div className="flex items-center mb-1">
            <Image
              src={experience.iconUrl}
              alt={experience.company}
              width={30}
              height={30}
              loading="lazy"
              className="mr-4 w-auto h-auto"
            />
            <span
              className={`text-md lg:text-xl leading-none font-bold ${
                selectedExperienceIndex === index
                  ? 'text-[#8de8ff]'
                  : 'text-slate-100'
              }`}
            >
              {experience.company}
            </span>
          </div>
        </li>
      ))}
    </ol>
  )
}
