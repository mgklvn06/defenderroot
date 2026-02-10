<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-black/90 backdrop-blur border-b border-white/10' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex h-20 items-center justify-between">
        <RouterLink
          to="/"
          class="flex items-center gap-2 text-white font-semibold tracking-wide"
        >
          <span class="text-lg">BinaryDefenders</span>
        </RouterLink>

        <!-- Desktop navigation -->
        <nav class="hidden lg:flex items-center gap-8 text-sm text-gray-300">
          <RouterLink class="nav-link" to="/services">Services</RouterLink>
          <RouterLink class="nav-link" to="/case-studies">Work</RouterLink>
          <RouterLink class="nav-link" to="/engagement-models">Engagement</RouterLink>
          <RouterLink class="nav-link" to="/about">Why Us</RouterLink>
        </nav>

        <div class="hidden lg:flex items-center gap-4">
          <RouterLink
            to="/contact"
            class="px-5 py-2 rounded-lg bg-cyan-400 text-black font-medium hover:bg-cyan-300 transition"
          >
            Talk to Experts
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button
          class="lg:hidden text-white"
          aria-label="Open menu"
          @click="open = true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Backdrop -->
    <transition name="fade">
      <div
        v-if="open"
        class="fixed inset-0 z-40 bg-black/70"
        @click="open = false"
      />
    </transition>

    <!-- Mobile drawer -->
    <transition name="slide">
      <aside
        v-if="open"
        class="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-black z-50 border-l border-white/10 flex flex-col"
      >
        <div class="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span class="text-white font-semibold">BinaryDefenders</span>
          <button @click="open = false" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="flex flex-col px-6 py-6 gap-6 text-gray-300">
          <RouterLink @click="open = false" class="mobile-link" to="/services">Services</RouterLink>
          <RouterLink @click="open = false" class="mobile-link" to="/case-studies">Case Studies</RouterLink>
          <RouterLink @click="open = false" class="mobile-link" to="/engagement-models">Engagement Models</RouterLink>
          <RouterLink @click="open = false" class="mobile-link" to="/about">Why Choose Us</RouterLink>
        </nav>

        <div class="mt-auto px-6 py-6 border-t border-white/10">
          <RouterLink
            to="/contact"
            class="block w-full text-center px-5 py-3 rounded-lg bg-cyan-400 text-black font-medium"
            @click="open = false"
          >
            Talk to Experts
          </RouterLink>
        </div>
      </aside>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const open = ref(false)
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener("scroll", onScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll)
})
</script>

<style scoped>
.nav-link {
  position: relative;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #22d3ee;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  background: #22d3ee;
  transition: width 0.25s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-link {
  font-size: 1rem;
  font-weight: 500;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
