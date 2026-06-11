<script setup lang="ts">
import { siteConfig } from '~/config/site'

const route = useRoute()
const menuOpen = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
]

function isActive(path: string) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function closeMenu() {
  menuOpen.value = false
}

watch(() => route.path, closeMenu)
</script>

<template>
  <header class="site-header sticky top-0 z-50">
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
      <NuxtLink
        to="/"
        class="site-logo font-display text-lg lowercase sm:text-xl"
      >
        kk
      </NuxtLink>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="nav-link"
            :class="{ 'nav-link-active': isActive(link.to) }"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <button
        type="button"
        class="rounded-md px-2 py-1 text-sm text-rose transition-colors hover:bg-blush/60 md:hidden"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? 'Close' : 'Menu' }}
      </button>
    </nav>

    <div
      v-if="menuOpen"
      class="border-t border-line bg-blush/40 px-5 py-4 md:hidden"
    >
      <ul class="flex flex-col gap-3">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="nav-link block"
            :class="{ 'nav-link-active': isActive(link.to) }"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>
