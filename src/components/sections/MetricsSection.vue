<template>
  <section class="section-wrapper">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6 text-white text-center">
      <h2
        class="text-3xl font-bold mb-12 transition-all duration-component ease-enterprise"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        Measurable Impact
      </h2>

      <div
        class="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 transition-all duration-component ease-enterprise"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <Stat
          v-for="(metric, index) in metrics"
          :key="metric.id"
          :value="metric.value"
          :label="metric.label"
          :style="{ transitionDelay: `${index * 120}ms` }"
        />
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
  { id: "security-improvement", value: "2.8x", label: "Security Improvement" },
  { id: "systems-built", value: "40+", label: "Systems Built & Secured" },
  { id: "features-built", value: "180+", label: "Features & Modules Delivered" },
  { id: "reliability", value: "99.9%", label: "System Reliability" }
]
</script>
