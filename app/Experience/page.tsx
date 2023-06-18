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
    <section id="exp_section" className="py-14 md:pt-32 mx-auto max-w-7xl">
      <div className="flex flex-col justify-center items-center gap-14">
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#C985FF] to-[#1CDECA]">
            &lt;h1&gt; Experience &lt;/h1&gt;
          </div>
          <div className="text-base text-slate-300 mt-3.5">
            My work experience and where I&apos;ve acquired my skills
          </div>
        </div>
        <div className="flex w-full justify-center flex-col md:flex-row gap-10 lg:gap-0">
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
