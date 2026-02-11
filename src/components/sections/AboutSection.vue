<template>
  <section class="section-wrapper bg-background">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6 space-y-24">

      <!-- INTRO -->
      <div
        ref="introEl"
        :class="[
          'max-w-3xl transition-all duration-component ease-enterprise',
          introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h1 class="text-4xl md:text-5xl font-semibold text-white">
          Security Engineering Built for Real-World Risk
        </h1>
        <p class="mt-6 text-lg text-text-secondary">
          Binary Defenders is a cybersecurity engineering firm focused on
          protecting critical systems, sensitive data, and business operations
          for organizations operating in high-risk environments.
        </p>
      </div>

      <!-- CORE PRINCIPLES -->
      <div
        ref="principlesEl"
        :class="[
          'grid md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-component ease-enterprise',
          principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(principle, index) in principles"
          :key="principle.title"
          :style="{ transitionDelay: principlesVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'space-y-3 transition-all duration-component ease-enterprise',
            principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <h3 class="text-white font-semibold">{{ principle.title }}</h3>
          <p class="text-sm text-text-secondary">
            {{ principle.description }}
          </p>
        </div>
      </div>

      <!-- DIFFERENTIATION BLOCK -->
      <div
        ref="differentiationEl"
        :class="[
          'grid lg:grid-cols-2 gap-16 items-start transition-all duration-component ease-enterprise',
          differentiationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div class="space-y-6">
          <h2 class="text-3xl font-semibold text-white">
            Why Organizations Choose Binary Defenders
          </h2>
          <p class="text-text-secondary">
            Many cybersecurity providers focus on tools. Others focus on reports.
            We focus on <strong>outcomes</strong> -- reducing breach probability, limiting blast
            radius, and enabling secure operations at scale.
          </p>

          <ul class="list-disc list-inside space-y-3 text-sm text-text-secondary">
            <li>Deep experience in cloud-native and hybrid environments</li>
            <li>No vendor lock-in or tool reselling bias</li>
            <li>Clear communication with technical and executive teams</li>
            <li>Proven delivery under strict regulatory requirements</li>
          </ul>
        </div>

        <!-- TRUST PANEL -->
        <aside
          class="card-base card-hover"
        >
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
            </svg>
          </div>
          <div>
            <p class="text-sm text-text-secondary">Engagement Focus</p>
            <p class="text-white font-medium">
              Mid-to-large enterprises, regulated industries, critical systems
            </p>
          </div>

          <div>
            <p class="text-sm text-text-secondary">Typical Clients</p>
            <p class="text-white font-medium">
              Financial services, healthcare, SaaS, government-linked entities
            </p>
          </div>

          <div>
            <p class="text-sm text-text-secondary">Operating Regions</p>
            <p class="text-white font-medium">
              Africa, Europe, Remote Global Engagements
            </p>
          </div>

          <div class="pt-4 border-t border-border/60 text-xs text-text-secondary/70">
            Client references available under NDA
          </div>
        </aside>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: introEl, isVisible: introVisible } = useReveal({ threshold: 0.2 })
const { el: principlesEl, isVisible: principlesVisible } = useReveal({ threshold: 0.2 })
const { el: differentiationEl, isVisible: differentiationVisible } = useReveal({ threshold: 0.2 })

const principles = [
  {
    title: "Engineering-First",
    description: "We approach cybersecurity as an engineering problem, not a checklist exercise or compliance-only function."
  },
  {
    title: "Threat-Driven",
    description: "Our work is based on real attacker behavior, modern threat models, and observable risk -- not assumptions."
  },
  {
    title: "Enterprise-Ready",
    description: "We design systems that operate at scale across regulated industries, complex infrastructures, and distributed teams."
  },
  {
    title: "Confidential by Design",
    description: "Security, privacy, and discretion are embedded in our processes from first contact to long-term engagement."
  }
]
</script>
