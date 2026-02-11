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
        <p class="text-sm uppercase tracking-widest text-secondary">Methodology</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Structured Delivery, Measurable Outcomes
        </h2>
        <p class="mt-4 text-text-secondary">
          Each engagement follows a disciplined methodology designed for regulated, high-risk environments.
          We align with industry standards and produce clear artifacts for technical teams and leadership.
        </p>
      </div>

      <div
        ref="stepsEl"
        :class="[
          'mt-12 grid gap-8 lg:grid-cols-2 transition-all duration-component ease-enterprise',
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
          <div class="text-secondary text-xs uppercase tracking-widest">Step {{ step.step }}</div>
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
    title: "Discovery & Scoping",
    description: "Define goals, systems in scope, and risk assumptions for a clear engagement baseline.",
    outputs: ["Engagement scope definition", "Risk assumptions", "Success criteria"],
    icon: "M4 6h16M4 12h10M4 18h6"
  },
  {
    step: "02",
    title: "Secure Design & Architecture",
    description: "Design secure architecture and controls aligned with business and compliance requirements.",
    outputs: ["Architecture diagrams", "Security control mapping", "Threat model"],
    icon: "M12 2l9 5-9 5-9-5 9-5zM4 16h16"
  },
  {
    step: "03",
    title: "Build, Assess, or Simulate",
    description: "Execute engineering or security testing using real-world attack and defense methodologies.",
    outputs: ["Secure implementation", "Assessment findings", "Exploit validation"],
    icon: "M16 18l6-6-6-6M8 6l-6 6 6 6"
  },
  {
    step: "04",
    title: "Validate & Remediate",
    description: "Verify fixes, close critical gaps, and validate hardened configurations.",
    outputs: ["Re-test results", "Remediation verification", "Updated risk posture"],
    icon: "M5 13l4 4L19 7"
  },
  {
    step: "05",
    title: "Report & Governance",
    description: "Deliver clear reports for technical and executive stakeholders.",
    outputs: ["Executive summary", "Technical report", "Remediation roadmap"],
    icon: "M4 18h16M6 16v-6M12 16V6M18 16v-3"
  },
  {
    step: "06",
    title: "Operational Support",
    description: "Provide continuous guidance, monitoring, and strategic advisory support.",
    outputs: ["Security advisory", "Operational playbooks", "Continuous improvement plan"],
    icon: "M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m0 6v6m0 4h.01"
  }
]
</script>
