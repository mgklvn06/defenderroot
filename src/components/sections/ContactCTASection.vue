<template>
  <section class="section-wrapper">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div
        ref="contentEl"
        :class="[
          'grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start transition-all duration-component ease-enterprise',
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div>
          <p class="text-sm uppercase tracking-widest text-secondary">Let's Build Something Secure</p>
          <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
            Build Smart Systems. Secure Them by Design.
          </h2>
          <p class="mt-4 text-text-secondary">
            Whether you need a website, an app, or a full business system, we design and build
            solutions with security, scalability, and long-term growth in mind.
          </p>
          <div class="mt-6 flex flex-wrap gap-4">
            <RouterLink to="/contact" class="btn-primary">Tell Us About Your Project</RouterLink>
            <RouterLink to="/services" class="btn-secondary">Explore Services</RouterLink>
          </div>
        </div>

        <div class="card-base card-hover">
          <h3 class="text-lg font-semibold text-white">Professional Support & Inquiries</h3>
          <div class="mt-4 space-y-4 text-text-secondary">
            <div>
              <div class="text-sm uppercase tracking-widest text-secondary">Email</div>
              <div class="text-white">contact@binarydefenders.com</div>
            </div>
            <div>
              <div class="text-sm uppercase tracking-widest text-secondary">Call / WhatsApp</div>
              <div class="text-white">+254 794 101 619</div>
            </div>
            <div>
              <div class="text-sm uppercase tracking-widest text-secondary">Office Location</div>
              <div class="text-white">Nairobi, Kenya</div>
              <div class="text-text-secondary">Kofisi Building, 6th Floor, Westlands</div>
            </div>
            <div>
              <div class="text-sm uppercase tracking-widest text-secondary">Availability</div>
              <div class="text-white">Monday - Friday: 8:00 AM - 6:00 PM (EAT)</div>
              <div class="text-text-secondary">Critical security support available 24/7</div>
            </div>
          </div>
          <div class="mt-6 border-t border-border/60 pt-4 text-sm text-text-secondary">
            Fast response for projects and security incidents.
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
