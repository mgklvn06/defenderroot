<template>
  <div class="bg-slate-950 text-slate-100 ">

    <section class="relative overflow-hidden bg-cover bg-center min-h-screen sm:min-h-screen" :style="{ backgroundImage: `url(${hero})` }">
      <div class="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight">
            Enterprise-Grade Cybersecurity<br />
            Built for Modern Businesses
          </h1>
          <p class="mt-6 text-lg text-slate-300 max-w-xl">
            RootDefender protects organizations from cyber threats through
            proactive security assessments, penetration testing, and
            continuous monitoring—so your business can operate with confidence.
          </p>

          <div class="mt-8 flex gap-4">
            <button class="px-6 py-3 rounded-lg bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">
              Request Security Assessment
            </button>
            <button class="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 transition">
              View Our Services
            </button>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>

    <section class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold">Why Cybersecurity Can’t Be Ignored</h2>
        <p class="mt-4 text-slate-400 max-w-3xl mx-auto">
          Cyber threats are increasing in frequency and sophistication.
          Small and large organizations alike are targets. A single breach
          can cause financial loss, reputational damage, and regulatory penalties.
        </p>

        <div class="mt-12 grid md:grid-cols-3 gap-8">
          <StatCard title="43%" text="of cyber attacks target small and medium businesses" />
          <StatCard title="$4.45M" text="average global cost of a data breach" />
          <StatCard title="62%" text="increase in ransomware incidents year-over-year" />
        </div>
      </div>
    </section>

    <section class="bg-slate-900">
      <div class="max-w-7xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-center">Our Core Services</h2>

        <div class="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Vulnerability Assessment"
            text="Identify weaknesses in your systems before attackers do."
          />
          <ServiceCard
            title="Penetration Testing"
            text="Simulated real-world attacks to evaluate system defenses."
          />
          <ServiceCard
            title="Security Audits"
            text="Compliance-focused audits aligned with industry standards."
          />
          <ServiceCard
            title="Incident Response"
            text="Rapid containment, investigation, and recovery support."
          />
          <ServiceCard
            title="Security Consulting"
            text="Strategic guidance to strengthen your security posture."
          />
          <ServiceCard
            title="Continuous Monitoring"
            text="Ongoing threat detection and proactive defense."
          />
        </div>
      </div>
    </section>

    <section class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-center">What Sets RootDefender Apart</h2>

        <div class="mt-12 grid md:grid-cols-4 gap-6 text-center">
          <FeatureCard title="Expert-Led" text="Security professionals with real-world experience" />
          <FeatureCard title="Tailored Solutions" text="Security strategies aligned to your business" />
          <FeatureCard title="Proactive Defense" text="We prevent incidents, not just respond to them" />
          <FeatureCard title="Trusted Processes" text="Industry-aligned methods and documentation" />
        </div>
      </div>
    </section>

    <section class="bg-slate-900">
      <div class="max-w-7xl mx-auto px-6 py-20">
        <h2 class="text-3xl font-bold text-center">How We Work</h2>

        <div class="mt-12 grid md:grid-cols-4 gap-8">
          <Step number="01" title="Consultation" text="Understand your environment and risks" />
          <Step number="02" title="Assessment" text="Analyze systems and identify vulnerabilities" />
          <Step number="03" title="Mitigation" text="Implement security improvements" />
          <Step number="04" title="Ongoing Support" text="Monitor, report, and refine defenses" />
        </div>
      </div>
    </section>

    <section class="border-t border-slate-800">
      <div class="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-bold">Ready to Secure Your Business?</h2>
        <p class="mt-4 text-slate-400">
          Schedule a security assessment or speak with our consultants today.
        </p>

        <button class="mt-8 px-8 py-4 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">
          Schedule Appointment
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
import StatCard from "@/components/StatCard.vue";
import ServiceCard from "@/components/ServicesCard.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import Step from "@/components/Step.vue";
import hero from '../assets/hero4.jpg';
</script>
