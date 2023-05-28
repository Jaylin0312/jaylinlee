'use client'
import Image from 'next/image'
import Spline from '@splinetool/react-spline'
import styles from './styles.module.css';

export default function About() {
  return (
    <section className="flex flex-wrap-reverse py-4 justify-center items-center md:flex-nowrap md:items-center md:justify-between md:py-12 mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-4 flex-wrap">
        <div className="text-lg lg:text-3xl 2xl:text-6xl text-white">
          Hello, my name is
        </div>
        <div className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold animate-text bg-gradient-to-r from-[#1CDECA] via-[#C985FF] to-[#1CDECA] bg-clip-text text-transparent">
          JAYLIN LEE JIE LING
        </div>
        <div className="text-lg lg:text-3xl 2xl:text-6xl text-white">
          I am also a Web Developer
        </div>
        <div className="text-xs md:max-w-lg lg:max-w-xl lg:text-lg 2xl:text-xl text-white">
          Second year Information Systems student at Singapore Management
          University who is eager to explore the field of software engineering
        </div>
      </div>
      <div className="max-w-full h-auto">
        <div className={styles.customsplinecup}><Spline className={styles.splinecup} scene="https://prod.spline.design/X-4TSO3nnhEBcoxR/scene.splinecode" /></div>
        <Image src="/Avatar.png" alt="myImage" className='select-none' width={400} height={100} />
        <div className={styles.customsplinecam}> <Spline className={styles.splinecam} scene="https://prod.spline.design/S6LmJoLnEnH7ZFzg/scene.splinecode" /></div>
      </div>
    </section>
  )
}
