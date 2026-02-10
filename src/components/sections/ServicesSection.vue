<template>
  <section class="py-24 bg-[#0b0f1a]">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-white mb-12">Our Cybersecurity Services</h2>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="service in services"
          :key="service.id"
          :title="service.title"
          :category="service.category"
          :description="service.description"
          :outcomes="service.outcomes"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "@/components/ui/Card.vue"

const services = [
  {
    id: "security-engineering",
    title: "Security Engineering",
    category: "Defensive",
    description: "Design secure architectures and harden applications & infrastructure.",
    outcomes: [
      "Resilient system design",
      "Threat modeling & mitigation",
      "Continuous monitoring"
    ]
  },
  {
    id: "offensive-security",
    title: "Offensive Security",
    category: "Offensive",
    description: "Penetration testing & ethical hacking to uncover vulnerabilities.",
    outcomes: [
      "Real-world attack simulations",
      "Critical vulnerability discovery",
      "Remediation roadmap"
    ]
  },
  {
    id: "cloud-security",
    title: "Cloud & DevSecOps",
    category: "Compliance",
    description: "Secure cloud environments & integrate security into dev pipelines.",
    outcomes: [
      "Cloud misconfiguration remediation",
      "Secure CI/CD pipelines",
      "Privileged access control"
    ]
  }
]
</script>
