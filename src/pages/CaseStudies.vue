<template>
  <DefaultLayout>
    <!-- Hero Banner for Case Studies -->
    <section class="py-24 bg-[#0b0f1a] text-white text-center">
      <h1 class="text-4xl font-bold mb-4">Our Work in Action</h1>
      <p class="max-w-2xl mx-auto text-gray-300">
        Real-world engineering and security projects for modern businesses.  
        We design, build, and secure systems to withstand real threats.
      </p>
    </section>

    <!-- Case Studies Section -->
    <CaseStudiesSection />

    <!-- Optional Call-to-Action -->
    <section class="py-16 bg-[#111421] text-center text-white">
      <h2 class="text-3xl font-bold mb-4">Want to Secure Your Systems?</h2>
      <p class="text-gray-300 mb-6">Talk to our experts and protect what matters.</p>
      <Button to="/contact" variant="primary">Talk to Experts</Button>
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection.vue"
import Button from "@/components/ui/Button.vue"
</script>
