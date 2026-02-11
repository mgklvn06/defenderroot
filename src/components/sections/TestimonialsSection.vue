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
        <p class="text-sm uppercase tracking-widest text-secondary">What Clients Say</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Trusted by teams that run critical systems
        </h2>
        <p class="mt-4 text-text-secondary">
          Professional, thorough, and focused on outcomes that reduce real-world risk.
        </p>
      </div>

      <div
        ref="cardsEl"
        :class="[
          'mt-12 grid gap-8 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.title"
          :style="{ transitionDelay: cardsVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'card-base card-hover transition-all duration-component ease-enterprise',
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="flex gap-1 text-secondary">
            <svg
              v-for="n in 5"
              :key="n"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="h-4 w-4"
            >
              <path
                d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-white">{{ testimonial.title }}</h3>
          <p class="text-text-secondary">"{{ testimonial.quote }}"</p>
          <div class="pt-4 border-t border-border/60 text-sm text-text-secondary">
            <div class="text-white font-medium">{{ testimonial.name }}</div>
            <div>{{ testimonial.role }}</div>
            <div>{{ testimonial.company }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.2 })

const testimonials = [
  {
    title: "Payment Platform Security Assessment",
    quote:
      "Binary Defenders helped us identify critical vulnerabilities in our payment system before launch. They found API security gaps we had not considered and provided a clear action plan.",
    name: "Technical Lead",
    role: "Engineering Manager",
    company: "Fintech Startup, Nairobi"
  },
  {
    title: "Infrastructure Security Review",
    quote:
      "We needed an external security review before scaling our operations. They uncovered misconfigurations in our cloud setup and built a roadmap to address them. Professional and on time.",
    name: "Operations Director",
    role: "Head of Technology",
    company: "Tech Company, Kenya"
  },
  {
    title: "Custom Business Management System",
    quote:
      "They built our internal CRM with security designed in from the start. Proper authentication, data protection, and a system that has run smoothly with zero security issues.",
    name: "Business Owner",
    role: "Managing Director",
    company: "SME, Nairobi"
  }
]
</script>
