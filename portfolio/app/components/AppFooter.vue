<script setup lang="ts">
import { siteConfig } from '~/config/site'

const year = new Date().getFullYear()

const socials = [
  { label: 'GitHub', href: siteConfig.github },
  { label: 'LinkedIn', href: siteConfig.linkedin },
  { label: 'Email', href: `mailto:${siteConfig.email}` },
]
</script>

<template>
  <footer class="mt-auto border-t border-line bg-white/40">
    <div class="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <p class="text-sm text-muted">
        © {{ year }} {{ siteConfig.name }}
      </p>

      <div class="flex flex-wrap gap-5">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-muted transition-colors hover:text-rose"
        >
          {{ social.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
