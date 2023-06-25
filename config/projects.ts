import { Breadcrumb, Project } from './types'

const breadcrumb: Breadcrumb[] = [{ text: 'Home', url: '/' }]

const projects: Project[] = [
  {
    id: 'carbon-offset-marketplace',
    coverImageUrl: '/projects/CarbonMarketplace.png',
    title: 'Carbon Offset Marketplace',
    tags: [
      {
        text: 'Flask',
        icon: 'Flask',
      },
      {
        text: 'Expressjs',
        icon: 'Expressjs',
      },
      {
        text: 'PostgreSQL',
        icon: 'PostgreSQL',
      },
      {
        text: 'RabbitMQ',
        icon: 'RabbitMQ',
      },
      {
        text: 'Temporal',
        icon: 'Temporal',
      },
      {
        text: 'Nextjs',
        icon: 'Nextjs',
      },
    ],
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
    tags: [
      {
        text: 'Vue',
        icon: 'vue',
      },
      {
        text: 'Firebase',
        icon: 'firebase',
      },
      {
        text: 'Tailwind',
        icon: 'tailwind',
      },
      {
        text: 'TypeScript',
        icon: 'TypeScript',
      },
    ],
    linkUrl: {
      github: 'https://github.com/Jaylin0312/BigRedDot',
      realSite: 'https://is216-bigreddot.web.app/',
    },
    summary: `
    An one-stop platform for users to explore the myriad of products and services Singapore's small businesses have to offer.
    `,
    category: 'Web',
  },
  {
    id: 'instant-messaging-system',
    coverImageUrl: '/projects/CarbonMarketplace.png',
    title: 'Instant Messaging System',
    tags: [
      {
        text: 'Go',
        icon: 'Go',
      },
      {
        text: 'Redis',
        icon: 'Redis',
      },
      {
        text: 'Kitex',
        icon: 'Kitex',
      },
      {
        text: 'Hertz',
        icon: 'Hertz',
      },
    ],
    linkUrl: {
      github: 'https://github.com/Jaylin0312/TikTokImmersion_Assignment',
    },
    summary: `
    A simple instant messaging system that enables users to send and retrieve messages.`,
    category: 'Other',
  },
  {
    id: 'goldman-sachs-hackathon',
    coverImageUrl: '/projects/CarbonMarketplace.png',
    title: 'Goldman Sachs Hackathon',
    tags: [
      {
        text: 'JavasScript',
        icon: 'JavasScript',
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
    ],
    linkUrl: {
      github: 'https://github.com/team-pizza-one-bank-qr/GSHackathon',
    },
    summary: `
    A simple integration layer with serverless architecture that enables efficient onboarding of clients with business.
    `,
    category: 'Web',
  },
  {
    id: 'spending-visulisation-system',
    coverImageUrl: '/projects/CarbonMarketplace.png',
    title: 'Spending Visulisation System',
    tags: [
      {
        text: 'Expressjs',
        icon: 'Expressjs',
      },
      {
        text: 'PostgreSQL',
        icon: 'PostgreSQL',
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
    ],
    linkUrl: {
      github: 'https://github.com/Jaylin0312/spending-visualisation-system',
    },
    summary: `
    A simple spending visualisation system that enables users to see their daily spending based on the date range they selected.
    `,
    category: 'Web',
  },
  {
    id: 'shuttle-bus-booking-system',
    coverImageUrl: '/projects/CarbonMarketplace.png',
    title: 'Shuttle Bus Booking System',
    tags: [
      {
        text: 'Flutter',
        icon: 'Flutter',
      },
      {
        text: 'Dart',
        icon: 'Dart',
      },
    ],
    linkUrl: {
      github: 'https://github.com/tigercxx/GI-T6-Hello-World',
    },
    summary: `
    A flutter application that receives users requests for shuttle services and provides the service to promote sustainable transport`,
    category: 'Mobile',
  }
]

export { breadcrumb, projects }
