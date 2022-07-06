<script setup lang="ts">
import { computed } from "@vue/reactivity";
interface Props {
  text?: boolean;
  disabled?: boolean;
  color: string;
}
const props = withDefaults(defineProps<Props>(), {
  color: "orange",
});

const emit = defineEmits(["click"]);

const btnStyle = computed(() => {
  const { text, color, disabled } = props;
  const style = text
    ? `text-${color}`
    : `rounded-full bg-${color} bg-orange text-white drop-shadow-md`;

  return !disabled ? style : `${style} opacity-30`;
});

function handleClick() {
  props.disabled || emit("click");
}
</script>
<template>
  <button
    :class="[btnStyle, 'px-4 py-2 text-sm font-medium']"
    @click.prevent="handleClick"
  >
    <slot></slot>
  </button>
</template>
