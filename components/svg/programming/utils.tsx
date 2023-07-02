import AWS from './AWS'
import Docker from './Docker'
import Express from './Express'
import Firebase from './Firebase'
import Flask from './Flask'
import Flutter from './Flutter'
import GoLang from './GoLang'
import Javasript from './Javascript'
import Nextjs from './Nextjs'
import Nodejs from './Nodejs'
import Postgresql from './Postgresql'
import Python from './Python'
import Rabbitmq from './Rabbitmq'
import Reactjs from './Reactjs'
import Redis from './Redis'
import Tailwind from './Tailwind'
import Temporal from './Temporal'
import Typescript from './Typescript'
import Vue from './Vue'

export default function ProgrammingIcons({ name }: { name: string }) {
  switch (name) {
    case 'AWS':
      return <AWS />
    case 'Docker':
      return <Docker />
    case 'Express':
      return <Express />
    case 'Firebase':
      return <Firebase />
    case 'Flask':
      return <Flask />
    case 'Flutter':
      return <Flutter />
    case 'GoLang':
      return <GoLang />
    case 'Javascript':
      return <Javasript />
    case 'Nextjs':
      return <Nextjs />
    case 'Nodejs':
      return <Nodejs />
    case 'Postgresql':
      return <Postgresql />
    case 'Python':
      return <Python />
    case 'Rabbitmq':
      return <Rabbitmq />
    case 'Reactjs':
      return <Reactjs />
    case 'Redis':
      return <Redis />
    case 'Tailwind':
      return <Tailwind />
    case 'Temporal':
      return <Temporal />
    case 'Typescript':
      return <Typescript />
    case 'Vue':
      return <Vue />
    default:
      return <></>
  }
}
