<script setup lang="ts">
import BaseModal from "./BaseModal.vue";
</script>
<template>
  <base-modal>
    <div class="bg-white rounded-2xl text-dark w-96">
      <div class="h-12 flex items-center px-4">
        <h2 class="text-lg">Excluir Contato</h2>
      </div>
      <divider />
      <div class="p-6">
        <span class="text-sm">Deseja realmente excluir o contato?</span>
      </div>
      <divider />
      <div class="h-14 flex items-center justify-end gap-4 p-4">
        <button>Cancelar</button>
        <button>Salvar</button>
      </div>
    </div>
  </base-modal>
</template>
