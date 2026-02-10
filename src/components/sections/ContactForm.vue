<template>
  <section class="relative py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <!-- LEFT: LOCATION / CONTEXT CARD -->
        <aside
          class="rounded-2xl border border-white/10 bg-linear-to-br from-black to-zinc-900 p-8 space-y-8"
        >
          <div>
            <h2 class="text-3xl font-semibold text-white">
              Talk to Binary Defenders
            </h2>
            <p class="mt-3 text-gray-400">
              Discuss security architecture, assessments, incident response,
              or long-term cybersecurity partnerships.
            </p>
          </div>

          <div class="space-y-4 text-sm">
            <div>
              <p class="text-gray-400">Headquarters</p>
              <p class="text-white font-medium">
                Nairobi, Kenya
              </p>
            </div>

            <div>
              <p class="text-gray-400">Email</p>
              <p class="text-white font-medium">
                security@binarydefenders.com
              </p>
            </div>

            <div>
              <p class="text-gray-400">Response Time</p>
              <p class="text-white font-medium">
                Under 24 hours for enterprise requests
              </p>
            </div>
          </div>

          <div class="pt-6 border-t border-white/10">
            <p class="text-xs text-gray-500">
              All inquiries are confidential. NDA available upon request.
            </p>
          </div>
        </aside>

        <!-- RIGHT: CONTACT FORM -->
        <div
          class="rounded-2xl border border-white/10 bg-black p-10"
        >
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="form-label">Full Name</label>
                <input type="text" class="form-input" />
              </div>

              <div>
                <label class="form-label">Company</label>
                <input type="text" class="form-input" />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="form-label">Email</label>
                <input type="email" class="form-input" />
              </div>

              <div>
                <label class="form-label">Phone</label>
                <input type="tel" class="form-input" />
              </div>
            </div>

            <div>
              <label class="form-label">Service of Interest</label>
              <select class="form-input">
                <option>Security Assessment</option>
                <option>Cloud Security</option>
                <option>Incident Response</option>
                <option>DevSecOps</option>
                <option>Long-Term Engagement</option>
              </select>
            </div>

            <div>
              <label class="form-label">Message</label>
              <textarea rows="5" class="form-input"></textarea>
            </div>

            <div class="pt-4">
              <button
                type="submit"
                class="w-full rounded-lg bg-cyan-400 py-3 text-black font-semibold hover:bg-cyan-300 transition"
              >
                Submit Secure Inquiry
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.form-label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
  color: #9ca3af;
}

.form-input {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border-radius: 0.6rem;
  background: #050505;
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  font-size: 0.9rem;
}

.form-input:focus {
  outline: none;
  border-color: #22d3ee;
}
</style>
