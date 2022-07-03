<script setup lang="ts">
import SearchIcon from "@/components/icons/SearchIcon.vue";
// eslint-disable-next-line
const props = defineProps({
  placeholder: String,
  type: { type: String, default: "text" },
  label: String
});

const name = ((1 << 24) * Math.random()).toString(16)

</script>

<template>
  <div class=" px-2 rounded">
    <label :for="name" class="text-sm">{{ label }}</label>
    <input
      :name="name"
      v-bind="props"
      class="w-full border border-gray h-8 p-2 rounded"
    />
  </div>
</template>
