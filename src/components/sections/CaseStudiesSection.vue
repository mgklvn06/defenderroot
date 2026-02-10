<template>
  <section class="py-24 bg-[#0b0f1a]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Heading -->
      <h2 class="text-3xl font-bold text-white mb-12">
        Real-World Engineering & Security Work
      </h2>

      <!-- Case Studies Grid -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          v-for="caseStudy in caseStudies"
          :key="caseStudy.id"
          :title="caseStudy.title"
          :category="caseStudy.industry"
          :description="caseStudy.challenge"
          :outcomes="caseStudy.impact"
          :ctaText="'Learn More'"
          :ctaLink="caseStudy.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from "@/components/ui/Card.vue"

interface CaseStudy {
  id: string
  title: string
  industry: string
  challenge: string
  solution: string
  impact: string[]
  link: string
}

// Example real-world case studies
const caseStudies: CaseStudy[] = [
  {
    id: "banking-soc",
    title: "Financial Platform Security Review",
    industry: "Financial Technology",
    challenge:
      "Comprehensive security audit for a growing payment platform handling sensitive customer data and daily transactions.",
    solution:
      "Mapped API authentication gaps, identified vulnerabilities, and created a 60-day remediation roadmap.",
    impact: [
      "18 security vulnerabilities identified",
      "Improved overall security posture",
      "Compliance readiness improved"
    ],
    link: "/case-studies/banking-soc"
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking Application",
    industry: "Banking & Finance",
    challenge:
      "Built a secure mobile banking solution for thousands of users with integrated security controls.",
    solution:
      "Implemented secure biometric authentication, encryption at rest and in transit, and passed security audits.",
    impact: [
      "Zero security incidents in first 12 months",
      "Full encryption of sensitive data",
      "Regulatory audit passed"
    ],
    link: "/case-studies/mobile-banking"
  },
  {
    id: "ecommerce-hardening",
    title: "E-Commerce Platform Hardening",
    industry: "E-Commerce",
    challenge:
      "Secured an expanding e-commerce platform serving thousands of customers, reducing fraud exposure.",
    solution:
      "Implemented WAF, SSL/TLS encryption, and fixed SQL injection vulnerabilities.",
    impact: [
      "Significant reduction in fraudulent transactions",
      "Critical vulnerabilities eliminated",
      "Platform compliance improved"
    ],
    link: "/case-studies/ecommerce-hardening"
  }
]
</script>
