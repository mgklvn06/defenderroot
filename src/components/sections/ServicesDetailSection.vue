<template>
  <section class="section-wrapper bg-background">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div
        ref="headerEl"
        :class="[
          'max-w-3xl transition-all duration-component ease-enterprise',
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <p class="text-sm uppercase tracking-widest text-secondary">Service Portfolio</p>
        <h2 class="mt-4 text-3xl md:text-4xl font-semibold text-white">
          Deep, Measurable Security Outcomes Across the Full Stack
        </h2>
        <p class="mt-4 text-text-secondary">
          Every service includes clear scope, artifacts, and remediation guidance. We prioritize
          risk reduction, operational continuity, and measurable improvements in security posture.
        </p>
      </div>

      <div
        ref="cardsEl"
        :class="[
          'mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-component ease-enterprise',
          cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(service, index) in services"
          :key="service.title"
          :style="{ transitionDelay: cardsVisible ? `${index * 120}ms` : '0ms' }"
          :class="[
            'card-base card-hover transition-all duration-component ease-enterprise',
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="service.icon" />
            </svg>
          </div>
          <p class="text-xs uppercase tracking-widest text-secondary">{{ service.category }}</p>
          <h3 class="text-xl font-semibold text-white">{{ service.title }}</h3>
          <p class="text-text-secondary">{{ service.description }}</p>
          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary/90">
            <li v-for="item in service.deliverables" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from "@/composables/useReveal"

const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: cardsEl, isVisible: cardsVisible } = useReveal({ threshold: 0.2 })

const services = [
  {
    category: "Security Engineering",
    title: "Secure Architecture & System Hardening",
    description:
      "Design secure system architectures and harden applications and infrastructure to resist real-world cyber attacks.",
    deliverables: [
      "Threat modeling and attack surface mapping",
      "Security architecture blueprints",
      "Configuration baselines and hardening guides"
    ],
    icon: "M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
  },
  {
    category: "Offensive Security",
    title: "Penetration Testing & Red Teaming",
    description:
      "Simulate attacker behavior to validate controls and identify critical vulnerabilities before exploitation.",
    deliverables: [
      "Web, API, and mobile application testing",
      "Privilege escalation and lateral movement analysis",
      "Risk-ranked vulnerability reporting"
    ],
    icon: "M12 2v4m0 12v4m10-10h-4M6 12H2m10-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12z"
  },
  {
    category: "Infrastructure Security",
    title: "Network & Server Risk Review",
    description:
      "Assess networks, servers, and internal systems to identify exposed services, misconfigurations, and weak controls.",
    deliverables: [
      "External and internal network assessments",
      "Access control verification",
      "Secure logging and monitoring recommendations"
    ],
    icon: "M4 4h16v6H4zM4 14h16v6H4zM8 8h.01M8 18h.01"
  },
  {
    category: "Cloud Security",
    title: "Cloud Security & DevSecOps",
    description:
      "Secure cloud environments and integrate security into development pipelines for consistent protection.",
    deliverables: [
      "IAM hardening and privilege review",
      "CI/CD security checkpoints",
      "Cloud posture and configuration review"
    ],
    icon: "M20 16.5a4.5 4.5 0 0 0-4-4.5 6 6 0 0 0-11.5 2A4 4 0 0 0 6 20h11a3 3 0 0 0 3-3.5z"
  },
  {
    category: "Risk Management",
    title: "Vulnerability & Risk Prioritization",
    description:
      "Identify, classify, and prioritize vulnerabilities based on business impact and threat intelligence.",
    deliverables: [
      "Risk register with business impact mapping",
      "Remediation roadmap and timelines",
      "Executive summaries for leadership"
    ],
    icon: "M4 18h16M6 16v-6M12 16V6M18 16v-3"
  },
  {
    category: "Incident Response",
    title: "Digital Forensics & Recovery",
    description:
      "Investigate security incidents, trace attack origins, and restore systems after breaches.",
    deliverables: [
      "Forensic evidence collection and analysis",
      "Root cause and timeline reconstruction",
      "Recovery plan and containment guidance"
    ],
    icon: "M12 3l9 16H3zM12 9v4m0 4h.01"
  }
]
</script>
