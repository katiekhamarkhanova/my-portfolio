<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { blogPosts } from '~/data/blog'

const route = useRoute()
const slug = route.params.slug as string

const post = blogPosts.find((p) => p.slug === slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useHead({ title: `${post.title} — ${siteConfig.name}` })

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article class="section-padding mx-auto max-w-3xl">
    <NuxtLink
      to="/blog"
      class="text-sm text-muted transition-colors hover:text-rose"
    >
      ← Back
    </NuxtLink>

    <header class="mt-8 border-b border-line pb-8">
      <time class="font-mono text-xs text-muted">
        {{ formatDate(post.date) }}
      </time>
      <h1 class="section-title mt-3">
        {{ post.title }}
      </h1>
      <p class="mt-2 text-sm text-muted">
        {{ post.author }}
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
    </header>

    <div class="mt-10 space-y-6">
      <template v-for="(section, i) in post.sections" :key="i">
        <h2
          v-if="section.type === 'h2'"
          class="font-display text-2xl text-ink"
        >
          {{ section.text }}
        </h2>
        <p
          v-else-if="section.type === 'p'"
          class="text-lg leading-relaxed text-muted"
        >
          {{ section.text }}
        </p>
        <div v-else-if="section.type === 'code'" class="overflow-hidden rounded-lg border border-line">
          <div class="border-b border-line bg-paper px-4 py-2">
            <span class="font-mono text-xs text-muted">
              {{ section.language ?? 'code' }}
            </span>
          </div>
          <pre class="overflow-x-auto bg-white p-4 text-sm leading-relaxed text-ink"><code>{{ section.code }}</code></pre>
        </div>
      </template>
    </div>
  </article>
</template>
