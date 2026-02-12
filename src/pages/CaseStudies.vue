<template>
  <DefaultLayout>
    <!-- Hero Banner for Case Studies -->
    <section class="section-wrapper bg-primary">
      <div class="section-accent"></div>
      <div class="relative max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-5xl font-semibold text-text-primary mb-4">
          Our Work in Action
        </h1>
        <p class="max-w-2xl mx-auto text-text-secondary">
          Real-world engineering and security projects for modern businesses.
          We design, build, and secure systems to withstand real threats.
        </p>
      </div>
    </section>

    <!-- Case Studies Section -->
    <CaseStudiesSection />

    <!-- Optional Call-to-Action -->
    <section class="py-16 bg-background text-center text-white border-t border-border/60">
      <h2 class="text-3xl font-bold mb-4">Want to Secure Your Systems?</h2>
      <p class="text-text-secondary mb-6">Talk to our experts and protect what matters.</p>
      <Button to="/contact" variant="primary">Talk to Experts</Button>
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection.vue"
import Button from "@/components/ui/Button.vue"
</script>
