<template>
  <div
    class="card-base card-hover flex flex-col justify-between"
  >
    <div>
      <div v-if="icon" class="icon-badge mb-4">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path :d="icon" />
        </svg>
      </div>
      <p v-if="category" class="text-xs text-secondary font-semibold mb-2">{{ category }}</p>
      <h3 class="text-xl font-bold text-white mb-4">{{ title }}</h3>
      <p class="text-text-secondary mb-4">{{ description }}</p>

      <!-- Outcomes / Features -->
      <ul class="list-disc list-inside text-text-secondary/80 space-y-1">
        <li v-for="(outcome, idx) in outcomes" :key="idx">{{ outcome }}</li>
      </ul>
    </div>

    <!-- CTA Button -->
    <RouterLink
      v-if="ctaText && ctaLink"
      :to="ctaLink"
      class="mt-6 btn-primary"
    >
      {{ ctaText }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps<{
  title: string
  category?: string
  description: string
  outcomes?: string[]
  ctaText?: string
  ctaLink?: string
  icon?: string
}>()
</script>
