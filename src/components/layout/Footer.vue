<template>
  <footer class="bg-primary border-t border-border/60 text-text-secondary">
    <div class="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

      <!-- Branding + Contact -->
      <div class="space-y-4">
        <h3 class="text-white font-bold text-lg">BinaryDefenders</h3>
        <p class="text-text-secondary max-w-xs">
          We engineer secure digital systems -- from web & mobile applications to offensive security testing.
          Building, breaking, and hardening systems before attackers do.
        </p>
        <div class="space-y-1 text-sm">
          <p>Email: <a href="mailto:contact@binarydefenders.com" class="text-secondary hover:underline">contact@binarydefenders.com</a></p>
          <p>Phone: <a href="tel:+254794101619" class="text-secondary hover:underline">+254 794 101 619</a></p>
          <p>Location: Westlands, Nairobi, Kenya</p>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="space-y-2">
        <h4 class="text-white font-semibold mb-4">Navigate</h4>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-secondary">Home</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-secondary">Services</RouterLink></li>
          <li><RouterLink to="/case-studies" class="hover:text-secondary">Work</RouterLink></li>
          <li><RouterLink to="/engagement-models" class="hover:text-secondary">Engagement</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-secondary">Contact</RouterLink></li>
        </ul>
      </div>

      <!-- Legal & Certifications -->
      <div class="space-y-2">
        <h4 class="text-white font-semibold mb-4">Legal & Certifications</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-secondary">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-secondary">Terms of Service</a></li>
          <li class="mt-4 text-text-secondary/60 text-xs">
            &copy; 2026 BinaryDefenders. All rights reserved.
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
// No script needed -- static footer with RouterLinks
</script>

<style scoped>
/* Optional subtle hover transitions */
a {
  transition: color 150ms ease-out;
}

a:focus-visible {
  outline: 2px solid rgba(0, 182, 122, 0.6);
  outline-offset: 2px;
  border-radius: 4px;
}
</style>
