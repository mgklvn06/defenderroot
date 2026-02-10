<template>
  <DefaultLayout>  
  <Hero />
  <ServicesSection />
  <WhyChooseUs />
  <MetricsSection />
  <CaseStudiesSection />
 </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import Hero from "@/components/sections/Hero.vue"
import ServicesSection from "@/components/sections/ServicesSection.vue"
import WhyChooseUs from "@/components/sections/WhyChooseUs.vue"
import MetricsSection from "@/components/sections/MetricsSection.vue"
import CaseStudiesSection from "@/components/sections/CaseStudiesSection.vue"
</script>
