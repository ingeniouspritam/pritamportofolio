export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'react' | 'fullstack' | 'enterprise';
  description: string;
  longDescription: string;
  technologies: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
  architectureNotes?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: 'Full-time' | 'Training' | 'Internship';
  description: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: 'data' | 'leadership' | 'tech';
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}
