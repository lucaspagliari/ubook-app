<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  placeholder: String,
  type: { type: String, default: "text" },
  label: String,
  modelValue: String,
});

const name = ((1 << 24) * Math.random()).toString(16);
const updateModelValue = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="px-2 rounded">
    <label :for="name" class="text-sm">{{ label }}</label>
    <input
      @input="updateModelValue"
      :name="name"
      v-bind="props"
      class="w-full border border-gray h-8 p-2 rounded"
    />
  </div>
</template>
