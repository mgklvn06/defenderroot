<template>
  <section class="relative bg-[#0b0f1a] overflow-hidden">
    <!-- subtle radial grid background -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-size-[48px_48px]"
      aria-hidden="true"
    ></div>

    <div class="relative max-w-7xl mx-auto px-6 py-28">
      <div class="max-w-3xl">
        <!-- tagline -->
        <p class="mb-4 text-sm font-medium tracking-wide text-cyan-400">
          Secure Engineering & System Development
        </p>

        <!-- headline -->
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Defend. Build. Fortify.<br />
          <span class="text-cyan-400">Protect What Matters.</span>
        </h1>

        <!-- description -->
        <p class="mt-6 text-lg text-gray-300 leading-relaxed">
          Binary Defenders designs, builds, and secures digital systems for modern businesses.  
          Development and cybersecurity engineered as one system — security by design, not by accident.
        </p>

        <!-- CTA buttons -->
        <div class="mt-10 flex flex-wrap gap-4">
          <RouterLink
            to="/engagement-models"
            class="rounded-md bg-cyan-500 px-6 py-3 text-sm font-medium text-black hover:bg-cyan-400 transition"
          >
            Build My System
          </RouterLink>

          <RouterLink
            to="/services"
            class="rounded-md border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/10 transition"
          >
            Secure My System
          </RouterLink>

          <RouterLink
            to="/contact"
            class="rounded-md border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/10 transition"
          >
            Talk to Experts
          </RouterLink>
        </div>

        <!-- Hero Metrics -->
        <div class="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          <Stat value="150+" label="Security Issues Fixed" />
          <Stat value="60%" label="Average Risk Reduction" />
          <Stat value="40+" label="Systems Built & Secured" />
          <Stat value="99.9%" label="System Reliability" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Stat from "@/components/ui/Stat.vue"
</script>

<style scoped>
/* Add styles here if needed */
</style>
