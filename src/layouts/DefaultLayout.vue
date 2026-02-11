<template>
  <div class="bg-background text-text-primary min-h-screen">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/layout/Navbar.vue"
import Footer from "@/components/layout/Footer.vue"
</script>
