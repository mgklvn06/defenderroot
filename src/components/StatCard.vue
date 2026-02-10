<template>
  <div class="p-6 rounded-xl bg-slate-900 border border-slate-800">
    <div class="text-4xl font-bold text-emerald-400">
      {{ title }}
    </div>
    <p class="mt-2 text-slate-400">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String
});
</script>
