<template>
  <div class="container mt-5">
    <h1 class="mb-4">Gestion des Membres</h1>
    
    <div class="d-flex justify-content-between mb-4">
      <button class="btn btn-primary" @click="toggleAddMemberForm">
        {{ showAddMemberForm ? 'Annuler' : 'Ajouter un membre' }}
      </button>
    </div>

    <AddMemberForm
      :showAddMemberForm="showAddMemberForm"
      :newMember="newMember"
      :addMember="addMember"
    />

    <MemberList
      :members="members"
      :viewMember="viewMember"
      :editMember="editMember"
      :deleteMember="deleteMember"
    />

    <MemberModal
      :currentMember="currentMember"
      :isEditing="isEditing"
      :updateMember="updateMember"
      :closeModal="closeModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddMemberForm from './AddMemberForm.vue';
import MemberList from './MemberList.vue';
import MemberModal from './MemberModal.vue';

const members = ref([
  { id: 1, name: 'Aichettou Gay', email: 'aichettou@example.com' },
  { id: 2, name: 'Ag Mohamed', email: 'ag@example.com' },
]);

const showAddMemberForm = ref(false);
const newMember = ref({ name: '', email: '' });
const currentMember = ref(null);
const isEditing = ref(false);

const toggleAddMemberForm = () => {
  showAddMemberForm.value = !showAddMemberForm.value;
};

const addMember = () => {
  if (newMember.value.name && newMember.value.email) {
    members.value.push({
      id: members.value.length + 1,
      ...newMember.value,
    });
    newMember.value = { name: '', email: '' };
    showAddMemberForm.value = false;
  }
};

const viewMember = (id) => {
  const member = members.value.find(m => m.id === id);
  if (member) {
    currentMember.value = { ...member };
    isEditing.value = false;
  }
};

const editMember = (id) => {
  const member = members.value.find(m => m.id === id);
  if (member) {
    currentMember.value = { ...member };
    isEditing.value = true;
  }
};

const updateMember = () => {
  const index = members.value.findIndex(m => m.id === currentMember.value.id);
  if (index !== -1) {
    members.value[index] = { ...currentMember.value };
    currentMember.value = null;
  }
};

const deleteMember = (id) => {
  members.value = members.value.filter(member => member.id !== id);
};

const closeModal = () => {
  currentMember.value = null;
};
</script>
