<script setup lang="ts">
import BaseModal from "./BaseModal.vue";
import TextField from "@/components/inputs/TextField.vue";
</script>

<template>
  <base-modal class="contact-modal">
    <div class="bg-white rounded-2xl text-dark w-96">
      <div class="h-12 flex items-center px-4">
        <h2 class="text-lg">Contato</h2>
      </div>
      <divider />
      <div class="flex flex-col gap-4 p-6">
        <TextField label="Nome" />
        <TextField label="E-mail" type="email" />
        <TextField label="Telefone" />
      </div>
      <divider />
      <div class="h-14 flex items-center justify-end gap-4 p-4">
        <btn text>Cancelar</btn>
        <btn>Salvar</btn>
      </div>
    </div>
  </base-modal>
</template>

<style scoped>

</style>
