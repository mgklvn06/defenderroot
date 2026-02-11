<template>
  <DefaultLayout>
    <ContactHeroSection />
    <ContactForm />
    <ContactProcessSection />
    <ContactScopeSection />
    <ContactSLASection />
    <ContactCTASection />
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue"
import ContactForm from "@/components/sections/ContactForm.vue"
import ContactHeroSection from "@/components/sections/ContactHeroSection.vue"
import ContactProcessSection from "@/components/sections/ContactProcessSection.vue"
import ContactScopeSection from "@/components/sections/ContactScopeSection.vue"
import ContactSLASection from "@/components/sections/ContactSLASection.vue"
import ContactCTASection from "@/components/sections/ContactCTASection.vue"
</script>
