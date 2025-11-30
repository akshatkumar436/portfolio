
import { Project, Experience, Skill, Achievement } from './types';
import { Award, FileText, CheckCircle } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Akshat Kumar",
  role: "Data Analyst & AI Graduate",
  email: "akshatkumar436@gmail.com",
  location: "Noida, Uttar Pradesh",
  phone: "+91 8210794532",
  summary: "Data-driven graduate in AI & Data Science with expertise in retail analytics, pricing optimization, and inventory management. Passionate about leveraging data to drive category growth.",
  // Placeholder for the user's image. In a real scenario, this would be an asset import or hosted URL.
  // Using a professional placeholder that matches the vibe.
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80",
  resumeUrl: "https://godentalclinic-sample.vercel.app/"
};

export const SKILLS_DATA: Skill[] = [
  { name: 'Python (Pandas/NumPy)', level: 90, category: 'Technical' },
  { name: 'SQL', level: 85, category: 'Technical' },
  { name: 'Power BI (DAX)', level: 88, category: 'Technical' },
  { name: 'Machine Learning', level: 80, category: 'Technical' },
  { name: 'Pricing Strategy', level: 75, category: 'Business' },
  { name: 'Market Basket Analysis', level: 85, category: 'Business' },
  { name: 'Inventory Opt.', level: 80, category: 'Business' },
  { name: 'Docker/Git', level: 70, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Retail Market Basket Analysis',
    category: 'Category Management',
    description: 'Identified high-affinity product pairs using association rule mining to enable targeted cross-selling strategies.',
    impact: '$15K Revenue Potential identified through bundling.',
    technologies: ['Python', 'Association Rule Mining', 'RNN-LightGBM'],
    metrics: [
      { label: 'Reorder Accuracy', value: '86%' },
      { label: 'Affinity Pairs', value: '12+' },
    ],
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p2',
    title: 'E-Commerce Performance Dashboard',
    category: 'Business Intelligence',
    description: 'Developed Power BI dashboards tracking category-level KPIs: YoY growth, regional sales, and stock turnover.',
    impact: 'Saved 8 weekly analyst-hours via automation.',
    technologies: ['Power BI', 'DAX', 'Power Query'],
    metrics: [
      { label: 'YoY Growth Tracked', value: '14.5%' },
      { label: 'Optimization Opps', value: '$240K' },
      { label: 'Transactions', value: '3M+' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p3',
    title: 'Pricing & Promotion Analysis',
    category: 'Optimization',
    description: 'Analyzed historical pricing data to determine optimal discount thresholds for seasonal categories.',
    impact: 'Recommended markdown strategies improving margin by 9%.',
    technologies: ['Tableau', 'Statistical Analysis', 'Excel'],
    metrics: [
      { label: 'Margin Imprv.', value: '9%' },
      { label: 'Simulated Scenarios', value: '50+' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'p4',
    title: 'Go Dental Clinic Website',
    category: 'Web Development',
    description: 'Designed and developed a comprehensive digital platform for Go Dental Clinic. Features include a seamless appointment booking system, interactive service catalog, and patient education portal.',
    impact: 'Enhanced digital presence and streamlined patient scheduling.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    metrics: [
      { label: 'Performance Score', value: '98/100' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Mobile Responsive', value: '100%' }
    ],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000',
    link: 'https://godentalclinic-sample.vercel.app/'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    role: 'Full Stack Intern',
    company: 'Forge Onwards',
    period: 'Feb 2025 - Apr 2025',
    description: [
      'Developed automated data pipelines reducing reporting latency by 40% using Python and SQL.',
      'Created customer segmentation model improving marketing campaign ROI by 18%.',
      'Designed interactive Power BI dashboards adopted by 15+ enterprise clients.'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'a1', title: 'Data Analytics Assessment', issuer: 'LearnTube.ai', year: '2025', icon: 'certificate' },
  { id: 'a2', title: 'Published IEEE Paper on Blockchain', issuer: 'IEEE', year: '2025', icon: 'paper' },
  { id: 'a3', title: 'AWS DevOps', issuer: 'TrainWithShubham', year: '2024', icon: 'award' },
];
