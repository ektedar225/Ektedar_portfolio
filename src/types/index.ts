export interface EducationItem {
  degree: string;
  institute: string;
  gpa: string;
  year: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  technologies: string[];
  link?: string;
  githubLink?: string;
}

export interface ProjectItem {
  title: string;
  technologies: string[];
  date: string;
  description: string[];
  link?: string;
  githubLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}