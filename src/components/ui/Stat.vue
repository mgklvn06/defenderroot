<template>
  <div class="bg-[#111421] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
    <p class="text-3xl font-extrabold text-white">{{ value }}</p>
    <p class="text-gray-400 mt-2 text-sm">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string
  label: string
}>()
</script>
