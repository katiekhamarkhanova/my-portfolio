<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { skillCategories } from '~/data/skills'

useHead({ title: `Skills — ${siteConfig.name}` })
</script>

<template>
  <div class="section-padding mx-auto max-w-5xl">
    <div class="hero-panel">
      <p class="section-eyebrow">
        02 — Skills
      </p>
      <h1 class="section-title mt-3">
        What I work with
      </h1>
      <p class="mt-4 max-w-lg text-muted">
        Languages, frameworks, and tools I use to build things.
      </p>
    </div>

    <div class="mt-10 grid gap-4 sm:grid-cols-2">
      <div
        v-for="category in skillCategories"
        :key="category.name"
        class="rounded-xl border border-line p-6"
        :class="category.cardClass"
      >
        <h2 class="font-mono text-xs uppercase tracking-[0.15em] text-rose">
          {{ category.name }}
        </h2>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="skill-badge"
            :class="category.badgeClass"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>

    <div class="skills-cta mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-muted">
        Code and commits on <span class="font-medium text-sage">GitHub</span>.
      </p>
      <a
        :href="siteConfig.github"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary shrink-0 text-sm"
      >
        View profile
      </a>
    </div>
  </div>
</template>
