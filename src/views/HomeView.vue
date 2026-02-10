<script setup>
import Hero from '@/components/Hero.vue';
import StatCard from "@/components/StatCard.vue";
import ServiceCard from "@/components/ServicesCard.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import Step from "@/components/Step.vue";
</script>

<template>
  <div>
    <Hero />
    <StatCard title="99.9%" text="Uptime Guarantee" />
    <ServiceCard title="Penetration Testing" text="Identify vulnerabilities before attackers do." />
    <FeatureCard title="Real-time Monitoring" text="Stay ahead with instant threat detection." /> 
  </div>
</template>