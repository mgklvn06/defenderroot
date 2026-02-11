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
        <p class="text-sm uppercase tracking-widest text-secondary">How We Work</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          We Build Systems -- and Engineer Their Defense
        </h2>
        <p class="mt-4 text-text-secondary">
          Binary Defenders merges software engineering and cybersecurity into a single workflow.
          We design, build, attack, and harden systems before they ever face real threats.
        </p>
      </div>

      <div
        ref="contentEl"
        :class="[
          'mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start transition-all duration-component ease-enterprise',
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div class="card-base bg-card/80">
          <div class="font-mono text-sm text-text-secondary">
            <div class="text-text-primary">$binary-defenders build --secure-system</div>
            <div class="mt-4 space-y-2">
              <div>-> Business analysis -> requirements decoded</div>
              <div>-> System architecture -> secure blueprint created</div>
              <div>-> Engineering -> core systems developed</div>
              <div>-> Threat modeling -> attack surfaces mapped</div>
              <div>-> Deployment -> hardened system delivered</div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="card-base card-hover">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white">Security Built Into Engineering</h3>
            <p class="text-text-secondary">
              We do not bolt security onto finished systems. It is engineered into architecture,
              logic, and infrastructure from day one.
            </p>
          </div>
          <div class="card-base card-hover">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m10-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white">Development + Offensive Security</h3>
            <p class="text-text-secondary">
              We think like engineers and attackers. That means we build systems and break them
              before real attackers do.
            </p>
          </div>
          <div class="card-base card-hover">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l9 5-9 5-9-5 9-5zm0 10l9 5-9 5-9-5 9-5" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white">Systems Designed for Real Businesses</h3>
            <p class="text-text-secondary">
              We create platforms that solve real business problems while maintaining strong security foundations.
            </p>
          </div>
          <div class="card-base card-hover">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 18h16M6 16v-6M12 16V6M18 16v-3" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-white">Systems That Scale and Survive</h3>
            <p class="text-text-secondary">
              Every system we deliver is designed to scale with growth and remain resilient against technical and cyber risks.
            </p>
          </div>
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
