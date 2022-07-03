<script setup lang="ts">
import LogoIcon from "./components/icons/LogoIcon.vue";
import SearchField from "./components/inputs/SearchField.vue";
import AddBtn from "./components/buttons/AddBtn.vue";
import ContactModal from "./components/modal/ContactModal.vue";
import DeleteModal from "./components/modal/DeleteModal.vue";
import EmptyContact from "./views/EmptyContact.vue";
import DataTable from "./components/table/DataTable.vue";

const headers = [
  { text: "Contatos", value: "name" },
  { text: "E-mail", value: "email" },
  { text: "Telefone", value: "number" },
  { text: "", value: "options" },
];

const items = [
  { name: "Alana", email: "alana@email.com", number: "91234-1234" },
  { name: "Alana", email: "alana@email.com", number: "91234-1234" },
  { name: "Alana", email: "alana@email.com", number: "91234-1234" },
  { name: "Alana", email: "alana@email.com", number: "91234-1234" },
];
</script>

<template>
  <div class="h-screen bg-base p-4 font-roboto">
    <div class="flex items-center gap-14">
      <LogoIcon />
      <add-btn>Criar contato</add-btn>
      <SearchField
        class="flex-grow"
        placeholder="Buscar..."
      />
    </div>

    <ContactModal />
    <!-- <DeleteModal /> -->
    <main class="mt-4">
      <DataTable
        :headers="headers"
        :items="items"
      />
      <EmptyContact />
    </main>
  </div>
</template>
