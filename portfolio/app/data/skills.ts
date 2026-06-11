export interface SkillCategory {
  name: string
  cardClass: string
  badgeClass: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    cardClass: 'skill-card-pink',
    badgeClass: 'skill-badge-pink',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  },
  {
    name: 'Frameworks',
    cardClass: 'skill-card-green',
    badgeClass: 'skill-badge-green',
    skills: ['Vue', 'Nuxt', 'Tailwind CSS'],
  },
  {
    name: 'Tools',
    cardClass: 'skill-card-green',
    badgeClass: 'skill-badge-green',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Supabase'],
  },
  {
    name: 'Concepts',
    cardClass: 'skill-card-pink',
    badgeClass: 'skill-badge-pink',
    skills: ['Responsive Design', 'UI/UX Design', 'Debugging'],
  },
]
