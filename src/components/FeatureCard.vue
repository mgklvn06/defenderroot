<template>
  <div class="p-6 rounded-xl border border-slate-800 bg-slate-900">
    <h4 class="font-semibold text-lg">
      {{ title }}
    </h4>
    <p class="mt-2 text-slate-400 text-sm">
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
