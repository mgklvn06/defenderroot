<template>
  <section class="section-wrapper bg-primary">
    <div class="section-accent"></div>
    <!-- subtle radial grid background -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-size-[48px_48px]"
      aria-hidden="true"
    ></div>
    <div
      class="absolute -top-32 right-0 h-72 w-72 rounded-full bg-secondary/15 blur-3xl ambient-glow"
      aria-hidden="true"
    ></div>

    <div class="relative max-w-7xl mx-auto px-6 py-28">
      <div class="max-w-3xl">
        <!-- tagline -->
        <div
          class="transition-all duration-component ease-enterprise"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <p class="mb-4 text-sm font-medium tracking-wide text-secondary">
            Secure Engineering & System Development
          </p>
        </div>

        <!-- headline -->
        <div
          class="transition-all duration-component ease-enterprise"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 class="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Defend. Build. Fortify.<br />
            <span class="headline-wave">Protect What Matters.</span>
          </h1>
          <p class="mt-3 text-base text-text-secondary">
            Security By Design, Not By Accident.
          </p>
        </div>

        <!-- description -->
        <div
          class="transition-all duration-component ease-enterprise"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">
            Binary Defenders designs, builds, and secures digital systems for modern businesses.
            Development and cybersecurity engineered as one system -- security by design, not by accident.
          </p>
        </div>

        <!-- CTA buttons -->
        <div
          class="mt-10 flex flex-wrap gap-4 transition-all duration-component ease-enterprise"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <RouterLink
            to="/engagement-models"
            class="btn-primary"
          >
            Build My System
          </RouterLink>

          <RouterLink
            to="/services"
            class="btn-secondary"
          >
            Secure My System
          </RouterLink>

          <RouterLink
            to="/contact"
            class="btn-secondary"
          >
            Talk to Experts
          </RouterLink>
        </div>

        <!-- Hero Metrics -->
        <div
          class="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 transition-all duration-component ease-enterprise"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Stat value="150+" label="Security Issues Fixed" :forceOnMount="true" />
          <Stat value="60%" label="Average Risk Reduction" :forceOnMount="true" />
          <Stat value="40+" label="Systems Built & Secured" :forceOnMount="true" />
          <Stat value="99.9%" label="System Reliability" :forceOnMount="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Stat from "@/components/ui/Stat.vue"
</script>

<style scoped>
.headline-wave {
  background: linear-gradient(90deg, #2F6DF6 0%, #00B67A 50%, #2F6DF6 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  color: transparent;
  animation: headlineWave 10s ease-in-out infinite;
}

@keyframes headlineWave {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
