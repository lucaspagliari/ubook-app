<script setup lang="ts">
import LogoIcon from "@/components/icons/LogoIcon.vue";
</script>

<template>
  <div class="flex flex-col md:flex-row items-center gap-4 md:gap-14">
    <LogoIcon />
    <div
      class="flex flex-grow flex-col md:flex-row sm:w-full items-center gap-4 md:gap-8"
    >
      <div class="col-start-1 col-end-2 w-36 h-8">
        <slot name="button"></slot>
      </div>
      <div class="flex-grow">
        <slot name="input"> </slot>
      </div>
    </div>
  </div>
</template>
