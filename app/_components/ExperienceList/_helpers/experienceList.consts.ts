export interface Experience {
  title: string;
  date?: string;
  type: 'work' | 'personal';
  slug: string;
}

export const LIST_OF_EXPERIENCES: Experience[] = [
  {
    title: 'Full-Stack Engineer I @ FYC Labs',
    date: 'Oct. 2025 - Jul. 2026',
    type: 'work',
    slug: 'fyc-labs',
  },
  {
    title: 'Webmaster @ Hodson P.I. Investigative Solutions',
    date: 'Jun. 2024 - Oct. 2025',
    type: 'work',
    slug: 'hodson-pi',
  },
  {
    title: 'what should we watch?',
    date: '2025',
    type: 'personal',
    slug: 'wsww',
  },
  {
    title: 'Jobhunter',
    date: '2024',
    type: 'personal',
    slug: 'jobhunter',
  }
];