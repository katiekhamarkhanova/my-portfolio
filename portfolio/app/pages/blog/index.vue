<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { blogPosts } from '~/data/blog'

useHead({ title: `Blog — ${siteConfig.name}` })

const sortedPosts = computed(() =>
  [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
)

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="section-padding mx-auto max-w-3xl">
    <p class="section-eyebrow">
      04 — Blog
    </p>
    <h1 class="section-title mt-3">
      Writing
    </h1>
    <p class="mt-4 text-muted">
      Notes on internships, teamwork, and senior year.
    </p>

    <ul class="mt-12 divide-y divide-line">
      <li v-for="post in sortedPosts" :key="post.slug">
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="group block rounded-xl py-8 transition-colors hover:bg-blush/30 hover:px-4"
        >
          <time class="font-mono text-xs text-rose">
            {{ formatDate(post.date) }}
          </time>
          <h2 class="mt-2 font-display text-xl text-ink transition-colors group-hover:text-rose md:text-2xl">
            {{ post.title }}
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-muted">
            {{ post.excerpt }}
          </p>
          <div v-if="post.tags.length" class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
