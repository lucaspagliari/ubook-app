<script setup lang="ts">
import BaseModal from "./BaseModal.vue";

const emit = defineEmits(["update:modelValue", "delete"]);
defineProps({
  modelValue: Boolean,
});

const handleCancel = () => {
  emit("update:modelValue", false);
};
const handleDelete = () => {
  emit("delete", true);
  emit("update:modelValue", false);
};
</script>
<template>
  <base-modal v-show="modelValue">
    <div class="bg-white rounded-2xl text-dark w-72 md:w-96">
      <div class="h-12 flex items-center px-4">
        <h2 class="text-lg">Excluir Contato</h2>
      </div>
      <divider />
      <div class="p-6">
        <span class="text-sm">Deseja realmente excluir o contato?</span>
      </div>
      <divider />
      <div class="h-14 flex items-center justify-end gap-4 p-4">
        <btn @click="handleCancel" text>Cancelar</btn>
        <btn @click="handleDelete">Excluir</btn>
      </div>
    </div>
  </base-modal>
</template>
