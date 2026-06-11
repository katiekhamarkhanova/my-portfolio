export interface Project {
  slug: string
  title: string
  image: string
  problem: string
  audience: string
  techStack: string[]
  approach: string
  liveUrl: string
  repoUrl: string
  reflection: string
}

export const projects: Project[] = [
  {
    slug: 'band-inventory',
    title: 'Band Inventory',
    image: '/images/band inventory.png',
    problem:
      'Our school\'s band teacher needed a reliable way to track instruments and sheet music — who had what, what needed repair, and what was available. Commercial tools like Cut Time exist, but they cost money the program didn\'t have. He was stuck juggling spreadsheets that were hard to update and easy to mess up.',
    audience:
      'The band teacher at SITHS, who manages dozens of instruments and music assignments for students across multiple classes.',
    techStack: ['Vue', 'Supabase', 'Tailwind CSS', 'ExcelJS'],
    approach:
      'My teammate and I built a web app with two separate tables — one for instruments, one for music — each supporting full CRUD operations, filtering, and Excel export. Teachers can add entries manually or bulk-upload an Excel sheet, then edit records to assign items to students or log repairs. We chose Vue for a reactive UI, Supabase for a free hosted database with real-time sync, Tailwind for fast styling, and ExcelJS so exports match the format he already used in spreadsheets.',
    liveUrl: '',
    repoUrl: '',
    reflection:
      'The hardest part wasn\'t the code — it was making sure the app matched how the teacher actually worked. We had weekly check-ins with him to test flows like uploading a sheet or logging a repair, and that feedback loop saved us from building features nobody needed. Working with a teammate also taught me to divide work clearly, review each other\'s PRs, and never push until we\'d both verified the data looked right in Supabase.',
  },
  {
    slug: 'pta-website-v2',
    title: 'PTA Website v2',
    image: '/images/pta.png',
    problem:
      'The existing PTA website felt dated — cluttered layouts, inconsistent styling, and content that was hard for parents to find quickly. The PTA needed something that looked current and was easier to maintain.',
    audience:
      'Parents, guardians, and PTA members at SITHS who need event info, meeting updates, and ways to get involved.',
    techStack: ['Nuxt', 'Tailwind CSS'],
    approach:
      'I remodeled and refactored the old site into a cleaner Nuxt application with a component-based structure, so pages could be updated without touching everything at once. Tailwind let us move fast on a cohesive, modern look — generous spacing, clear typography, and a layout that works on phones (where most parents are reading). The goal was less "flashy redesign" and more "actually pleasant to use."',
    liveUrl: '',
    repoUrl: '',
    reflection: '',
  },
  {
    slug: 'siths-website-redesign',
    title: 'SITHS Website Redesign',
    image: '/images/siths website redesign.png',
    problem:
      'The old school website was confusing to navigate, visually outdated, and had broken links scattered across pages. Important information was buried, and the design didn\'t reflect what the school is like today.',
    audience:
      'Current students, parents, staff, and prospective families researching Staten Island Technical High School.',
    techStack: ['Nuxt', 'Tailwind CSS', 'Sanity CMS'],
    approach:
      'We redesigned the site with clearer information architecture — fewer clicks to find what you need, consistent navigation, and a modern layout that\'s easy to read. Nuxt gave us fast routing and SSR-friendly pages; Tailwind handled the visual system; and Sanity CMS let non-developers update blog posts and page content without touching code. Every link was audited so nothing 404s quietly anymore.',
    liveUrl: '',
    repoUrl: '',
    reflection:
      'Integrating a headless CMS for the first time was a learning curve — modeling content in Sanity and fetching it in Nuxt took more planning than I expected. But it paid off: the site can grow without every text change becoming a dev task. If I did it again, I\'d document the content schema earlier so the whole team understood how pages map to CMS fields from day one.',
  },
]
