<script setup lang="ts">
import LogoIcon from "@/components/icons/LogoIcon.vue";
</script>

<template>
  <div class="flex items-center gap-14">
    <LogoIcon />
    <div class="flex flex-grow items-center gap-8">
      <div class="col-start-1 col-end-2 w-36 h-8">
        <slot name="button"></slot>
      </div>
      <div class="flex-grow">
        <slot name="input"> </slot>
      </div>
    </div>
  </div>
</template>
