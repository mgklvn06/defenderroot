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
        <p class="text-sm uppercase tracking-widest text-secondary">What Happens Next</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          From Submission to Proposal in Structured Steps
        </h2>
        <p class="mt-4 text-text-secondary">
          We follow a formal intake workflow to scope engagements accurately, reduce ambiguity,
          and align outcomes with business objectives.
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
          <div class="text-secondary text-xs uppercase tracking-widest">Step {{ step.step }}</div>
          <h3 class="text-xl font-semibold text-white">{{ step.title }}</h3>
          <p class="text-text-secondary">{{ step.description }}</p>
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
    title: "Initial Submission",
    description: "You submit your request with context, objectives, and constraints.",
    icon: "M4 6h16M4 12h10M4 18h6"
  },
  {
    step: "02",
    title: "Scoping Call",
    description: "We clarify scope, systems involved, and define success criteria.",
    icon: "M12 2l9 5-9 5-9-5 9-5zM4 16h16"
  },
  {
    step: "03",
    title: "Proposal & Timeline",
    description: "We deliver a scoped proposal with phases, timelines, and deliverables.",
    icon: "M4 18h16M6 16v-6M12 16V6M18 16v-3"
  },
  {
    step: "04",
    title: "Kickoff & Access",
    description: "We confirm access, align stakeholders, and begin execution.",
    icon: "M5 13l4 4L19 7"
  },
  {
    step: "05",
    title: "Delivery & Reporting",
    description: "You receive clear findings, remediation guidance, and next steps.",
    icon: "M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
  },
  {
    step: "06",
    title: "Ongoing Support",
    description: "We remain available for remediation support and follow-up validation.",
    icon: "M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m0 6v6m0 4h.01"
  }
]
</script>
