<script setup lang="ts">
import PlusIcon from "@/components/icons/PlusIcon.vue";
defineProps<{
  dense?: boolean;
}>();
</script>
<template>
  <button
    :class="[
      'flex gap-2 rounded-full px-4  bg-yellowish-green text-orange text-sm font-medium drop-shadow-md',
      dense ? 'py-1.5' : 'py-3',
    ]"
  >
    <PlusIcon />
    <slot></slot>
  </button>
</template>
