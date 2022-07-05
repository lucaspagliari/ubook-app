<script setup lang="ts">
import BookHeader from "./views/BookHeader.vue";
import BookEmpty from "./views/BookEmpty.vue";
import SearchField from "@/components/inputs/SearchField.vue";
import AddBtn from "@/components/buttons/AddBtn.vue";
import ContactModal from "@/components/modal/ContactModal.vue";
import DeleteModal from "@/components/modal/DeleteModal.vue";
import DataTable from "@/components/table/DataTable.vue";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import { onMounted, reactive, computed, ref } from "vue";
import { Contact, Header } from "./types";

const state = reactive<{ contacts: Contact[]; selected: Contact }>({
  contacts: [],
  selected: { id: "", email: "", name: "", number: "" },
});

onMounted(() => {
  const data = localStorage.getItem("contacts");
  state.contacts = data ? JSON.parse(data) : [];
  showDataTable.value = !!state.contacts.length;
});

// Modal logic
const showContactModal = ref<boolean>(false);
const showDeleteModal = ref<boolean>(false);
const showEditModal = ref<boolean>(false);
const showDataTable = ref<boolean>(false);

const handleAddBtn = () => {
  showContactModal.value = true;
};
const addContact = (contact: Contact) => {
  showDataTable.value = true;
  setTimeout(() => {
    state.contacts.push(contact);
    saveLocal();
  }, 10);
};

const handleDeleteBtn = (item: Contact) => {
  state.selected = item;
  showDeleteModal.value = true;
};
const deleteContact = () => {
  state.contacts = state.contacts.filter((contact) => {
    return contact.id !== state.selected.id;
  });
  if (!state.contacts.length) {
    showDataTable.value = false;
  }
  saveLocal();
};

const handleEditBtn = (item: Contact) => {
  state.selected = item;
  showEditModal.value = true;
};
const editContact = (edited: Contact) => {
  state.contacts = state.contacts.map((contact) => {
    return contact.id === edited.id ? edited : contact;
  });
  saveLocal();
};
const saveLocal = () => {
  localStorage.setItem("contacts", JSON.stringify(state.contacts));
};

// DataTable Logic
const searchName = ref("");
const hasContacts = computed(() => {
  return state.contacts.length;
});
const contactsResult = computed(() => {
  return state.contacts.filter((contact) =>
    contact.name.includes(searchName.value)
  );
});
const headers: Header[] = [
  { text: "Contatos", value: "name" },
  { text: "E-mail", value: "email" },
  { text: "Telefone", value: "number" },
];
</script>

<template>
  <contact-modal v-model="showContactModal" @save="addContact">
    Criar novo contato
  </contact-modal>
  <DeleteModal v-model="showDeleteModal" @delete="deleteContact" />
  <contact-modal
    v-model="showEditModal"
    :contact="state.selected"
    @save="editContact"
  >
    Editar contato
  </contact-modal>
  <div class="h-screen bg-base p-4 font-roboto">
    <book-header>
      <template #button>
        <add-btn v-if="hasContacts" @click="handleAddBtn" dense
          >Criar contato</add-btn
        >
      </template>
      <template #input>
        <SearchField v-model="searchName" class="" placeholder="Buscar..." />
      </template>
    </book-header>

    <main class="mt-4">
      <data-table
        v-if="showDataTable"
        :headers="headers"
        :items="contactsResult"
      >
        <template #options="{ item }">
          <td>
            <div class="flex gap-3">
              <delete-icon
                class="cursor-pointer"
                @click="handleDeleteBtn(item)"
              ></delete-icon>
              <edit-icon
                class="cursor-pointer"
                @click="handleEditBtn(item)"
              ></edit-icon>
            </div>
          </td>
        </template>
      </data-table>
      <book-empty v-else>
        <add-btn @click="handleAddBtn">Criar contato</add-btn>
      </book-empty>
    </main>
  </div>
</template>
