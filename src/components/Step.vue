<template>
  <div class="p-6 rounded-xl bg-slate-950 border border-slate-800">
    <div class="text-emerald-400 font-bold text-sm">
      STEP {{ number }}
    </div>
    <h4 class="mt-2 text-lg font-semibold">
      {{ title }}
    </h4>
    <p class="mt-2 text-slate-400 text-sm">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  number: String,
  title: String,
  text: String
});
</script>
