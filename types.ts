
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  image: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Technical' | 'Business' | 'Tools';
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  icon: 'award' | 'paper' | 'certificate';
}
