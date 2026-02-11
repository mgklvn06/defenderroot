<template>
  <section class="section-wrapper">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div
        ref="headerEl"
        :class="[
          'max-w-3xl transition-all duration-component ease-enterprise',
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <p class="text-sm uppercase tracking-widest text-secondary">Engagement Models</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          How We Work With Clients
        </h2>
        <p class="mt-4 text-text-secondary">
          Whether you need secure systems, cybersecurity testing, digital forensics, or strategic guidance,
          we engage with clear scope, defined objectives, and measurable outcomes.
        </p>
      </div>

      <div
        ref="cardsEl"
        :class="[
          'mt-12 grid gap-8 lg:grid-cols-2 transition-all duration-component ease-enterprise',
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(model, index) in models"
          :key="model.title"
          :style="{ transitionDelay: cardsVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'card-base card-hover transition-all duration-component ease-enterprise',
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="model.icon" />
            </svg>
          </div>
          <p class="text-xs uppercase tracking-widest text-secondary">{{ model.category }}</p>
          <h3 class="text-xl font-semibold text-white">{{ model.title }}</h3>
          <p class="text-text-secondary">{{ model.description }}</p>

          <div class="mt-4 text-sm text-text-secondary">
            <p class="font-semibold text-white">Ideal For</p>
            <p>{{ model.idealFor }}</p>
          </div>

          <div class="mt-4">
            <p class="text-sm font-semibold text-white">What's Included</p>
            <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary">
              <li v-for="item in model.includes" :key="item">{{ item }}</li>
            </ul>
          </div>

          <RouterLink :to="model.ctaLink" class="mt-6 btn-secondary">
            {{ model.ctaText }}
          </RouterLink>
        </div>
      </div>

      <div class="mt-10 text-text-secondary">
        Every engagement begins with a structured discussion to define objectives, scope, and expectations.
        This ensures clarity, accountability, and outcomes aligned with business goals.
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.2 })

const models = [
  {
    category: "Cybersecurity",
    title: "Security Assessment & Testing",
    description:
      "Identify real vulnerabilities, attack paths, and security weaknesses across applications, infrastructure, and cloud environments.",
    idealFor: "Organizations seeking to understand their security posture and reduce real-world cyber risk.",
    includes: [
      "Web, mobile, and network penetration testing",
      "Cloud security review and misconfiguration analysis",
      "Attack path mapping and privilege escalation testing",
      "Risk-ranked vulnerability reporting",
      "Actionable remediation guidance"
    ],
    ctaText: "Request Security Review",
    ctaLink: "/engagement-models",
    icon: "M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
  },
  {
    category: "Secure Development",
    title: "System & Application Development",
    description:
      "Design and build secure, scalable digital systems tailored to business needs, with security embedded from the start.",
    idealFor: "Businesses and startups needing websites, applications, or enterprise systems built with reliability in mind.",
    includes: [
      "Web platforms and business websites",
      "Mobile and enterprise application development",
      "Secure API and backend architecture",
      "Database and system design",
      "Security-by-design implementation"
    ],
    ctaText: "Discuss Your Project",
    ctaLink: "/contact",
    icon: "M16 18l6-6-6-6M8 6l-6 6 6 6"
  },
  {
    category: "Strategy & Advisory",
    title: "Technology & Security Advisory",
    description:
      "Provide strategic guidance on technology decisions, system architecture, and long-term security planning.",
    idealFor: "Organizations requiring technical direction, security strategy, or ongoing advisory support.",
    includes: [
      "System and security architecture design",
      "Technology roadmap planning",
      "Security policy and governance guidance",
      "Risk and threat modeling for business decisions",
      "Ongoing technical advisory support"
    ],
    ctaText: "Schedule Consultation",
    ctaLink: "/contact",
    icon: "M4 18h16M6 16v-6M12 16V6M18 16v-3"
  },
  {
    category: "Digital Forensics",
    title: "Investigation & Data Recovery",
    description:
      "Investigate cyber incidents, recover lost or compromised data, and reconstruct digital events to uncover root causes.",
    idealFor: "Organizations facing data loss, security breaches, fraud, or suspicious system activity.",
    includes: [
      "Incident and breach investigation",
      "Digital evidence collection and forensic analysis",
      "Data recovery from damaged or compromised systems",
      "Malware and attack trace analysis",
      "Timeline reconstruction and root cause identification",
      "Technical and legal-ready forensic reporting"
    ],
    ctaText: "Request Forensic Support",
    ctaLink: "/contact",
    icon: "M12 3l9 16H3zM12 9v4m0 4h.01"
  }
]
</script>
