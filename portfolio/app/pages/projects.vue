<script setup lang="ts">
import { siteConfig } from '~/config/site'
import { projects } from '~/data/projects'

useHead({ title: `Projects — ${siteConfig.name}` })
</script>

<template>
  <div class="section-padding mx-auto max-w-5xl">
    <p class="section-eyebrow">
      03 — Projects
    </p>
    <h1 class="section-title mt-3">
      Selected work
    </h1>
    <p class="mt-4 max-w-xl text-muted">
      Tools and sites built for teachers, parents, and my school.
    </p>

    <div class="mt-12 space-y-16">
      <article v-for="(project, i) in projects" :key="project.slug"
        class="border-t border-line pt-12 first:border-t-0 first:pt-0">
        <p class="font-mono text-xs text-muted">
          {{ String(i + 1).padStart(2, '0') }}
        </p>
        <h2 class="mt-2 font-display text-2xl text-ink md:text-3xl">
          {{ project.title }}
        </h2>

        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <div class="overflow-hidden rounded-lg border border-line aspect-video lg:aspect-[4/3]">
            <img :src="project.image" :alt="`${project.title} screenshot`" class="h-full w-full object-cover">
          </div>

          <div class="space-y-6 text-sm leading-relaxed">
            <div>
              <h3 class="font-medium text-ink">
                Problem
              </h3>
              <p class="mt-2 text-muted">
                {{ project.problem }}
              </p>
              <p class="mt-2 text-muted">
                <span class="text-ink">For:</span> {{ project.audience }}
              </p>
            </div>

            <div>
              <h3 class="font-medium text-ink">
                Approach
              </h3>
              <div class="mt-2 flex flex-wrap gap-2">
                <span v-for="tech in project.techStack" :key="tech" class="tag">
                  {{ tech }}
                </span>
              </div>
              <p class="mt-3 text-muted">
                {{ project.approach }}
              </p>
            </div>

            <div v-if="project.reflection" class="rounded-lg border-l-4 border-sage bg-mint/40 p-4 pl-5">
              <h3 class="font-medium text-ink">
                Reflection
              </h3>
              <p class="mt-2 text-muted">
                {{ project.reflection }}
              </p>
            </div>

            <div v-if="project.liveUrl || project.repoUrl" class="flex flex-wrap gap-3">
              <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer"
                class="btn-primary text-sm">
                Live demo
              </a>
              <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener noreferrer"
                class="btn-secondary text-sm">
                Source
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
