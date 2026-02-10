<template>
  <section class="relative py-28">
    <div class="max-w-7xl mx-auto px-6 space-y-24">

      <!-- HEADER -->
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl font-semibold text-white">
          Engagement Models
        </h1>
        <p class="mt-6 text-lg text-gray-400">
          We operate through clearly defined engagement structures designed to
          align with organizational risk, internal maturity, and regulatory
          requirements.
        </p>
      </div>

      <!-- MODELS GRID -->
      <div class="grid lg:grid-cols-3 gap-10">

        <!-- MODEL 1 -->
        <div class="rounded-2xl border border-white/10 bg-black p-8 space-y-6">
          <h3 class="text-xl font-semibold text-white">
            Security Assessment & Advisory
          </h3>
          <p class="text-sm text-gray-400">
            Short-to-mid term engagements focused on understanding risk exposure,
            architecture weaknesses, and priority remediation areas.
          </p>

          <ul class="space-y-3 text-sm text-gray-300">
            <li>• Cloud & infrastructure security reviews</li>
            <li>• Architecture & threat modeling</li>
            <li>• Executive-ready risk reports</li>
            <li>• Remediation guidance</li>
          </ul>

          <p class="text-xs text-gray-500 pt-4 border-t border-white/10">
            Typical duration: 2–6 weeks
          </p>
        </div>

        <!-- MODEL 2 -->
        <div
          class="rounded-2xl border border-white/10 bg-gradient-to-br from-black to-zinc-900 p-8 space-y-6"
        >
          <h3 class="text-xl font-semibold text-white">
            Project-Based Delivery
          </h3>
          <p class="text-sm text-gray-400">
            Fixed-scope engineering engagements with defined deliverables and
            measurable outcomes.
          </p>

          <ul class="space-y-3 text-sm text-gray-300">
            <li>• Secure cloud & platform builds</li>
            <li>• Identity & access architecture</li>
            <li>• DevSecOps pipeline implementation</li>
            <li>• Security tooling integration</li>
          </ul>

          <p class="text-xs text-gray-500 pt-4 border-t border-white/10">
            Typical duration: 1–4 months
          </p>
        </div>

        <!-- MODEL 3 -->
        <div class="rounded-2xl border border-white/10 bg-black p-8 space-y-6">
          <h3 class="text-xl font-semibold text-white">
            Retained Security Partnership
          </h3>
          <p class="text-sm text-gray-400">
            Long-term security engineering support embedded into your
            organization’s operations.
          </p>

          <ul class="space-y-3 text-sm text-gray-300">
            <li>• Continuous advisory & oversight</li>
            <li>• Design & architecture reviews</li>
            <li>• Incident readiness & response</li>
            <li>• Security leadership augmentation</li>
          </ul>

          <p class="text-xs text-gray-500 pt-4 border-t border-white/10">
            Typical duration: 6–12+ months
          </p>
        </div>

      </div>

      <!-- PRICING LOGIC -->
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <div class="space-y-6">
          <h2 class="text-3xl font-semibold text-white">
            Pricing Philosophy
          </h2>
          <p class="text-gray-400">
            Engagement pricing is determined by scope, risk level, regulatory
            complexity, and delivery urgency. We do not offer one-size-fits-all
            packages.
          </p>

          <ul class="space-y-4 text-sm text-gray-300">
            <li>• No per-seat licensing or reseller fees</li>
            <li>• Clear scope definition before execution</li>
            <li>• Enterprise-grade SLAs available</li>
            <li>• NDAs enforced as standard</li>
          </ul>
        </div>

        <!-- TRUST / CTA PANEL -->
        <aside
          class="rounded-2xl border border-white/10 bg-gradient-to-br from-black to-zinc-900 p-8 space-y-6"
        >
          <h3 class="text-lg font-semibold text-white">
            Engagement Readiness
          </h3>

          <p class="text-sm text-gray-400">
            We typically work with organizations that operate critical systems
            or handle sensitive data.
          </p>

          <ul class="space-y-3 text-sm text-gray-300">
            <li>• Financial institutions</li>
            <li>• Healthcare & data-driven firms</li>
            <li>• SaaS platforms at scale</li>
            <li>• Government-adjacent entities</li>
          </ul>

          <router-link
            to="/contact"
            class="block text-center mt-6 rounded-lg bg-cyan-400 px-5 py-3 text-black font-semibold hover:bg-cyan-300 transition"
          >
            Discuss an Engagement
          </router-link>
        </aside>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>
