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
        <p class="text-sm uppercase tracking-widest text-secondary">Engagement Process</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          A Disciplined Workflow From Intake to Remediation
        </h2>
        <p class="mt-4 text-text-secondary">
          Our process ensures alignment across stakeholders, scoped execution, and measurable outcomes.
          Each phase includes clear artifacts and validation checkpoints.
        </p>
      </div>

      <div
        ref="stepsEl"
        :class="[
          'mt-12 grid gap-8 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(step, index) in steps"
          :key="step.title"
          :style="{ transitionDelay: stepsVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'card-base card-hover transition-all duration-component ease-enterprise',
            stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="step.icon" />
            </svg>
          </div>
          <div class="text-secondary text-xs uppercase tracking-widest">Phase {{ step.step }}</div>
          <h3 class="text-xl font-semibold text-white">{{ step.title }}</h3>
          <p class="text-text-secondary">{{ step.description }}</p>
          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary/90">
            <li v-for="item in step.outputs" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: stepsEl, isVisible: stepsVisible } = useReveal({ threshold: 0.2 })

const steps = [
  {
    step: "01",
    title: "Intake & Scoping",
    description: "Define objectives, systems in scope, and success criteria.",
    outputs: ["Scope definition", "Risk assumptions", "Engagement plan"],
    icon: "M4 6h16M4 12h10M4 18h6"
  },
  {
    step: "02",
    title: "Discovery & Architecture Review",
    description: "Review system architecture and identify security control gaps.",
    outputs: ["Architecture review", "Threat model", "Control mapping"],
    icon: "M12 2l9 5-9 5-9-5 9-5zM4 16h16"
  },
  {
    step: "03",
    title: "Assessment or Delivery",
    description: "Execute security testing, engineering work, or incident response.",
    outputs: ["Findings and evidence", "Secure implementation", "Validated outcomes"],
    icon: "M16 18l6-6-6-6M8 6l-6 6 6 6"
  },
  {
    step: "04",
    title: "Remediation & Validation",
    description: "Support remediation and validate fixes through re-testing.",
    outputs: ["Remediation guidance", "Re-test validation", "Closure evidence"],
    icon: "M5 13l4 4L19 7"
  },
  {
    step: "05",
    title: "Reporting & Governance",
    description: "Deliver executive and technical reports for accountability.",
    outputs: ["Executive summary", "Technical report", "Risk posture update"],
    icon: "M4 18h16M6 16v-6M12 16V6M18 16v-3"
  },
  {
    step: "06",
    title: "Ongoing Support",
    description: "Provide advisory support, monitoring, and strategic guidance.",
    outputs: ["Security advisory", "Operational playbooks", "Continuous improvement"],
    icon: "M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m0 6v6m0 4h.01"
  }
]
</script>
