<script setup lang="ts">
import BaseModal from "./BaseModal.vue";
import TextField from "@/components/inputs/TextField.vue";
import { reactive, computed } from "vue";
import { Contact } from "@/types";

const emit = defineEmits(["update:modelValue", "save"]);
defineProps({
  modelValue: Boolean,
});

const state = reactive<{ form: Contact }>({
  form: {
    name: "",
    email: "",
    number: "",
  },
});

const disableBtn = computed<boolean>(() => {
  const { form } = state;
  return !Object.values(form).some((e) => e);
});

const handleCancel = () => {
  emit("update:modelValue", false);
};

const handleSave = () => {
  emit("save", state.form);
  emit("update:modelValue", false);
};
</script>

<template>
  <base-modal v-show="modelValue" class="contact-modal">
    <div class="bg-white rounded-2xl text-dark w-96">
      <div class="h-12 flex items-center px-4">
        <h2 class="text-lg">Contato</h2>
      </div>
      <divider />
      <div class="flex flex-col gap-4 p-6">
        <TextField v-model="state.form.name" label="Nome" />
        <TextField v-model="state.form.email" label="E-mail" type="email" />
        <TextField v-model="state.form.number" label="Telefone" />
      </div>
      <divider />
      <div class="h-14 flex items-center justify-end gap-4 p-4">
        <btn @click="handleCancel" text>Cancelar</btn>
        <btn :disabled="disableBtn" @click="handleSave">Salvar</btn>
      </div>
    </div>
  </base-modal>
</template>

<style scoped></style>
