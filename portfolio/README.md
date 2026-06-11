# Portfolio

A personal portfolio site built with [Nuxt](https://nuxt.com/) and [Tailwind CSS](https://tailwindcss.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node)

## Run locally

```bash
# From the portfolio folder (not the repo root)
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open the URL printed in the terminal — usually [http://localhost:3000](http://localhost:3000). If port 3000 is already in use, Nuxt will pick the next one (e.g. 3001).

### If the site won't start or shows a 500 error

1. Stop any old terminal running `npm run dev` (Ctrl+C).
2. From the `portfolio` folder, run:

```bash
npm run dev:reset
```

3. Open the **exact URL** shown in the terminal (don't guess — an old broken server may still be on a different port).

## Build for production

```bash
npm run build
npm run preview
```

## Customize

| File | What to edit |
|------|-------------|
| `app/config/site.ts` | Your name, email, GitHub, LinkedIn, and intro text |
| `app/data/skills.ts` | Skill categories and badges |
| `app/data/projects.ts` | Project details, links, and reflections |
| `app/data/blog.ts` | Blog post metadata (add posts when ready) |

## Project structure

```
portfolio/
└── app/
    ├── app.vue            # Root component
    ├── assets/css/        # Global styles & animations
    ├── components/        # Navbar, footer
    ├── config/site.ts     # Site-wide settings
    ├── data/              # Content data files
    ├── layouts/           # Shared layout
    └── pages/             # Routes (home, about, skills, projects, blog)
```
