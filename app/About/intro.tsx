import Typed from 'react-typed'

export default function Intro() {
  return (
    <Typed
      strings={[
        "Full Stack Developer",
        'Aspiring Software Engineer',
        'Student at SMU',
        'Tech Enthusiast',
        'Lifelong Learner',
        'Aspiring Zookeeper'
      ]}
      typeSpeed={100}
      backSpeed={100}
      loop
      className='text-[#71B3E4]'
    />
  )
}
