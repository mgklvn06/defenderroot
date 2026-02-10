<template>
  <RouterLink
    :to="to"
    class="inline-block rounded-md px-5 py-2 font-medium transition text-center"
    :class="buttonClass"
  >
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  to: string
  variant?: "primary" | "secondary" | "outline"
}>()

const buttonClass = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "bg-gray-700 text-white hover:bg-gray-600"
    case "outline":
      return "border border-white/20 text-white hover:bg-white/10"
    default:
      return "bg-cyan-500 text-black hover:bg-cyan-400"
  }
})
</script>
