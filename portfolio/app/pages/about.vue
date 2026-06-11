<script setup lang="ts">
import { siteConfig } from '~/config/site'

useHead({ title: `About — ${siteConfig.name}` })
</script>

<template>
  <div class="section-padding mx-auto max-w-5xl">
    <p class="section-eyebrow">
      01 — About
    </p>
    <h1 class="section-title mt-3">
      Introduction
    </h1>

    <div class="mt-12 grid items-start gap-12 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
      <img
        src="/images/about.png"
        alt="Photo of Katie"
        class="aspect-[3/4] w-full max-w-xs rounded-xl border-2 border-blush object-cover object-top shadow-md md:max-w-none"
      >

      <div class="space-y-8">
        <p class="text-lg leading-relaxed text-ink">
          {{ siteConfig.intro }}
        </p>

        <div class="border-t border-line pt-8">
          <h2 class="font-display text-xl text-ink">
            On this site
          </h2>
          <ul class="mt-4 space-y-3 text-muted">
            <li><strong class="font-medium text-ink">Skills</strong> — what I work with day to day</li>
            <li><strong class="font-medium text-ink">Projects</strong> — real tools built for school and clients</li>
            <li><strong class="font-medium text-ink">Blog</strong> — writeups on learning and building</li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/skills" class="btn-secondary text-sm">
            Skills
          </NuxtLink>
          <a
            :href="siteConfig.github"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
