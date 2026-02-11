<template>
  <section class="section-wrapper">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <h2
        ref="headerEl"
        :class="[
          'text-3xl font-bold text-white mb-12 transition-all duration-component ease-enterprise',
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        Our Cybersecurity Services
      </h2>

      <div
        ref="servicesEl"
        :class="[
          'grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <Card
          v-for="(service, index) in services"
          :key="service.id"
          :title="service.title"
          :category="service.category"
          :description="service.description"
          :outcomes="service.outcomes"
          :icon="service.icon"
          :style="{ transitionDelay: servicesVisible ? `${index * 120}ms` : '0ms' }"
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
const { el: servicesEl, isVisible: servicesVisible } = useReveal({ threshold: 0.2 })

const services = [
  {
    id: "security-engineering",
    title: "Security Engineering",
    category: "Defensive",
    description: "Design secure architectures and harden applications & infrastructure.",
    outcomes: [
      "Resilient system design",
      "Threat modeling & mitigation",
      "Continuous monitoring"
    ],
    icon: "M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
  },
  {
    id: "offensive-security",
    title: "Offensive Security",
    category: "Offensive",
    description: "Penetration testing & ethical hacking to uncover vulnerabilities.",
    outcomes: [
      "Real-world attack simulations",
      "Critical vulnerability discovery",
      "Remediation roadmap"
    ],
    icon: "M12 2v4m0 12v4m10-10h-4M6 12H2m10-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12z"
  },
  {
    id: "cloud-security",
    title: "Cloud & DevSecOps",
    category: "Compliance",
    description: "Secure cloud environments & integrate security into dev pipelines.",
    outcomes: [
      "Cloud misconfiguration remediation",
      "Secure CI/CD pipelines",
      "Privileged access control"
    ],
    icon: "M20 16.5a4.5 4.5 0 0 0-4-4.5 6 6 0 0 0-11.5 2A4 4 0 0 0 6 20h11a3 3 0 0 0 3-3.5z"
  }
]
</script>
