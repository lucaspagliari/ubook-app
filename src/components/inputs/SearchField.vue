<script setup lang="ts">
import SearchIcon from "@/components/icons/SearchIcon.vue";
const props = defineProps({
  placeholder: String,
  type: { type: String },
});
</script>

<template>
  <div class="flex items-center bg-pale-gray px-2 rounded">
    <input
      v-bind="props"
      class="flex-auto text-bluey-gray  bg-pale-gray h-8 p-2 rounded"
    >
    <SearchIcon class="h-4 w-4 " />
  </div>
</template>
