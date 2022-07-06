<script setup lang="ts">
import BaseModal from "./BaseModal.vue";
import TextField from "@/components/inputs/TextField.vue";
import { reactive, computed, watch } from "vue";
import { Contact } from "@/types";

const emit = defineEmits([
  "update:modelValue",
  "update:contact",
  "save",
]);
const props = defineProps<{
  contact?: Contact;
  modelValue?: boolean;
}>();

watch(
  () => props.contact,
  (newValue) => {
    if (newValue) {
      state.form = { ...newValue };
    }
  }
);

const state = reactive<{ form: any }>({
  form: {
    name: "",
    email: "",
    number: "",
  },
});

const disableBtn = computed<boolean>(() => {
  return !Object.values(state.form).some((e) => e);
});

const handleCancel = () => {
  emit("update:modelValue", false);
};

const handleSave = () => {
  const { form } = state;

  if (props.contact) {
    emit("update:contact", { id: props.contact.id, ...form });
  }

  const id = "id" in form ? form.id : new Date().toISOString();
  emit("save", { id, ...form });
  emit("update:modelValue", false);
};
</script>

<template>
  <base-modal v-show="modelValue" class="contact-modal">
    <div class="bg-white rounded-2xl text-dark w-72 md:w-96">
      <div class="h-12 flex items-center px-4">
        <h2 class="text-lg">Contato</h2>
      </div>
      <divider />
      <form class="flex flex-col gap-4 p-6">
        <TextField v-model="state.form.name" label="Nome" />
        <TextField v-model="state.form.email" label="E-mail" type="email" />
        <TextField v-model="state.form.number" label="Telefone" />
      </form>
      <divider />
      <div class="h-14 flex items-center justify-end gap-4 p-4">
        <btn @click="handleCancel" text>Cancelar</btn>
        <btn :disabled="disableBtn" @click="handleSave">Salvar</btn>
      </div>
    </div>
  </base-modal>
</template>

<style scoped></style>
