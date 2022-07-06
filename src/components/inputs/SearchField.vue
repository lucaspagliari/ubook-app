<script setup lang="ts">
import SearchIcon from "@/components/icons/SearchIcon.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps<{
  placeholder?: string;
  type?: string;
  modelValue?: string;
}>();

const updateModelValue = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="flex items-center bg-pale-gray px-2 rounded">
    <input
      @input="updateModelValue"
      :value="modelValue"
      v-bind="props"
      class="flex-auto text-bluey-gray bg-pale-gray h-8 p-2 rounded"
    />
    <SearchIcon class="h-4 w-4" />
  </div>
</template>
