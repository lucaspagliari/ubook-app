<script setup lang="ts">
import PlusIcon from "@/components/icons/PlusIcon.vue";
</script>
<template>
  <button
    class="flex gap-2 rounded-full px-4 py-3 bg-yellowish-green text-orange text-sm font-medium drop-shadow-md"
  >
    <PlusIcon />
    <slot></slot>
  </button>
</template>
