import Image from 'next/image'
import ContactForm from './form'

export default function Contact() {
  return (
    <section id="contact" className="py-20 mx-auto max-w-6xl flex flex-col gap-14">
      <div className="flex flex-col justify-center items-center">
        <div className="text-xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#C985FF] to-[#1CDECA]">
          04. Contact Me
        </div>
        <div className="text-base text-center text-[#8de8ff] mt-3.5">
          Interested to know me better? My inbox is always open!
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center md:gap-28'>
        <div>
          <Image src="/LightBulb.png" alt="contact" width={350} height={100} />
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
