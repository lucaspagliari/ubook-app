<template>
  <Transition name="fade">
    <div
      tabindex="-1"
      aria-hidden="true"
      class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-black bg-opacity-40 flex justify-center items-center"
    >
      <div class="relative h-full md:h-auto shadow-2xl">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
