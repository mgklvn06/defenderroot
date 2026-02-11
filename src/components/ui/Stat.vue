<template>
  <div class="text-center">
    <div
      ref="valueEl"
      :class="[
        'text-3xl font-bold text-security mb-2 transition-all duration-slow ease-enterprise',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      ]"
    >
      {{ value }}
    </div>
    <div
      ref="labelEl"
      :class="[
        'text-sm text-text-secondary transition-all duration-medium ease-enterprise',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      ]"
    >
      {{ label }}
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue"
import { useReveal } from "@/composables/useReveal"

const props = defineProps({
  forceOnMount: {
    type: Boolean,
    default: false
  }
})

const { el: valueEl, isVisible } = useReveal({ threshold: 0.3 })
const { el: labelEl } = useReveal({ threshold: 0.3 })

let onScroll = null

const checkInView = () => {
  if (!valueEl.value || isVisible.value) return
  const rect = valueEl.value.getBoundingClientRect()
  const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0
  if (inView) {
    isVisible.value = true
    if (onScroll) {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      onScroll = null
    }
  }
}

onMounted(() => {
  if (props.forceOnMount) {
    isVisible.value = true
    return
  }

  onScroll = () => {
    checkInView()
  }

  window.addEventListener("scroll", onScroll, { passive: true })
  window.addEventListener("resize", onScroll)
  checkInView()
})

onBeforeUnmount(() => {
  if (onScroll) {
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("resize", onScroll)
  }
})
</script>
