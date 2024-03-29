export type Experience = {
    iconUrl: string;
    company: string;
    companyUrl: string;
    duration: string;
    jobPosition: string;
    achievements: string[];
};

export type Skillset = {
    text: string;
    icon: string;
};

export type Project = {
  id: string;
  coverImageUrl: string;
  title: string;
  year: number;
  tags: Skillset[];
  linkUrl?: {
    facebook?: string;
    twitter?: string;
    github?: string;
    realSite?: string;
  };
  summary: string;
  category: string;
};
