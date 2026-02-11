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
        <p class="text-sm uppercase tracking-widest text-secondary">Credentials</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Professional Certifications & Technology Partners
        </h2>
        <p class="mt-4 text-text-secondary">
          We maintain recognized certifications and align with trusted technology partners
          to deliver enterprise-grade security outcomes.
        </p>
      </div>

      <div
        ref="contentEl"
        :class="[
          'mt-12 grid gap-8 lg:grid-cols-2 transition-all duration-component ease-enterprise',
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l6 3v6c0 4-2.5 6.5-6 7-3.5-.5-6-3-6-7V5l6-3zM8 11l2 2 4-4" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Professional Certifications</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>CEH - Certified Ethical Hacker (EC-Council)</li>
            <li>OSCP - Offensive Security Certified Professional</li>
            <li>AWS Certified - Solutions Architect Professional</li>
            <li>ISO 27001 - Lead Implementer (PECB)</li>
          </ul>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 7h10v10H7zM2 12h5m10 0h5M12 2v5m0 10v5" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Technology Partners</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>AWS Partner Network - Cloud Infrastructure</li>
            <li>Digital Ocean - Hosting Solutions</li>
            <li>Cloudflare - Security & CDN</li>
            <li>MongoDB Atlas - Database Solutions</li>
          </ul>
        </div>
      </div>

      <div
        ref="statsEl"
        :class="[
          'mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-component ease-enterprise',
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          :style="{ transitionDelay: statsVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'card-base card-hover text-center transition-all duration-component ease-enterprise',
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="icon-badge mx-auto">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="stat.icon" />
            </svg>
          </div>
          <div class="text-3xl font-bold text-security">{{ stat.value }}</div>
          <div class="text-sm text-text-secondary">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: contentEl, isVisible: contentVisible } = useReveal({ threshold: 0.2 })
const { el: statsEl, isVisible: statsVisible } = useReveal({ threshold: 0.2 })

const stats = [
  { value: "3+", label: "Years in Operation", icon: "M4 18h16M6 16v-6M12 16V6M18 16v-3" },
  { value: "40+", label: "Projects Delivered", icon: "M12 2l9 5-9 5-9-5 9-5z" },
  { value: "25+", label: "Active Clients", icon: "M12 12a4 4 0 1 0-0.01 0zM4 20a8 8 0 0 1 16 0" },
  { value: "6+", label: "Industries Served", icon: "M3 3h18v18H3zM7 7h10v10H7z" }
]
</script>
