export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  langLabel: string;
  langFlag: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps;
  uniProjects: ProjectProps;
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  siteLogo: string;
}

export interface ExperienceProps {
  company: string;
  department?: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  title: string;
  foreword: string;
  projectsList: ProjectPropsList[];
}

export interface ProjectPropsList {
  name: string;
  summary: string;
  image: string;
  linkPost?: string;
  linkPreview?: string;
  linkSource?: string;
  notYetReleased?: boolean;
}

export interface AboutProps {
  description: string[];
  image: string;
}

export interface HeaderProps {
  siteLogoIcon: string;
  navLinks: { text: string; href: string }[];
}