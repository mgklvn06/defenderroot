<template>
  <section class="section-wrapper">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div
        ref="headerEl"
        :class="[
          'max-w-3xl transition-all duration-component ease-enterprise',
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <p class="text-sm uppercase tracking-widest text-secondary">Core Capabilities</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Secure Systems. Offensive Insight. Business-Grade Engineering.
        </h2>
        <p class="mt-4 text-text-secondary">
          We combine software engineering, security testing, and recovery expertise to
          deliver systems that work and withstand real threats.
        </p>
      </div>

      <div
        ref="cardsEl"
        :class="[
          'mt-12 grid gap-8 md:grid-cols-3 transition-all duration-component ease-enterprise',
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(capability, index) in capabilities"
          :key="capability.title"
          :style="{ transitionDelay: cardsVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'card-base card-hover transition-all duration-component ease-enterprise',
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="capability.icon" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white">{{ capability.title }}</h3>
          <p class="text-text-secondary">{{ capability.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.2 })

const capabilities = [
  {
    title: "Custom Software & Business Systems",
    description:
      "We build secure platforms, internal systems, and customer-facing applications designed for scale, performance, and long-term growth.",
    icon: "M16 18l6-6-6-6M8 6l-6 6 6 6"
  },
  {
    title: "Cybersecurity & Digital Forensics",
    description:
      "We assess real-world threats, investigate incidents, and harden infrastructure using modern offensive and defensive techniques.",
    icon: "M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
  },
  {
    title: "Data Recovery & Secure Architecture",
    description:
      "We restore compromised data, rebuild trust, and design resilient architectures that minimize exposure to future risk.",
    icon:
      "M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4m0 6c0 2.2 3.6 4 8 4s8-1.8 8-4m-16 6c0 2.2 3.6 4 8 4s8-1.8 8-4"
  }
]
</script>
