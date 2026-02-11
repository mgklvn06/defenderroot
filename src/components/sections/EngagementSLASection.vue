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
        <p class="text-sm uppercase tracking-widest text-secondary">Response Expectations</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Response Times, SLAs, and Communication Cadence
        </h2>
        <p class="mt-4 text-text-secondary">
          Response windows and escalation paths are defined during scoping. SLAs are available
          for regulated and mission-critical environments.
        </p>
      </div>

      <div
        ref="cardsEl"
        :class="[
          'mt-12 grid gap-8 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h16M4 6h10M4 18h6" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Standard Response</h3>
          <p class="text-text-secondary">
            Typical inquiries and project requests receive an initial response within 24 hours
            during business days.
          </p>
          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary/90">
            <li>Initial response: within 24 hours</li>
            <li>Scoping call: 2-5 business days</li>
            <li>Proposal delivery: 5-10 business days</li>
          </ul>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m0 6v6m0 4h.01" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Priority Response</h3>
          <p class="text-text-secondary">
            Priority response is available for active projects and time-sensitive initiatives.
          </p>
          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary/90">
            <li>Initial response: within 8 hours</li>
            <li>Expedited scoping and scheduling</li>
            <li>Dedicated engagement lead</li>
          </ul>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l9 16H3zM12 9v4m0 4h.01" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Critical Response</h3>
          <p class="text-text-secondary">
            Emergency response for security incidents is available by agreement.
          </p>
          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary/90">
            <li>24/7 availability (by agreement)</li>
            <li>Incident containment support</li>
            <li>Forensic evidence preservation</li>
          </ul>
        </div>
      </div>

      <div
        ref="noteEl"
        :class="[
          'mt-8 text-text-secondary transition-all duration-component ease-enterprise',
          noteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        SLA terms, response windows, and escalation procedures are finalized during scoping and documented
        in the engagement agreement.
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.2 })
const { el: noteEl, isVisible: noteVisible } = useReveal({ threshold: 0.2 })
</script>
