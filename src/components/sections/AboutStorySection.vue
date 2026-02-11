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
        <p class="text-sm uppercase tracking-widest text-secondary">Our Story</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Built for Organizations That Cannot Afford Security Failures
        </h2>
        <p class="mt-4 text-text-secondary">
          Binary Defenders was formed to close the gap between cybersecurity and engineering execution.
          We focus on measurable risk reduction, resilient system design, and operational continuity
          for organizations operating in high-risk environments.
        </p>
      </div>

      <div
        ref="timelineEl"
        :class="[
          'mt-12 grid gap-8 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l9 5-9 5-9-5 9-5zM4 16h16" />
            </svg>
          </div>
          <div class="text-secondary text-xs uppercase tracking-widest">Phase 01</div>
          <h3 class="text-lg font-semibold text-white">Foundation</h3>
          <p class="text-text-secondary">
            Established to deliver secure systems for fintech, SaaS, and critical business platforms
            with security built into architecture and delivery.
          </p>
        </div>
        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 18h16M6 16v-6M12 16V6M18 16v-3" />
            </svg>
          </div>
          <div class="text-secondary text-xs uppercase tracking-widest">Phase 02</div>
          <h3 class="text-lg font-semibold text-white">Expansion</h3>
          <p class="text-text-secondary">
            Expanded into offensive security, incident response, and cloud security programs to support
            regulated and high-availability environments.
          </p>
        </div>
        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
            </svg>
          </div>
          <div class="text-secondary text-xs uppercase tracking-widest">Phase 03</div>
          <h3 class="text-lg font-semibold text-white">Enterprise Readiness</h3>
          <p class="text-text-secondary">
            Strengthened governance, reporting, and compliance alignment to meet enterprise expectations
            for accountability and risk management.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: timelineEl, isVisible: timelineVisible } = useReveal({ threshold: 0.2 })
</script>
