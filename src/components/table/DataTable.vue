<script setup lang="ts">
/* eslint-disable */
import { defineProps } from "vue";
import type { PropType } from "vue";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
import EditIcon from "@/components/icons/EditIcon.vue";

type HeaderType = {
  text: string;
  value: string;
};

defineProps({
  headers: Array as PropType<HeaderType[]>,
  items: Array as PropType<any[]>,
});

function getInitial(item: any): string {
  return String(item.name).charAt(0).toUpperCase();
}

function genRandomHexColor(): string {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}
</script>
<template>
  <table class="w-full bg-white">
    <thead>
      <tr class="h-10 border border-pale-gray text-bluey-gray text-sm">
        <td v-for="header in headers" :key="header.value" class="px-8">
          {{ header.text }}
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="item.name + index"
        class="h-10 border border-pale-gray hover:bg-light-pink"
      >
        <td v-for="header in headers" :key="header.value" class="dark-text p-2">
          <template v-if="header.value === 'name'">
            <div
              :style="{ backgroundColor: genRandomHexColor() }"
              class="w-6 h-6 text-center inline-block text-white rounded-full mr-4"
            >
              {{ getInitial(item) }}
            </div>
          </template>
          {{ item[header.value] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
