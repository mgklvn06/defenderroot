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
        <p class="text-sm uppercase tracking-widest text-secondary">Intake Checklist</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          What We Need to Scope the Engagement Properly
        </h2>
        <p class="mt-4 text-text-secondary">
          The quality of scoping determines the quality of delivery. Providing clear inputs allows us to
          estimate timelines, risk exposure, and required effort with precision.
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
              <path d="M4 6h16M4 12h10M4 18h6" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Required Inputs</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>Business objectives and desired outcomes</li>
            <li>System inventory and environment overview</li>
            <li>Compliance requirements and constraints</li>
            <li>Known incidents, risks, or active threats</li>
            <li>Target timeline and operational constraints</li>
          </ul>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l9 5-9 5-9-5 9-5zM4 16h16" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Preferred Artifacts</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>Architecture diagrams or system maps</li>
            <li>Application or API inventory</li>
            <li>Existing security policies or standards</li>
            <li>Access and testing windows</li>
            <li>Stakeholder and escalation contacts</li>
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
