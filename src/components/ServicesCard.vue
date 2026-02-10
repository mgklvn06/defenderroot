<template>
  <div
    class="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500 transition"
  >
    <h3 class="text-xl font-semibold">
      {{ title }}
    </h3>
    <p class="mt-3 text-slate-400">
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
