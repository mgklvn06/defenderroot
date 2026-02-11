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
        <p class="text-sm uppercase tracking-widest text-secondary">Tooling & Standards</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Enterprise Tooling with Standards-Driven Execution
        </h2>
        <p class="mt-4 text-text-secondary">
          We tailor tooling to the environment while aligning with recognized security and engineering standards.
          Tool selection is driven by scope, risk, and regulatory requirements.
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
              <path d="M4 4h16v6H4zM4 14h16v6H4zM8 8h.01M8 18h.01" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Security Testing Stack</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>Network and application vulnerability scanners</li>
            <li>Web and API security testing suites</li>
            <li>Exploit validation and attack simulation tools</li>
            <li>Configuration and exposure review utilities</li>
          </ul>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 7h10v10H7zM2 12h5m10 0h5M12 2v5m0 10v5" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Engineering & DevSecOps</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>Secure CI/CD pipelines and code review tooling</li>
            <li>Infrastructure-as-code scanning</li>
            <li>Runtime monitoring and alerting</li>
            <li>Access control and secrets management tooling</li>
          </ul>
        </div>

        <div class="card-base card-hover">
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">Standards & Frameworks</h3>
          <ul class="list-disc list-inside space-y-2 text-text-secondary">
            <li>ISO 27001 controls alignment</li>
            <li>NIST Cybersecurity Framework mapping</li>
            <li>OWASP ASVS and Top 10 coverage</li>
            <li>Secure SDLC and governance best practices</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.2 })
</script>
