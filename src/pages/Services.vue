<template>
  <DefaultLayout>
    <ServicesHeroSection />
    <ServicesDetailSection />
    <ServicesMethodologySection />
    <ServicesDeliverablesSection />
    <ServicesToolingSection />
    <ServicesAssuranceSection />
    <ContactCTASection />
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import ServicesHeroSection from "@/components/sections/ServicesHeroSection.vue"
import ServicesDetailSection from "@/components/sections/ServicesDetailSection.vue"
import ServicesMethodologySection from "@/components/sections/ServicesMethodologySection.vue"
import ServicesDeliverablesSection from "@/components/sections/ServicesDeliverablesSection.vue"
import ServicesToolingSection from "@/components/sections/ServicesToolingSection.vue"
import ServicesAssuranceSection from "@/components/sections/ServicesAssuranceSection.vue"
import ContactCTASection from "@/components/sections/ContactCTASection.vue"
</script>
