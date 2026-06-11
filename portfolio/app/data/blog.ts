export type BlogSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'code'; code: string; language?: string }

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'iterative-design-at-247-teach',
    title: 'The Lightbulb Moment: Learning Iterative Design at 24/7 Teach',
    date: '2026-01-14',
    author: 'Katie',
    excerpt:
      'During my web development internship at 24/7 Teach, a single piece of feedback at our weekly meeting changed how I think about building products.',
    tags: ['growth milestone', 'internship', 'design'],
    sections: [
      {
        type: 'p',
        text:
          'Last fall I interned at 24/7 Teach, a company that builds educational minigames for kids. My job was web development — translating game ideas into interfaces children could actually use without getting lost. I thought "done" meant finishing a screen and moving on. My boss had other ideas.',
      },
      {
        type: 'h2',
        text: 'What iterative design actually means',
      },
      {
        type: 'p',
        text:
          'At one of our weekly meetings, I presented a minigame layout I\'d spent days on. It looked polished. But my boss asked a simple question: "Did you test this with the flow a second-grader would take, or the flow you wish they\'d take?" That stung a little — but he was right. I had designed for the ideal path, not the messy real one.',
      },
      {
        type: 'p',
        text:
          'He introduced me properly to iterative design: ship a small version, watch where users stumble, fix that, repeat. Not "redesign everything because you\'re embarrassed," but deliberate cycles of feedback. For ed-tech, that means big buttons, obvious next steps, and forgiving layouts when kids tap the wrong thing.',
      },
      {
        type: 'h2',
        text: 'Putting it into practice',
      },
      {
        type: 'p',
        text:
          'Instead of building an entire game screen in one go, I started breaking work into testable chunks — a button row, then feedback states, then scoring. Here\'s a simplified version of how I began structuring components so each piece could evolve independently:',
      },
      {
        type: 'code',
        language: 'vue',
        code: `<script setup lang="ts">
// v1: one big component — hard to change
// v2: split into small pieces we can iterate on

const step = ref<'prompt' | 'answer' | 'feedback'>('prompt')
const selected = ref<string | null>(null)

function choose(option: string) {
  selected.value = option
  step.value = 'feedback' // next iteration: add sound + retry
}
</script>

<template>
  <div v-if="step === 'prompt'">
    <p>Which shape has 3 sides?</p>
    <button v-for="opt in ['Circle', 'Triangle', 'Square']" :key="opt" @click="choose(opt)">
      {{ opt }}
    </button>
  </div>
  <p v-else>Nice try — let's go again!</p>
</template>`,
      },
      {
        type: 'p',
        text:
          'Each weekly meeting became less scary because I had something concrete to react to. "Kids hesitated here" became a task, not a vague failure. By the end of the internship, I wasn\'t chasing perfect first drafts — I was chasing faster learning loops.',
      },
      {
        type: 'h2',
        text: 'What stuck with me',
      },
      {
        type: 'p',
        text:
          'Iterative design isn\'t laziness or cutting corners. It\'s respecting that you don\'t know everything on day one — especially when your users are eight years old and will absolutely click the mascot instead of the "Next" button. That mindset followed me back to school projects, and I\'m glad it did.',
      },
    ],
  },
  {
    slug: 'building-band-inventory-as-a-team',
    title: 'Smooth Sailing: What Band Inventory Taught Me About Teamwork',
    date: '2026-03-22',
    author: 'Katie',
    excerpt:
      'Building a full inventory app with a teammate and a real client sounds stressful. For us, clear communication made it one of the smoothest projects I\'ve worked on.',
    tags: ['teamwork', 'collaboration', 'projects'],
    sections: [
      {
        type: 'h2',
        text: 'Three people, one product',
      },
      {
        type: 'p',
        text:
          'Band Inventory wasn\'t a classroom exercise with a fake rubric — our band teacher was the client. He needed to track instruments and sheet music, export to Excel, upload bulk data, and log repairs. My teammate and I split the work, but we shared one Supabase database and one teacher expecting results that actually worked on Monday morning.',
      },
      {
        type: 'h2',
        text: 'Communication that actually helped',
      },
      {
        type: 'p',
        text:
          'We set a few ground rules early: respect each other\'s deadlines, ask before changing shared tables, and demo to the teacher together so nobody was blindsided. When I built the Excel export with ExcelJS, I sent a Loom-style walkthrough before merging so my teammate knew the data shape coming out of exports. When they built the upload flow, they documented which columns were required so I didn\'t break imports with a schema change.',
      },
      {
        type: 'p',
        text:
          'The band teacher was part of the team too. Short check-ins — "Does this match how you assign horns to freshmen?" — prevented weeks of building the wrong thing. He wasn\'t technical, so we learned to translate: instead of "CRUD endpoints," we said "you can add, edit, or delete a row, and it saves automatically."',
      },
      {
        type: 'h2',
        text: 'Challenges we hit',
      },
      {
        type: 'p',
        text:
          'It wasn\'t perfect. We once almost duplicated instrument IDs because we both ran migrations without syncing. We fixed it with a shared checklist before any Supabase change: message in our group chat, wait for a thumbs up, then push. Boring? Yes. Effective? Also yes.',
      },
      {
        type: 'h2',
        text: 'What I couldn\'t have done alone',
      },
      {
        type: 'p',
        text:
          'Solo, I would\'ve burned out trying to be designer, backend, frontend, and client liaison. With a teammate, I could go deep on exports while someone else owned filtering and table UX. With a real user, we built compassion into the product — error messages that made sense, confirmations before deletes, exports that matched his old spreadsheet layout so adoption was easy.',
      },
      {
        type: 'p',
        text:
          'Professionalism wasn\'t wearing a tie. It was showing up prepared, not pushing broken code, and treating our teacher\'s time like it mattered. That\'s the stuff you don\'t learn from a solo todo app — and I\'m grateful this project forced the lesson.',
      },
    ],
  },
  {
    slug: 'capstone-reflection',
    title: 'Four Years In: What I\'m Proud Of (and What\'s Next)',
    date: '2026-06-01',
    author: 'Katie',
    excerpt:
      'As I wrap up senior year at SITHS and get ready for Cooper Union, here\'s an honest look at how far I\'ve come — and what I still want to grow.',
    tags: ['capstone', 'reflection', 'growth'],
    sections: [
      {
        type: 'p',
        text:
          'When I started at SITHS, "building a website" meant tweaking HTML until something looked okay. I\'m leaving as someone who\'s shipped real tools for real people — a band teacher, a PTA, an entire school community — and I still feel like I\'m just getting started. That\'s probably a good sign.',
      },
      {
        type: 'h2',
        text: 'What I\'m most proud of',
      },
      {
        type: 'p',
        text:
          'I\'m proud that my work left the classroom. Band Inventory replaced a paid tool with something free and tailored to our program. The PTA site and SITHS redesign weren\'t vanity projects — parents and students actually use them. I\'m proud of the teamwork behind Band Inventory, the iterative design mindset from my 24/7 Teach internship, and the nights I turned 2AM ideas into working prototypes instead of abandoning them.',
      },
      {
        type: 'p',
        text:
          'I\'m also proud of learning to care about the unglamorous parts: broken links, export formats, whether a second-grader can find the next button. Software isn\'t just code — it\'s how people feel when they use it.',
      },
      {
        type: 'h2',
        text: 'What I still want to work on',
      },
      {
        type: 'p',
        text:
          'I want to get stronger at testing and documentation before things reach users — not after someone finds a bug. I want to explore more backend patterns beyond "Supabase handles it." At Cooper Union, I\'m excited to push into engineering with a foundation in empathy for users, but I know the pace will be different and I\'ll need to build disciplined study habits to match.',
      },
      {
        type: 'h2',
        text: 'Looking forward',
      },
      {
        type: 'p',
        text:
          'Four years ago I wouldn\'t have believed I\'d be heading to Cooper Union with a portfolio full of shipped work. The thread through everything — minigames, inventory tables, school websites — is the same: take something confusing, make it clearer, and don\'t stop until the people using it say "yeah, this actually helps." That\'s the developer I want to keep becoming.',
      },
    ],
  },
]
