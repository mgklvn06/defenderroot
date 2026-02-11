<template>
  <section class="section-wrapper text-white">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">

      <!-- Section Heading -->
      <h2
        ref="headerEl"
        :class="[
          'text-3xl font-bold mb-4 transition-all duration-component ease-enterprise',
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        Why Choose Us
      </h2>
      <p
        ref="descEl"
        :class="[
          'mb-12 text-text-secondary max-w-2xl transition-all duration-component ease-enterprise',
          descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        We merge software engineering and cybersecurity into a single workflow.
        We design, build, attack, and harden systems before they face real threats.
      </p>

      <!-- Cards Grid -->
      <div
        ref="cardsEl"
        :class="[
          'grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <Card
          v-for="(reason, index) in reasons"
          :key="reason.id"
          :title="reason.title"
          :description="reason.description"
          :outcomes="reason.features"
          :icon="reason.icon"
          :style="{ transitionDelay: cardsVisible ? `${index * 120}ms` : '0ms' }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "@/components/ui/Card.vue"
import { useReveal } from "@/composables/useReveal"

// Scroll animations
const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: descEl, isVisible: descVisible } = useReveal({ threshold: 0.2 })
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.2 })

interface Reason {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

const reasons: Reason[] = [
  {
    id: "security-by-design",
    title: "Security Built Into Engineering",
    description:
      "We don't bolt security onto finished systems. It is embedded into architecture, logic, and infrastructure from day one.",
    features: [
      "Secure architecture from the start",
      "Threat modeling & mitigation",
      "Compliance-ready systems"
    ],
    icon: "M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
  },
  {
    id: "development-offensive",
    title: "Development + Offensive Security",
    description:
      "We think like engineers and attackers: building systems and breaking them before real attackers do.",
    features: [
      "Simulated attacks",
      "Vulnerability identification",
      "Continuous hardening"
    ],
    icon: "M12 2v4m0 12v4m10-10h-4M6 12H2m10-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12z"
  },
  {
    id: "scalable-systems",
    title: "Systems That Scale & Survive",
    description:
      "Every system we deliver is designed to grow with your business and remain resilient against cyber risks.",
    features: [
      "High availability",
      "Resilient infrastructure",
      "Performance under load"
    ],
    icon: "M4 4h16v6H4zM4 14h16v6H4zM8 8h.01M8 18h.01"
  }
]
</script>
