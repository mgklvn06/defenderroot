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
        <p class="text-sm uppercase tracking-widest text-secondary">Contact</p>
        <h1 class="mt-4 text-4xl md:text-5xl font-semibold text-white">
          Tell Us What You Need. We Will Scope It Precisely.
        </h1>
        <p class="mt-6 text-lg text-text-secondary">
          Share your security, engineering, or incident response requirements and we will provide a
          structured response, recommended scope, and clear next steps.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-3 text-sm text-text-secondary">
          <div class="card-base bg-card/70">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12h16M4 6h10M4 18h6" />
              </svg>
            </div>
            <div class="text-white font-semibold">Response Expectations</div>
            <div>Initial response within 24 hours</div>
          </div>
          <div class="card-base bg-card/70">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" />
              </svg>
            </div>
            <div class="text-white font-semibold">Confidentiality</div>
            <div>NDA available by default</div>
          </div>
          <div class="card-base bg-card/70">
            <div class="icon-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l9 16H3zM12 9v4m0 4h.01" />
              </svg>
            </div>
            <div class="text-white font-semibold">Critical Support</div>
            <div>Emergency response by agreement</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: contentEl, isVisible: contentVisible } = useReveal({ threshold: 0.2 })
</script>
