import { Experience } from "./types";

const experiences: Experience[] = [
  {
    iconUrl: "/3forge.png",
    company: "3forge",
    companyUrl: "https://www.3forge.com",
    duration: "May 2023 - Present",
    jobPosition: "Software Engineer Intern",
    achievements: [
      `Engineered technical solutions for global banks according to the client's business requirements`,
      `Implemented Python scripts to optimise debugging process of data mismatch issues and generation of test reports`,
      `Implemented end-to-end testing using Python, Selenium, and Jenkins`,
    ],
  },
  {
    iconUrl: "/works.png",
    company: "Works Pte Ltd",
    companyUrl: "https://www.works.so",
    duration: "May 2022 - Aug 2022",
    jobPosition: "Frontend Developer Intern",
    achievements: [
      `Implemented features such as user application system and dashboard for a Web3 marketplace using Angular, SCSS and Typescript`,
      `Engineered controllers, business logic, and custom reusable UI components to support user onboarding`,
      `Improved web performance by refactoring legacy code and removing unused functions and stylings`,
    ],
  },
  {
    iconUrl: "/VR+.jpg",
    company: "VR+ Zone",
    companyUrl: "https://vrplus.com.my/",
    duration: "Jan 2019 - May 2019",
    jobPosition: "Digital Marketing Executive",
    achievements: [
      `Planned and implemented overall marketing strategies for company`,
      `Developed company's website from scratch which allowed customers to make bookings online. Successfully increased sales by 20%`,
      `Spearheaded marketing campaigns and teambuilding events for local and overseas companies`,
    ],
  }
];

export default experiences;
