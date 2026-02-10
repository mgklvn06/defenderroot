<template>
  <section class="py-24 bg-[#0a0d1a]">
    <div class="max-w-7xl mx-auto px-6 text-white text-center">
      <h2 class="text-3xl font-bold mb-12">Measurable Impact</h2>

      <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <Stat v-for="metric in metrics" :key="metric.id" :value="metric.value" :label="metric.label" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Stat from "@/components/ui/Stat.vue"

interface Metric {
  id: string
  value: string
  label: string
}

const metrics: Metric[] = [
  { id: "issues-fixed", value: "150+", label: "Security Issues Identified & Fixed" },
  { id: "risk-reduction", value: "60%", label: "Average Risk Reduction" },
  { id: "systems-built", value: "40+", label: "Systems Built & Secured" },
  { id: "reliability", value: "99.9%", label: "System Reliability" }
]
</script>
