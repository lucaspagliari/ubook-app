<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);

interface Props {
  placeholder?: string;
  type: string;
  modelValue?: string;
  label?: string;
}

withDefaults(defineProps<Props>(), {
  type: "text",
});

const name = ((1 << 24) * Math.random()).toString(16);
const updateModelValue = (event: any) => {
  emit("update:modelValue", event.target.value);
};
</script>

<template>
  <div class="px-2">
    <label :for="name" class="text-sm">{{ label }}</label>
    <input
      @input="updateModelValue"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      class="w-full border border-gray h-8 p-2 rounded"
    />
  </div>
</template>
