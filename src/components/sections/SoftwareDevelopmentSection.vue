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
        <p class="text-sm uppercase tracking-widest text-secondary">Software Development</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          We Engineer Secure Digital Systems for Modern Businesses
        </h2>
        <p class="mt-4 text-text-secondary">
          We build websites, applications, and enterprise systems with security, scalability, and
          performance engineered from the start.
        </p>
      </div>

      <div
        ref="servicesEl"
        :class="[
          'mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(service, index) in services"
          :key="service.title"
          :style="{ transitionDelay: servicesVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'card-base card-hover transition-all duration-component ease-enterprise',
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="service.icon" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white">{{ service.title }}</h3>
          <p class="text-text-secondary">{{ service.description }}</p>
          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary/90">
            <li v-for="item in service.details" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: servicesEl, isVisible: servicesVisible } = useReveal({ threshold: 0.2 })

const services = [
  {
    title: "Web & Digital Platforms",
    description:
      "We design and develop modern websites and web platforms that help businesses operate, sell, and scale.",
    details: ["Custom web platforms", "Secure architecture", "Cloud deployment"],
    icon: "M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20m0 0v20m-8-10h16"
  },
  {
    title: "Mobile Applications",
    description:
      "We build fast, intuitive, and secure mobile applications that connect businesses with customers.",
    details: ["Android & iOS", "Secure authentication", "Encrypted data handling"],
    icon: "M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 18h.01"
  },
  {
    title: "Enterprise & Business Systems",
    description:
      "We engineer internal business systems for automation, management, and scalability.",
    details: ["Process automation", "Scalable systems", "Security by design"],
    icon: "M12 2l9 5-9 5-9-5 9-5zm0 10l9 5-9 5-9-5 9-5"
  },
  {
    title: "Data & Infrastructure Engineering",
    description:
      "We design robust data architectures and infrastructure that ensure performance and reliability.",
    details: ["Database architecture", "Access control", "High availability"],
    icon:
      "M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4m0 6c0 2.2 3.6 4 8 4s8-1.8 8-4m-16 6c0 2.2 3.6 4 8 4s8-1.8 8-4"
  },
  {
    title: "API & System Integrations",
    description:
      "We develop secure APIs and integrations that connect applications, services, and third-party systems.",
    details: ["API development", "Token-based security", "System integration"],
    icon: "M10 13a3 3 0 0 1 0-4l3-3a3 3 0 0 1 4 4l-1 1M14 11a3 3 0 0 1 0 4l-3 3a3 3 0 1 1-4-4l1-1"
  }
]
</script>
