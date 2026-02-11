<template>
  <section class="section-wrapper">
    <div class="section-accent"></div>
    <div class="relative max-w-7xl mx-auto px-6">
      <div
        ref="contentEl"
        :class="[
          'grid lg:grid-cols-2 gap-16 items-start transition-all duration-component ease-enterprise',
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >

        <!-- LEFT: LOCATION / CONTEXT CARD -->
        <aside
          class="card-base bg-gradient-to-br from-primary/80 to-card space-y-8"
        >
          <div>
            <div class="icon-badge mb-4">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1m18 0v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0l-9 6-9-6" />
              </svg>
            </div>
            <h2 class="text-3xl font-semibold text-white">
              Talk to Binary Defenders
            </h2>
            <p class="mt-3 text-text-secondary">
              Discuss security architecture, assessments, incident response,
              or long-term cybersecurity partnerships.
            </p>
          </div>

          <div class="space-y-4 text-sm">
            <div>
              <p class="text-text-secondary">Headquarters</p>
              <p class="text-white font-medium">
                Nairobi, Kenya
              </p>
            </div>

            <div>
              <p class="text-text-secondary">Email</p>
              <p class="text-white font-medium">
                security@binarydefenders.com
              </p>
            </div>

            <div>
              <p class="text-text-secondary">Response Time</p>
              <p class="text-white font-medium">
                Initial response within 24 hours
              </p>
            </div>
          </div>

          <div class="pt-6 border-t border-border/60">
            <p class="text-xs text-text-secondary/70">
              All inquiries are confidential. NDA available upon request.
            </p>
          </div>
          <p class="text-xs text-text-secondary/70">
            Emergency response available by agreement.
          </p>
        </aside>

        <!-- RIGHT: CONTACT FORM -->
        <div
          class="card-base bg-background/30 backdrop-blur p-10"
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
                class="w-full btn-primary"
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
import { useReveal } from "@/composables/useReveal"

const { el: contentEl, isVisible: contentVisible } = useReveal({ threshold: 0.2 })
</script>

<style scoped>
.form-label {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
  color: #94A3B8;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.75rem 0.9rem;
  border-radius: 0.6rem;
  background: #0B1623;
  border: 1px solid #1F3B57;
  color: #E6EDF5;
  font-size: 0.9rem;
  transition: border-color 150ms ease-out, box-shadow 150ms ease-out, background-color 150ms ease-out;
}

.form-input:hover {
  border-color: rgba(47, 109, 246, 0.35);
}

.form-input:focus {
  outline: none;
  border-color: #00B67A;
  box-shadow: 0 0 0 3px rgba(0, 182, 122, 0.25);
}
</style>
