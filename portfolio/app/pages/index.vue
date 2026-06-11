<script setup lang="ts">
import { siteConfig } from '~/config/site'

useHead({ title: `Home — ${siteConfig.name}` })

const links = [
  { label: 'Skills', to: '/skills', desc: 'Languages, frameworks, tools', color: 'border-sage hover:text-sage' },
  { label: 'Projects', to: '/projects', desc: 'School & client work', color: 'border-rose hover:text-rose' },
  { label: 'Blog', to: '/blog', desc: 'Notes on building things', color: 'border-mint hover:text-sage' },
]
</script>

<template>
  <section class="section-padding mx-auto max-w-5xl">
    <div class="hero-panel max-w-2xl">
      <p class="section-eyebrow">
        portfolio
      </p>
      <h1 class="hero-name mt-4">
        katie <span class="italic text-rose">khamarkhanova</span>
      </h1>
      <p class="mt-6 text-lg leading-relaxed text-muted">
        {{ siteConfig.tagline }}
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <NuxtLink to="/about" class="btn-primary">
          About me
        </NuxtLink>
        <NuxtLink to="/projects" class="btn-secondary">
          See projects
        </NuxtLink>
      </div>
    </div>

    <div class="mt-16 rounded-2xl border border-line bg-white/50 p-6 sm:p-8">
      <p class="section-eyebrow">
        Elsewhere on this site
      </p>
      <ul class="mt-4 divide-y divide-line">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="site-link-row group"
            :class="link.color"
          >
            <span class="font-display text-2xl text-ink">
              {{ link.label }}
            </span>
            <span class="hidden text-sm text-muted sm:block">
              {{ link.desc }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
