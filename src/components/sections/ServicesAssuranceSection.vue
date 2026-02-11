<template>
  <section class="section-wrapper bg-background">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div
        ref="headerEl"
        :class="[
          'max-w-3xl transition-all duration-component ease-enterprise',
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <p class="text-sm uppercase tracking-widest text-secondary">Service Assurance</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Governance, Confidentiality, and Executive-Ready Reporting
        </h2>
        <p class="mt-4 text-text-secondary">
          We operate with strict confidentiality, structured governance, and clear reporting to
          ensure leadership and technical teams have a shared view of risk and progress.
        </p>
      </div>

      <div
        ref="cardsEl"
        :class="[
          'mt-12 grid gap-8 md:grid-cols-2 transition-all duration-component ease-enterprise',
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Confidentiality & Data Handling</h3>
          <p class="text-text-secondary">
            NDA by default, secure data handling practices, and controlled access to engagement artifacts.
          </p>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 18h16M6 16v-6M12 16V6M18 16v-3" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Executive Reporting</h3>
          <p class="text-text-secondary">
            Clear executive summaries and risk posture updates for leadership and governance teams.
          </p>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Remediation Support</h3>
          <p class="text-text-secondary">
            Actionable remediation guidance with validation and re-test support when needed.
          </p>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 7h10v10H7zM2 12h5m10 0h5M12 2v5m0 10v5" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Operational Transparency</h3>
          <p class="text-text-secondary">
            Regular check-ins, status updates, and shared documentation for full engagement visibility.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.2 })
</script>
