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
        <p class="text-sm uppercase tracking-widest text-secondary">Trust & Governance</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Security Governance That Leadership Can Trust
        </h2>
        <p class="mt-4 text-text-secondary">
          We operate with strict confidentiality, structured delivery governance, and transparent reporting.
          This ensures alignment across technical teams, leadership, and compliance stakeholders.
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
          <h3 class="text-lg font-semibold text-white">Confidential by Default</h3>
          <p class="text-text-secondary">
            NDAs, controlled access, and secure handling of engagement data and evidence.
          </p>
        </div>
        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 7h10v10H7zM2 12h5m10 0h5M12 2v5m0 10v5" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Vendor-Independent Guidance</h3>
          <p class="text-text-secondary">
            We recommend what works for the environment, not what is tied to reseller margins.
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
            Clear, structured updates that translate technical risk into business impact and decisions.
          </p>
        </div>
        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16v6H4zM4 14h16v6H4zM8 8h.01M8 18h.01" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Operational Continuity</h3>
          <p class="text-text-secondary">
            Security work that improves resilience without disrupting critical business operations.
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
