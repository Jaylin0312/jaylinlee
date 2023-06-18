'use client'
import Image from 'next/image'
import Intro from './intro'
import Scrolldown from '@/svg/scrolldown'
import Spline from '@splinetool/react-spline'
import styles from './styles.module.css'

export default function About() {
  return (
    <section className="flex flex-col items-center h-screen justify-center gap-20 md:gap-5">
      <div className="flex flex-wrap-reverse xl:gap-16 2xl:gap-32 justify-center items-center md:flex-nowrap md:py-16 xl:py-20 2xl:py-32 overflow-hidden">
        <div className="flex flex-col gap-2 md:gap-3 xl:gap-6 flex-wrap">
          <div className="text-md lg:text-lg 2xl:text-xl text-white">
            Hello, my name is
          </div>
          <div className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold animate-text bg-gradient-to-r from-[#1CDECA] via-[#C985FF] to-[#1CDECA] bg-clip-text text-transparent">
            JAYLIN LEE JIE LING
          </div>
          <div className="text-md lg:text-3xl 2xl:text-5xl text-white">
            I am a <Intro />
          </div>
          <div className="text-md md:max-w-lg lg:max-w-xl lg:text-lg 2xl:text-xl text-white">
            Second year Information Systems student at Singapore Management
            University who is eager to explore the field of software engineering
          </div>
        </div>
        <div className="max-w-full h-auto">
          <div className={styles.customsplinecup}>
            <Spline
              className={styles.splinecup}
              scene="https://prod.spline.design/X-4TSO3nnhEBcoxR/scene.splinecode"
            />
          </div>
          <Image
            src="/Avatar.png"
            alt="myImage"
            className="select-none"
            width={380}
            height={100}
          />
          <div className={styles.customsplinecam}>
            <Spline
              className={styles.splinecam}
              scene="https://prod.spline.design/S6LmJoLnEnH7ZFzg/scene.splinecode"
            />
          </div>
        </div>
      </div>
      <a href='#exp_section' className="animate-bounce">
        <Scrolldown/>
      </a>
    </section>
  )
}
