<template>
  <div class="text-center">
    <div
      ref="valueEl"
      :class="[
        'text-3xl font-bold text-security mb-2 transition-all duration-slow ease-enterprise',
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      ]"
    >
      {{ displayValue }}
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
import { onMounted, onBeforeUnmount, ref, watch } from "vue"
import { useReveal } from "@/composables/useReveal"

const props = defineProps({
  forceOnMount: {
    type: Boolean,
    default: false
  },
  value: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const { el: valueEl, isVisible } = useReveal({ threshold: 0.3 })
const { el: labelEl } = useReveal({ threshold: 0.3 })

let onScroll = null
const displayValue = ref(props.value)
let hasAnimated = false

const parseValue = (value) => {
  const match = value.match(/^[0-9]+(\.[0-9]+)?/)
  if (!match) return null
  const raw = match[0]
  return {
    number: parseFloat(raw),
    decimals: raw.includes(".") ? raw.split(".")[1].length : 0,
    suffix: value.slice(raw.length)
  }
}

const animateValue = () => {
  if (hasAnimated) return
  const parsed = parseValue(props.value)
  if (!parsed) {
    displayValue.value = props.value
    return
  }

  hasAnimated = true
  const { number, decimals, suffix } = parsed
  const start = 0
  const duration = 1500
  const startTime = performance.now()

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

  const tick = (now) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutCubic(progress)
    const current = start + (number - start) * eased
    displayValue.value = `${current.toFixed(decimals)}${suffix}`

    if (progress < 1) {
      requestAnimationFrame(tick)
    } else {
      displayValue.value = props.value
    }
  }

  requestAnimationFrame(tick)
}

const checkInView = () => {
  if (!valueEl.value || isVisible.value) return
  const rect = valueEl.value.getBoundingClientRect()
  const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0
  if (inView) {
    isVisible.value = true
    animateValue()
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
    animateValue()
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

watch(isVisible, (value) => {
  if (value) {
    animateValue()
  }
})
</script>
