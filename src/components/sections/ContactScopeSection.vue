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
        <p class="text-sm uppercase tracking-widest text-secondary">Scope Alignment</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Projects We Are Best Positioned to Deliver
        </h2>
        <p class="mt-4 text-text-secondary">
          We focus on engagements where security, reliability, and compliance are mission-critical.
          If your request aligns with the scope below, we can move quickly and effectively.
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
              <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Ideal Engagements</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>Security assessments for critical systems</li>
            <li>Secure software and platform engineering</li>
            <li>Incident response and forensic investigations</li>
            <li>Cloud security posture improvement</li>
            <li>Compliance-aligned security programs</li>
          </ul>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6h16M4 12h10M4 18h6" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">What to Include in Your Request</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>Current systems or applications in scope</li>
            <li>Timeline expectations and urgency</li>
            <li>Compliance or regulatory requirements</li>
            <li>Known incidents, risks, or constraints</li>
            <li>Key stakeholders and escalation contacts</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: contentEl, isVisible: contentVisible } = useReveal({ threshold: 0.2 })
</script>
