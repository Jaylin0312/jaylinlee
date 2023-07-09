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
import CSS from './CSS'
import Figma from './Figma'
import Git from './Git'
import Html from './Html'
import Java from './Java'
import MongoDB from './Mongodb'
import Mysql from './Mysql'
import Nuxtjs from './Nuxtjs'
import Angular from './Angular'

export default function ProgrammingIcons({
  name,
  width = 30,
  height = 30,
}: {
  name: string
  width?: number
  height?: number
}) {
  switch (name) {
    case 'AWS':
      return <AWS width={width} height={height} />
    case 'Docker':
      return <Docker width={width} height={height} />
    case 'Express':
      return <Express width={width} height={height} />
    case 'Firebase':
      return <Firebase width={width} height={height} />
    case 'Flask':
      return <Flask width={width} height={height} />
    case 'Flutter':
      return <Flutter width={width} height={height} />
    case 'GoLang':
      return <GoLang width={width} height={height} />
    case 'Javascript':
      return <Javasript width={width} height={height} />
    case 'Nextjs':
      return <Nextjs width={width} height={height} />
    case 'Nodejs':
      return <Nodejs width={width} height={height} />
    case 'Postgresql':
      return <Postgresql width={width} height={height} />
    case 'Python':
      return <Python width={width} height={height} />
    case 'Rabbitmq':
      return <Rabbitmq width={width} height={height} />
    case 'Reactjs':
      return <Reactjs width={width} height={height} />
    case 'Redis':
      return <Redis width={width} height={height} />
    case 'Tailwind':
      return <Tailwind width={width} height={height} />
    case 'Temporal':
      return <Temporal width={width} height={height} />
    case 'Typescript':
      return <Typescript width={width} height={height} />
    case 'Vue':
      return <Vue width={width} height={height} />
    case 'CSS':
      return <CSS width={width} height={height} />
    case 'Figma':
      return <Figma width={width} height={height} />
    case 'Git':
      return <Git width={width} height={height} />
    case 'Html':
      return <Html width={width} height={height} />
    case 'Java':
      return <Java width={width} height={height} />
    case 'MongoDB':
      return <MongoDB width={width} height={height}/>
    case 'Mysql':
      return <Mysql width={width} height={height}/>
    case 'Nuxtjs':
      return <Nuxtjs width={width} height={height}/>
    case 'Angular':
      return <Angular width={width} height={height}/>
    default:
      return <></>
  }
}
