<template>
  <RouterLink
    :to="to"
    class="inline-flex items-center justify-center rounded-md px-5 py-2 font-semibold transition-all duration-fast ease-out text-center hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-security/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]"
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
      return "border border-border bg-primary/30 text-text-primary hover:border-secondary/40 hover:bg-primary/50"
    case "outline":
      return "border border-border text-text-primary hover:border-secondary/40 hover:bg-primary/30"
    default:
      return "bg-secondary text-white hover:bg-secondary/90"
  }
})
</script>
