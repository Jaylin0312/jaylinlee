'use client'
import Card from './Card'
import Detail from './Details/detail'
import { useState } from 'react'

export default function Experience() {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

  const handleExperienceClick = (index: number) => {
    setSelectedExperienceIndex(index);
  };

  return (
    <section id="exp_section" className="py-20 md:pt-32 md:pb-20 mx-auto max-w-6xl">
      <div className="flex flex-col justify-center items-center gap-14">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#C985FF] to-[#1CDECA]">
            01. Experience
          </div>
          <div className="text-base text-center text-[#8de8ff] mt-3.5">
            My work experience and where I&apos;ve acquired my skills
          </div>
        </div>
        <div className="flex w-full justify-center flex-col md:flex-row gap-10 lg:gap-0 cursor-pointer">
          <Card
            selectedExperienceIndex={selectedExperienceIndex}
            handleExperienceClick={handleExperienceClick}
          />
          <Detail selectedExperienceIndex={selectedExperienceIndex}/>
        </div>
      </div>
    </section>
  );
}
