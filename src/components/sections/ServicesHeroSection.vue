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
        <p class="text-sm uppercase tracking-widest text-secondary">Enterprise Services</p>
        <h1 class="mt-4 text-4xl md:text-5xl font-semibold text-white">
          Secure Engineering & Cybersecurity Services Built for Critical Systems
        </h1>
        <p class="mt-6 text-lg text-text-secondary">
          We deliver end-to-end cybersecurity, secure software engineering, and incident response
          services tailored for organizations operating in high-risk environments. Every engagement
          is scoped, measured, and designed to withstand real-world threats.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-3 text-sm text-text-secondary">
          <div class="card-base bg-card/70">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
              </svg>
            </div>
            <div class="text-white font-semibold">Confidentiality First</div>
            <div>NDA standard on all engagements</div>
          </div>
          <div class="card-base bg-card/70">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 18h16M6 16v-6M12 16V6M18 16v-3" />
              </svg>
            </div>
            <div class="text-white font-semibold">Compliance Aligned</div>
            <div>ISO 27001, NIST CSF, OWASP</div>
          </div>
          <div class="card-base bg-card/70">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16M4 12h10M4 18h6" />
              </svg>
            </div>
            <div class="text-white font-semibold">Executive Reporting</div>
            <div>Clear risk posture and remediation roadmap</div>
          </div>
        </div>

        <div class="mt-10 flex flex-wrap gap-4">
          <RouterLink to="/contact" class="btn-primary">Request Security Review</RouterLink>
          <RouterLink to="/contact" class="btn-secondary">Discuss a Project</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: contentEl, isVisible: contentVisible } = useReveal({ threshold: 0.2 })
</script>
