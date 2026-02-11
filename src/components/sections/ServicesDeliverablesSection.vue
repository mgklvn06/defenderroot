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
        <p class="text-sm uppercase tracking-widest text-secondary">Deliverables</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          What You Receive at the End of Every Engagement
        </h2>
        <p class="mt-4 text-text-secondary">
          We provide actionable outputs for both technical teams and executive stakeholders, ensuring
          clarity, accountability, and measurable remediation progress.
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
          <h3 class="text-lg font-semibold text-white">Cybersecurity Engagement Outputs</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>Risk-ranked vulnerability register</li>
            <li>Attack path and privilege escalation analysis</li>
            <li>Executive summary with business impact</li>
            <li>Remediation roadmap with priorities and timelines</li>
            <li>Re-test validation and closure evidence</li>
          </ul>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l9 5-9 5-9-5 9-5zm0 10l9 5-9 5-9-5 9-5" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Engineering Engagement Outputs</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>System architecture and security design documentation</li>
            <li>Implementation plan with milestones and dependencies</li>
            <li>Security controls and configuration baselines</li>
            <li>Operational runbooks and incident response playbooks</li>
            <li>Performance, security, and quality assurance checks</li>
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
