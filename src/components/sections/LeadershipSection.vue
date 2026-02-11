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
        <p class="text-sm uppercase tracking-widest text-secondary">Leadership</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Meet Our Leadership Team
        </h2>
        <p class="mt-4 text-text-secondary">
          Our core leadership team consists of experienced security engineers and developers
          who have spent years protecting and building systems for businesses across Kenya.
        </p>
        <p class="mt-2 text-text-secondary">
          Plus a dedicated team of developers, security specialists, and support staff.
        </p>
      </div>

      <div
        ref="cardsEl"
        :class="[
          'mt-12 grid gap-8 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(leader, index) in leaders"
          :key="leader.name"
          :style="{ transitionDelay: cardsVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'card-base card-hover transition-all duration-component ease-enterprise',
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="leader.icon" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white">{{ leader.name }}</h3>
          <p class="text-secondary text-sm font-semibold">{{ leader.role }}</p>
          <p class="text-text-secondary">{{ leader.bio }}</p>
          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary/90">
            <li v-for="cert in leader.certs" :key="cert">{{ cert }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.2 })

const leaders = [
  {
    name: "David Kamau",
    role: "Founder & Lead Security Engineer",
    bio:
      "Security specialist with 8+ years in offensive security and system hardening. Built security frameworks for multiple startups.",
    certs: ["OSCP", "CEH", "Security+"],
    icon: "M12 12a4 4 0 1 0-0.01 0zM4 20a8 8 0 0 1 16 0"
  },
  {
    name: "Grace Wanjiru",
    role: "Senior Full-Stack Engineer",
    bio:
      "Full-stack developer specializing in secure, scalable systems. 6+ years building web and mobile applications.",
    certs: ["AWS Solutions Architect", "Google Cloud Professional"],
    icon: "M12 2l9 5-9 5-9-5 9-5zm0 10l9 5-9 5-9-5 9-5"
  },
  {
    name: "Michael Omondi",
    role: "Security Analyst & Researcher",
    bio:
      "Digital forensics and incident response specialist. Experience in data recovery and security investigations.",
    certs: ["CHFI", "EnCE", "GCFA"],
    icon: "M12 3l9 16H3zM12 9v4m0 4h.01"
  }
]
</script>
