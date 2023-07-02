import { Breadcrumb, Project, Skillset } from './types'

const breadcrumb: Breadcrumb[] = [{ text: 'Home', url: '/' }]

const projects: Project[] = [
  {
    id: 'carbon-offset-marketplace',
    coverImageUrl: '/projects/CarbonMarketplace.png',
    title: 'Carbon Offset Marketplace',
    year : 2023,
    tags: [
      {
        text: 'Flask',
        icon: 'Flask',
      },
      {
        text: 'Express',
        icon: 'Express',
      },
      {
        text: 'Postgresql',
        icon: 'Postgresql',
      },
      {
        text: 'Rabbitmq',
        icon: 'Rabbitmq',
      },
      {
        text: 'Temporal',
        icon: 'Temporal',
      },
      {
        text: 'Nextjs',
        icon: 'Nextjs',
      },
    ] as Skillset[],
    linkUrl: {
      github:
        'https://github.com/IS213-G9-tokyobanana/carbon-marketplace-backend',
      realSite: 'https://tokyobanana.netlify.app/',
    },
    summary: `
    A platform that enables individuals and organisations to reduce greenhouse gases through voluntary carbon offsetting
    `,
    category: 'Web',
  },
  {
    id: 'big-red-dot',
    coverImageUrl: '/projects/BigRedDot.png',
    title: 'Big Red Dot',
    year : 2022,
    tags: [
      {
        text: 'Vue',
        icon: 'Vue',
      },
      {
        text: 'Firebase',
        icon: 'Firebase',
      },
      {
        text: 'Tailwind',
        icon: 'Tailwind',
      },
      {
        text: 'Typescript',
        icon: 'Typescript',
      },
    ] as Skillset[],
    linkUrl: {
      github: 'https://github.com/Jaylin0312/BigRedDot',
      realSite: 'https://is216-bigreddot.web.app/',
    },
    summary: `
    An one-stop platform for users to explore the products and services Singapore's small businesses have to offer.
    `,
    category: 'Web',
  },
  {
    id: 'instant-messaging-system',
    coverImageUrl: '/projects/IMS.png',
    title: 'Instant Messaging System',
    year : 2023,
    tags: [
      {
        text: 'GoLang',
        icon: 'GoLang',
      },
      {
        text: 'Redis',
        icon: 'Redis',
      }
    ] as Skillset[],
    linkUrl: {
      github: 'https://github.com/Jaylin0312/TikTokImmersion_Assignment',
    },
    summary: `
    A simple instant messaging system that enables users to send and retrieve messages.`,
    category: 'Other',
  },
  {
    id: 'goldman-sachs-hackathon',
    coverImageUrl: '/projects/GSHackathon.png',
    title: 'Goldman Sachs Hackathon',
    year : 2022,
    tags: [
      {
        text: 'Javascript',
        icon: 'Javascript',
      },
      {
        text: 'Python',
        icon: 'Python',
      },
      {
        text: 'AWS',
        icon: 'AWS',
      },
      {
        text: 'Reactjs',
        icon: 'Reactjs',
      },
    ] as Skillset[],
    linkUrl: {
      github: 'https://github.com/team-pizza-one-bank-qr/GSHackathon',
    },
    summary: `
    A simple integration layer with serverless architecture that enables efficient onboarding of clients with business.
    `,
    category: 'Web',
  },
  {
    id: 'spending-visualisation-app',
    coverImageUrl: '/projects/SpendingVisualisationApp.png',
    title: 'Spending Visualisation App',
    year : 2023,
    tags: [
      {
        text: 'Express',
        icon: 'Express',
      },
      {
        text: 'Postgresql',
        icon: 'Postgresql',
      },
      {
        text: 'Docker',
        icon: 'Docker',
      },
      {
        text: 'Vue',
        icon: 'Vue',
      },
      {
        text: 'Tailwind',
        icon: 'Tailwind',
      },
    ] as Skillset[],
    linkUrl: {
      github: 'https://github.com/Jaylin0312/spending-visualisation-system',
    },
    summary: `
    A spending visualisation system that enables users to see their daily spending based on the date range they select.
    `,
    category: 'Web',
  },
  {
    id: 'shuttle-booking-system',
    coverImageUrl: '/projects/ShuttleBookingSystem.png',
    title: 'Shuttle Booking System',
    year : 2022,
    tags: [
      {
        text: 'Flutter',
        icon: 'Flutter',
      }
    ] as Skillset[],
    linkUrl: {
      github: 'https://github.com/tigercxx/GI-T6-Hello-World',
    },
    summary: `
    A flutter application that receives users requests for shuttle services and provides so to promote sustainable transport`,
    category: 'Mobile',
  }
]

export { breadcrumb, projects }
