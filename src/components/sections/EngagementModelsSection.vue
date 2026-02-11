<template>
  <section class="section-wrapper">
    <div class="section-accent"></div>
    <div class="max-w-7xl mx-auto px-6 space-y-24">

      <!-- HEADER -->
      <div
        ref="headerEl"
        :class="[
          'max-w-3xl transition-all duration-component ease-enterprise',
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h1 class="text-4xl md:text-5xl font-semibold text-white">
          {{ props.sector === 'regulated'
              ? 'Government & Financial Sector Engagement Models'
              : 'Engagement Models' }}
        </h1>
        <p class="mt-6 text-lg text-text-secondary">
          {{
            props.sector === 'regulated'
              ? 'Structured cybersecurity engagements aligned with compliance mandates, data sovereignty requirements, and operational continuity expectations.'
              : 'We operate through clearly defined engagement structures designed to align with organizational risk and system maturity.'
          }}
        </p>
      </div>

      <!-- MODELS GRID -->
      <div v-if="loading" class="text-text-secondary">
        Loading engagement models...
      </div>

      <div v-else-if="error" class="text-red-400">
        {{ error }}
      </div>

      <div
        ref="modelsEl"
        v-else
        :class="[
          'grid lg:grid-cols-3 gap-10 transition-all duration-component ease-enterprise',
          modelsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
          v-for="(model, index) in models"
          :key="model.id"
          :style="{
            transitionDelay: modelsVisible ? `${index * 120}ms` : '0ms'
          }"
          :class="[
            'card-base card-hover transition-all duration-component ease-enterprise',
            modelsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <div class="icon-badge">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path :d="model.icon" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white">
            {{ model.title }}
          </h3>

          <p class="text-sm text-text-secondary">
            {{ model.description }}
          </p>

          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary">
            <li v-for="feature in model.features" :key="feature">
              {{ feature }}
            </li>
          </ul>

          <p class="text-xs text-text-secondary/70 pt-4 border-t border-border/60">
            Typical duration: {{ model.duration }}
          </p>
        </div>
      </div>

      <!-- PRICING LOGIC -->
      <div
        ref="pricingEl"
        :class="[
          'grid lg:grid-cols-2 gap-16 items-start transition-all duration-component ease-enterprise',
          pricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >

        <div class="space-y-6">
          <h2 class="text-3xl font-semibold text-white">
            Pricing Philosophy
          </h2>
          <p class="text-text-secondary">
            Engagement pricing is determined by scope, risk level, regulatory
            complexity, and delivery urgency. We do not offer one-size-fits-all
            packages.
          </p>

          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary">
            <li>No per-seat licensing or reseller fees</li>
            <li>Clear scope definition before execution</li>
            <li>Enterprise-grade SLAs available</li>
            <li>NDAs enforced as standard</li>
          </ul>
        </div>

        <!-- TRUST / CTA PANEL -->
        <aside
          class="card-base card-hover"
        >
          <h3 class="text-lg font-semibold text-white">
            Engagement Readiness
          </h3>

          <p class="text-sm text-text-secondary">
            We typically work with organizations that operate critical systems
            or handle sensitive data.
          </p>

          <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary">
            <li>Financial institutions</li>
            <li>Healthcare & data-driven firms</li>
            <li>SaaS platforms at scale</li>
            <li>Government-adjacent entities</li>
          </ul>

          <router-link
            to="/contact"
            class="btn-primary"
          >
            Discuss an Engagement
          </router-link>
        </aside>

      </div>

      <!-- COMPLIANCE BLOCK (Only For Regulated) -->
      <div
        v-if="props.sector === 'regulated'"
        ref="complianceEl"
        :class="[
          'card-base card-hover bg-gradient-to-b from-card to-background/90 transition-all duration-component ease-enterprise',
          complianceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h3 class="text-xl font-semibold text-white mb-4">
          Compliance & Regulatory Alignment
        </h3>

        <ul class="list-disc list-inside space-y-2 text-sm text-text-secondary">
          <li>ISO 27001 alignment support</li>
          <li>Central Bank cybersecurity audit readiness</li>
          <li>Data residency & sovereignty assurance</li>
          <li>Secure vendor risk evaluations</li>
          <li>Incident reporting & documentation standards</li>
        </ul>
      </div>

      <!-- ROLE-BASED BLOCK -->
      <div
        ref="roleEl"
        :class="[
          'mt-16 transition-all duration-component ease-enterprise',
          roleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h2 class="text-2xl font-semibold text-white">
          Tailored For {{ role.toUpperCase() }}
        </h2>

        <p v-if="role === 'ciso'" class="text-text-secondary mt-4">
          Our engagements focus on governance alignment, board-level reporting clarity,
          third-party risk mitigation, and measurable threat reduction.
        </p>

        <p v-else-if="role === 'cto'" class="text-text-secondary mt-4">
          Architecture performance, DevSecOps integration, infrastructure hardening,
          and scalable cloud-native security workflows.
        </p>

        <p v-else-if="role === 'founder'" class="text-text-secondary mt-4">
          Early-stage security readiness, investor-grade due diligence preparation,
          and secure product-market scaling.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router"
import { computed, ref } from "vue"
import { useReveal } from "@/composables/useReveal"

const props = defineProps({
  sector: {
    type: String,
    default: "general" // 'general' | 'regulated'
  }
})

const route = useRoute()
const role = computed(() => route.query.role || "general")

// Scroll animations
const { el: headerEl, isVisible: headerVisible } = useReveal({ threshold: 0.2 })
const { el: modelsEl, isVisible: modelsVisible } = useReveal({ threshold: 0.2 })
const { el: pricingEl, isVisible: pricingVisible } = useReveal({ threshold: 0.2 })
const { el: complianceEl, isVisible: complianceVisible } = useReveal({ threshold: 0.2 })
const { el: roleEl, isVisible: roleVisible } = useReveal({ threshold: 0.2 })

// Mock data for engagement models
const loading = ref(false)
const error = ref(null)
const models = ref([
  {
    id: 1,
    title: "Security Assessment & Audit",
    description: "Comprehensive evaluation of your current security posture with detailed remediation roadmap.",
    features: [
      "Vulnerability scanning",
      "Configuration review",
      "Risk assessment report",
      "Prioritized remediation plan"
    ],
    duration: "2-4 weeks",
    icon: "M12 3l7 4v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
  },
  {
    id: 2,
    title: "Penetration Testing",
    description: "Simulated attacks to identify exploitable vulnerabilities in your systems and applications.",
    features: [
      "External network testing",
      "Web application testing",
      "API security assessment",
      "Detailed exploitation report"
    ],
    duration: "3-6 weeks",
    icon: "M12 2v4m0 12v4m10-10h-4M6 12H2m10-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12z"
  },
  {
    id: 3,
    title: "Secure Development Implementation",
    description: "Build secure systems from the ground up with integrated security practices and DevSecOps.",
    features: [
      "Secure architecture design",
      "Code security reviews",
      "Automated security testing",
      "Continuous security monitoring"
    ],
    duration: "8-16 weeks",
    icon: "M12 2l9 5-9 5-9-5 9-5zm0 10l9 5-9 5-9-5 9-5"
  }
])
</script>
