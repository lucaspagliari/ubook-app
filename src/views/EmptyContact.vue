<script setup lang="ts">
import BookIcon from "@/components/icons/BookIcon.vue";
</script>
<template>
  <div class="empty-contact w-full mt-28 flex flex-col gap-6 items-center">
    <div>
      <BookIcon />
    </div>
    <p class="text-dark">Nenhum contato foi criado ainda.</p>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
