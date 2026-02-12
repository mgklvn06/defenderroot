<template>
  <header
    class="nav-shell fixed top-0 left-0 right-0 z-50 transition-all duration-medium ease-enterprise"
    :class="scrolled ? 'bg-primary/90 backdrop-blur-xl nav-shadow-strong' : 'bg-primary/70 backdrop-blur-lg nav-shadow-soft'"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex h-20 items-center justify-between">
        <RouterLink
          to="/"
          class="flex items-center gap-2 text-text-primary font-semibold tracking-wide"
        >
          <span class="text-lg">BinaryDefenders</span>
        </RouterLink>

        <!-- Desktop navigation -->
        <nav class="hidden lg:flex items-center gap-8 text-sm text-text-secondary">
          <RouterLink class="nav-link" active-class="nav-link-active" to="/services">Services</RouterLink>
          <RouterLink class="nav-link" active-class="nav-link-active" to="/case-studies">Work</RouterLink>
          <RouterLink class="nav-link" active-class="nav-link-active" to="/engagement-models">Engagement</RouterLink>
          <RouterLink class="nav-link" active-class="nav-link-active" to="/about">Why Us</RouterLink>
        </nav>

        <div class="hidden lg:flex items-center gap-4">
          <RouterLink
            to="/contact"
            class="btn-primary"
          >
            Talk to Experts
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <button
          class="lg:hidden rounded-md text-text-primary transition-opacity duration-fast ease-enterprise focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-security/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          :class="open ? 'opacity-0 pointer-events-none' : 'opacity-100'"
          aria-label="Open menu"
          :aria-expanded="open"
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
        class="fixed inset-0 z-40 bg-background/70"
        @click="open = false"
      />
    </transition>

    <!-- Mobile drawer -->
    <transition name="slide">
      <aside
        v-if="open"
        class="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-primary z-50 border-l border-border/60 flex flex-col"
      >
        <div class="flex items-center justify-between px-6 py-5 border-b border-border/60">
          <span class="text-text-primary font-semibold">BinaryDefenders</span>
          <button @click="open = false" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="flex flex-col px-6 py-6 gap-6 text-text-secondary">
          <RouterLink @click="open = false" class="mobile-link" active-class="mobile-link-active" to="/services">Services</RouterLink>
          <RouterLink @click="open = false" class="mobile-link" active-class="mobile-link-active" to="/case-studies">Work</RouterLink>
          <RouterLink @click="open = false" class="mobile-link" active-class="mobile-link-active" to="/engagement-models">Engagement</RouterLink>
          <RouterLink @click="open = false" class="mobile-link" active-class="mobile-link-active" to="/about">Why Us</RouterLink>
        </nav>

        <div class="mt-auto px-6 py-6 border-t border-border/60">
          <RouterLink
            to="/contact"
            class="block w-full text-center btn-primary"
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
import { ref, onMounted, onUnmounted, watch } from "vue"
import { useRoute } from "vue-router"

const open = ref(false)
const scrolled = ref(false)
const route = useRoute()

let mediaQuery = null

const onScroll = () => {
  scrolled.value = window.scrollY > 50
}

const onBreakpointChange = (event) => {
  if (event.matches) {
    open.value = false
  }
}

onMounted(() => {
  window.addEventListener("scroll", onScroll)
  onScroll()

  mediaQuery = window.matchMedia("(min-width: 1024px)")
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", onBreakpointChange)
  } else {
    mediaQuery.addListener(onBreakpointChange)
  }
})

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll)
  if (mediaQuery) {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener("change", onBreakpointChange)
    } else {
      mediaQuery.removeListener(onBreakpointChange)
    }
  }
  document.body.style.overflow = ""
})

watch(open, (value) => {
  document.body.style.overflow = value ? "hidden" : ""
})

watch(
  () => route.fullPath,
  () => {
    open.value = false
  }
)
</script>

<style scoped>
.nav-shell {
  position: fixed;
}

.nav-shell::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 12px;
  background: linear-gradient(to bottom, rgba(11, 22, 35, 0), rgba(11, 22, 35, 0.6));
  pointer-events: none;
}

.nav-shadow-soft {
  box-shadow: 0 12px 28px -18px rgba(0, 0, 0, 0.6);
}

.nav-shadow-strong {
  box-shadow: 0 18px 36px -22px rgba(0, 0, 0, 0.7);
}

.nav-link {
  display: inline-block;
  position: relative;
  transition: color 150ms ease-out, transform 150ms ease-out;
}

.nav-link:hover {
  color: #2F6DF6;
}

.nav-link:active {
  transform: scale(0.98);
}

.nav-link:focus-visible {
  outline: 2px solid rgba(0, 182, 122, 0.6);
  outline-offset: 4px;
  border-radius: 4px;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  background: #2F6DF6;
  transition: width 250ms ease-out;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link-active {
  color: #2F6DF6;
}

.nav-link-active::after {
  width: 100%;
}

.mobile-link {
  font-size: 1rem;
  font-weight: 500;
  transition: color 150ms ease-out, transform 150ms ease-out;
}

.mobile-link:hover {
  color: #2F6DF6;
}

.mobile-link:active {
  transform: scale(0.98);
}

.mobile-link:focus-visible {
  outline: 2px solid rgba(0, 182, 122, 0.6);
  outline-offset: 4px;
  border-radius: 4px;
}

.mobile-link-active {
  color: #2F6DF6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
