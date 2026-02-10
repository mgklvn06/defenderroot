<template>
  <footer class="bg-[#0b0f1a] border-t border-white/10 text-gray-400">
    <div class="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

      <!-- Branding + Contact -->
      <div class="space-y-4">
        <h3 class="text-white font-bold text-lg">BinaryDefenders</h3>
        <p class="text-gray-300 max-w-xs">
          We engineer secure digital systems — from web & mobile applications to offensive security testing.  
          Building, breaking, and hardening systems before attackers do.
        </p>
        <div class="space-y-1 text-sm">
          <p>Email: <a href="mailto:contact@binarydefenders.com" class="text-cyan-400 hover:underline">contact@binarydefenders.com</a></p>
          <p>Phone: <a href="tel:+254794101619" class="text-cyan-400 hover:underline">+254 794 101 619</a></p>
          <p>Location: Westlands, Nairobi, Kenya</p>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="space-y-2">
        <h4 class="text-white font-semibold mb-4">Navigate</h4>
        <ul class="space-y-2 text-sm">
          <li><RouterLink to="/" class="hover:text-cyan-400">Home</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-cyan-400">Services</RouterLink></li>
          <li><RouterLink to="/case-studies" class="hover:text-cyan-400">Work</RouterLink></li>
          <li><RouterLink to="/engagement-models" class="hover:text-cyan-400">Engagement</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-cyan-400">Contact</RouterLink></li>
        </ul>
      </div>

      <!-- Legal & Certifications -->
      <div class="space-y-2">
        <h4 class="text-white font-semibold mb-4">Legal & Certifications</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-cyan-400">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-cyan-400">Terms of Service</a></li>
          <li class="mt-4 text-gray-500 text-xs">
            &copy; 2026 BinaryDefenders. All rights reserved.
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
// No script needed — static footer with RouterLinks
</script>

<style scoped>
/* Optional subtle hover transitions */
a {
  transition: color 0.2s ease;
}
</style>
