<template>
  <div
    class="bg-[#111421] rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:scale-[1.02] flex flex-col justify-between"
  >
    <div>
      <p class="text-xs text-cyan-400 font-semibold mb-2">{{ category }}</p>
      <h3 class="text-xl font-bold text-white mb-4">{{ title }}</h3>
      <p class="text-gray-300 mb-4">{{ description }}</p>

      <!-- Outcomes / Features -->
      <ul class="list-disc list-inside text-gray-400 space-y-1">
        <li v-for="(outcome, idx) in outcomes" :key="idx">{{ outcome }}</li>
      </ul>
    </div>

    <!-- CTA Button -->
    <RouterLink
      v-if="ctaText && ctaLink"
      :to="ctaLink"
      class="mt-6 inline-block rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-400 transition"
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
}>()
</script>
