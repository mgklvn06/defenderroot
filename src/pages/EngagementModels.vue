<template>
  <DefaultLayout>
    <EngagementHeroSection />
    <EngagementModelsSection sector="regulated" />
    <EngagementProcessSection />
    <EngagementIntakeSection />
    <EngagementSLASection />
    <ContactCTASection />
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import EngagementModelsSection from "@/components/sections/EngagementModelsSection.vue"
import EngagementHeroSection from "@/components/sections/EngagementHeroSection.vue"
import EngagementProcessSection from "@/components/sections/EngagementProcessSection.vue"
import EngagementIntakeSection from "@/components/sections/EngagementIntakeSection.vue"
import EngagementSLASection from "@/components/sections/EngagementSLASection.vue"
import ContactCTASection from "@/components/sections/ContactCTASection.vue"
</script>
