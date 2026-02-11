<template>
  <section class="section-wrapper">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <!-- Section Heading -->
      <h2
        ref="headerEl"
        :class="[
          'text-3xl font-bold text-white mb-12 transition-all duration-component ease-enterprise',
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        Real-World Engineering & Security Work
      </h2>

      <!-- Case Studies Grid -->
      <div
        ref="studiesEl"
        :class="[
          'grid gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          studiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(caseStudy, index) in caseStudies"
          :key="caseStudy.id"
          :style="{ transitionDelay: studiesVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'card-base card-hover transition-all duration-component ease-enterprise',
            studiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <p class="text-xs uppercase tracking-widest text-secondary">{{ caseStudy.industry }}</p>
          <h3 class="text-xl font-semibold text-white">{{ caseStudy.title }}</h3>
          <p class="text-text-secondary">{{ caseStudy.challenge }}</p>

          <div class="grid grid-cols-2 gap-4 text-sm text-text-secondary">
            <div>
              <div class="text-white font-semibold">Timeline</div>
              <div>{{ caseStudy.timeline }}</div>
            </div>
            <div>
              <div class="text-white font-semibold">Scope</div>
              <div>{{ caseStudy.scope }}</div>
            </div>
          </div>

          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary/90">
            <li v-for="item in caseStudy.impact" :key="item">{{ item }}</li>
          </ul>

          <RouterLink
            :to="getEngagementLink(caseStudy.engagementType)"
            class="btn-secondary"
            @click="handleCTA(caseStudy.engagementType)"
          >
            {{ getEngagementText(caseStudy.engagementType) }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAnalytics } from "@/composables/useAnalytics"
import { useReveal } from "@/composables/useReveal"

// Scroll animations
const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: studiesEl, isVisible: studiesVisible } = useReveal({ threshold: 0.2 })

interface CaseStudy {
  id: string
  title: string
  industry: string
  challenge: string
  timeline: string
  scope: string
  impact: string[]
  link: string
  engagementType: string
}

// Example real-world case studies
const caseStudies: CaseStudy[] = [
  {
    id: "banking-soc",
    title: "Financial Platform Security Review",
    industry: "Financial Technology",
    challenge:
      "Comprehensive security audit for a growing payment platform handling sensitive customer data and daily transactions.",
    timeline: "5 weeks",
    scope: "20+ services",
    impact: [
      "18 security vulnerabilities identified",
      "Mapped security gaps in API authentication flows",
      "Created a 60-day remediation roadmap with priorities",
      "Improved overall security posture and compliance readiness"
    ],
    link: "/case-studies/banking-soc",
    engagementType: "assessment"
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking Application",
    industry: "Banking & Finance",
    challenge:
      "Built a secure mobile banking solution for thousands of users with integrated security controls.",
    timeline: "5 months",
    scope: "Android + iOS",
    impact: [
      "Zero security incidents in first 12 months",
      "Implemented secure biometric authentication",
      "Built with encryption at rest and in transit",
      "Passed security audit requirements"
    ],
    link: "/case-studies/mobile-banking",
    engagementType: "project"
  },
  {
    id: "ecommerce-hardening",
    title: "E-Commerce Platform Hardening",
    industry: "E-Commerce",
    challenge:
      "Secured an expanding e-commerce platform serving thousands of customers, reducing fraud exposure.",
    timeline: "7 weeks",
    scope: "Full platform",
    impact: [
      "Deployed SSL/TLS encryption for all customer data",
      "Eliminated critical SQL injection vulnerabilities",
      "Implemented Web Application Firewall (WAF)",
      "Reduced fraudulent transaction attempts significantly"
    ],
    link: "/case-studies/ecommerce-hardening",
    engagementType: "project"
  }
]

const getEngagementLink = (type: string) => {
  if (type === "assessment") return "/engagement-models#assessment"
  if (type === "project") return "/engagement-models#project"
  if (type === "retainer") return "/engagement-models#retainer"
  return "/engagement-models"
}

const getEngagementText = (type: string) => {
  if (type === "assessment") return "Request Security Assessment"
  if (type === "project") return "Discuss Secure Development Project"
  if (type === "retainer") return "Explore Retained Partnership"
  return "Discuss Engagement"
}

const { track } = useAnalytics()

const handleCTA = (type: string) => {
  track("engagement_click", {
    source: "case_study",
    engagementType: type
  })
}
</script>
