<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade-page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 300ms ease;
}

.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}
</style>
