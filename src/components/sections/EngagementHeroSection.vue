<template>
  <section class="section-wrapper bg-primary">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div
        ref="contentEl"
        :class="[
          'max-w-3xl transition-all duration-component ease-enterprise',
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <p class="text-sm uppercase tracking-widest text-secondary">Engagement Models</p>
        <h1 class="mt-4 text-4xl md:text-5xl font-semibold text-white">
          Structured Engagements Designed for Measurable Security Outcomes
        </h1>
        <p class="mt-6 text-lg text-text-secondary">
          We engage with clear scope, defined objectives, and formal governance to ensure delivery
          aligned with risk, compliance, and operational continuity. Every engagement is built to
          produce actionable outcomes for technical and executive teams.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-3 text-sm text-text-secondary">
          <div class="card-base bg-card/70">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M4 12h10M4 18h6" />
              </svg>
            </div>
            <div class="text-white font-semibold">Defined Scope</div>
            <div>Explicit systems, timelines, and outcomes</div>
          </div>
          <div class="card-base bg-card/70">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 18h16M6 16v-6M12 16V6M18 16v-3" />
              </svg>
            </div>
            <div class="text-white font-semibold">Governance Ready</div>
            <div>Reporting cadence and executive summaries</div>
          </div>
          <div class="card-base bg-card/70">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
              </svg>
            </div>
            <div class="text-white font-semibold">Risk Aligned</div>
            <div>Threat-driven prioritization and remediation</div>
          </div>
        </div>

        <div class="mt-10 flex flex-wrap gap-4">
          <RouterLink to="/contact" class="btn-primary">Discuss an Engagement</RouterLink>
          <RouterLink to="/contact" class="btn-secondary">Request Security Review</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: contentEl, isVisible: contentVisible } = useReveal({ threshold: 0.2 })
</script>
