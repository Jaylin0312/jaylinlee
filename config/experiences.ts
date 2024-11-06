import { Experience } from './types'

const experiences: Experience[] = [
  {
    iconUrl: '/ubs.png',
    company: 'UBS',
    companyUrl: 'https://www.ubs.com/global/en.html',
    duration: 'June 2024 - Aug 2024',
    jobPosition: 'Software Engineer Intern (CS Trading Apac)',
    achievements: [
      `Pioneered a real-time monitoring and alerting solution for new Azure resources supporting a multi-asset order management system`,
      `Automated resource provisioning and configuration using Ansible and Azure CLI`,
      `Developed and managed Docker images and GitLab CI/CD pipelines for new applications’ deployments`,
    ],
  },
  {
    iconUrl: '/altonomy.jpg',
    company: 'Altonomy',
    companyUrl: 'https://tokkalabs.com/',
    duration: 'Jan 2024 - May 2024',
    jobPosition: 'Software Engineer Intern (Crypto Market Making)',
    achievements: [
      `Designed and built a high-performance message broker with load balancing and rate limiting feature`,
      `Spearheaded the integration of a new Decentralized Exchange (DEX) with the in-house market-making engine`,
      `Implemented Profit & Loss (P&L) calculation and visualisation`,
    ],
  },
  {
    iconUrl: '/3forge.png',
    company: '3forge',
    companyUrl: 'https://www.3forge.com',
    duration: 'May 2023 - Present',
    jobPosition: 'Software Engineer Intern',
    achievements: [
      `Engineered technical solutions for global banks according to the client's business requirements`,
      `Implemented Python scripts to optimise debugging process of data mismatch issues and generation of test reports`,
      `Implemented end-to-end testing using Python, Selenium, and Jenkins`,
    ],
  },
  {
    iconUrl: '/works.png',
    company: 'Works Pte Ltd',
    companyUrl: 'https://www.works.so',
    duration: 'May 2022 - Aug 2022',
    jobPosition: 'Frontend Developer Intern',
    achievements: [
      `Implemented features such as user application system and dashboard for a Web3 marketplace using Angular, SCSS and Typescript`,
      `Engineered controllers, business logic, and custom reusable UI components to support user onboarding`,
      `Improved web performance by refactoring legacy code and removing unused functions and stylings`,
    ],
  },
]

export default experiences
