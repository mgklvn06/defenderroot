<template>
  <section class="py-24 bg-[#0b0f1a] text-white">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Section Heading -->
      <h2 class="text-3xl font-bold mb-4">Why Choose Us</h2>
      <p class="mb-12 text-gray-300 max-w-2xl">
        We merge software engineering and cybersecurity into a single workflow.  
        We design, build, attack, and harden systems before they face real threats.
      </p>

      <!-- Cards Grid -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="reason in reasons"
          :key="reason.id"
          :title="reason.title"
          :description="reason.description"
          :outcomes="reason.features"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "@/components/ui/Card.vue"

interface Reason {
  id: string
  title: string
  description: string
  features: string[]
}

const reasons: Reason[] = [
  {
    id: "security-by-design",
    title: "Security Built Into Engineering",
    description:
      "We don't bolt security onto finished systems. It is embedded into architecture, logic, and infrastructure from day one.",
    features: [
      "Secure architecture from the start",
      "Threat modeling & mitigation",
      "Compliance-ready systems"
    ]
  },
  {
    id: "development-offensive",
    title: "Development + Offensive Security",
    description:
      "We think like engineers and attackers: building systems and breaking them before real attackers do.",
    features: [
      "Simulated attacks",
      "Vulnerability identification",
      "Continuous hardening"
    ]
  },
  {
    id: "scalable-systems",
    title: "Systems That Scale & Survive",
    description:
      "Every system we deliver is designed to grow with your business and remain resilient against cyber risks.",
    features: [
      "High availability",
      "Resilient infrastructure",
      "Performance under load"
    ]
  }
]
</script>
