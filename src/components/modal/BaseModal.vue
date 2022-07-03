<template>
  <div
    tabindex="-1"
    aria-hidden="true"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-black bg-opacity-40  flex justify-center items-center"
  >
    <div class="relative h-full md:h-auto">
      <slot></slot>
    </div>
  </div>
</template>
