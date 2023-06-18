import { Experience } from '../../config/types'
import experiences from '../../config/experiences';
import Image from 'next/image'

interface CardProps {
  selectedExperienceIndex: number;
  handleExperienceClick: (index: number) => void;
}

export default function Card({ selectedExperienceIndex, handleExperienceClick }: CardProps) {
  return (
    <ol className="relative border-l border-gray-200 md:w-1/4 md:h-[180px]">
      {experiences.map((experience: Experience, index: number) => (
        <li
          className={`ml-6 ${
            selectedExperienceIndex === index
              ? 'underline decoration-wavy underline-offset-[10px] text-[#71B3E4]'
              : ''
          } ${index === experiences.length - 1 ? 'pb-0' : 'pb-10'}`}
          key={index}
          onClick={() => handleExperienceClick(index)}
        >
          <div
            className={`absolute w-4 h-4 bg-gray-200 rounded-full mt-1.5 -left-2 border border-white ${
              selectedExperienceIndex === index ? 'bg-[#71B3E4]' : ''
            }`}
          ></div>
          <div className="flex items-center mb-1">
            <Image
              src={experience.iconUrl}
              alt={experience.company}
              width={30}
              height={30}
              className="mr-4"
            />
            <span
              className={`text-md lg:text-xl leading-none font-bold ${
                selectedExperienceIndex === index ? 'text-[#71B3E4]' : 'text-white'
              }`}
            >
              {experience.company}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}