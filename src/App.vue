<script setup lang="ts">
import LogoIcon from "@/components/icons/LogoIcon.vue";
import SearchField from "@/components/inputs/SearchField.vue";
import AddBtn from "@/components/buttons/AddBtn.vue";
import EmptyContact from "@/views/EmptyContact.vue";
import ContactModal from "@/components/modal/ContactModal.vue";
import DeleteModal from "@/components/modal/DeleteModal.vue";
import DataTable from "@/components/table/DataTable.vue";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import { reactive } from "vue";
import { computed, ref } from "@vue/reactivity";
import { Contact, Header } from "./types";

const showContactModal = ref<boolean>(false);
const showDeleteModal = ref<boolean>(false);

const handleAddBtn = () => {
  showContactModal.value = true;
};

const state = reactive<{ contacts: Contact[] }>({
  contacts: [],
});
const searchName = ref("");

const hasContacts = computed(() => {
  return state.contacts.length;
});

const addContact = (e: Contact) => {
  state.contacts.push(e);
};
const deleteContact = () => {};

const contactsResult = computed(() => {
  return state.contacts.filter((contact) =>
    contact.name.includes(searchName.value)
  );
});
const headers: Header[] = [
  { text: "Contatos", value: "name" },
  { text: "E-mail", value: "email" },
  { text: "Telefone", value: "number" },
  { text: "", value: "options" },
];
/* const items = [
  { name: "Alana", email: "alana@email.com", number: "91234-1234" },
  { name: "Alana", email: "alana@email.com", number: "91234-1234" },
  { name: "Alana", email: "alana@email.com", number: "91234-1234" },
  { name: "Alana", email: "alana@email.com", number: "91234-1234" },
]; */
</script>

<template>
  <div class="h-screen bg-base p-4 font-roboto">
    <div class="flex items-center gap-14 h-11">
      <LogoIcon />
      <!-- avoid expansion, keep space for btn even without showing it -->
      <add-btn v-if="hasContacts" @click="handleAddBtn">Criar contato</add-btn>
      <SearchField
        v-model="searchName"
        class="flex-grow"
        placeholder="Buscar..."
      />
    </div>
    <ContactModal v-model="showContactModal" @save="addContact" />
    <DeleteModal v-model="showDeleteModal" @delete="deleteContact" />
    <main class="mt-4">
      <data-table v-if="hasContacts" :headers="headers" :items="contactsResult">
        <template #options> </template>
      </data-table>
      <empty-contact v-else>
        <add-btn @click="handleAddBtn">Criar contato</add-btn>
      </empty-contact>
    </main>
  </div>
</template>
