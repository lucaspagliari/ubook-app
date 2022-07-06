<script setup lang="ts">
import { Header } from "@/types";
import stc from "string-to-color";
defineProps<{
  headers: Header[];
  items: any[];
  highlights: string[];
}>();

function getInitial(item: any): string {
  return String(item.name).charAt(0).toUpperCase();
}

function genHexColor(item: any): string {
  return stc(getInitial(item));
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
      <!-- <transition-group name="color" mode="out-in"> -->
      <tr
        v-for="item in items"
        :key="item.id"
        :class="[
          'h-10 border border-pale-gray hover:bg-light-pink',
          { 'bg-light-pink': highlights.includes(item.id) },
        ]"
      >
        <td v-for="header in headers" :key="header.value" class="dark-text p-2">
          <template v-if="header.value === 'name'">
            <div
              :style="{ backgroundColor: genHexColor(item) }"
              class="w-6 h-6 text-center inline-block text-white rounded-full mr-4"
            >
              {{ getInitial(item) }}
            </div>
          </template>
          {{ item[header.value] }}
        </td>
        <slot name="options" :item="item"></slot>
      </tr>
      <!-- </transition-group> -->
    </tbody>
  </table>
</template>
<style>
/* Transition implementation
.color-enter-active {
  transition: all 10s ease-in-out;
  opacity: 1;
  @apply bg-light-pink;
}

.color-leave-active {
  transition: all 0.2s ease-in-out;
  opacity: 0;
} 
*/
</style>
