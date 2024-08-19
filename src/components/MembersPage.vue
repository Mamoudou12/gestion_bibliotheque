<template>
  <div class="container mt-5">
    <h1 class="mb-4">Gestion des Membres</h1>
    
    <div class="d-flex justify-content-between mb-4">
      <button class="btn btn-primary" @click="toggleAddMemberForm">
        {{ showAddMemberForm ? 'Annuler' : 'Ajouter un membre' }}
      </button>
    </div>

    <div v-if="showAddMemberForm" class="mb-4 bg-light border rounded p-4 shadow-sm">
      <h3>Ajouter un nouveau membre</h3>
      <form @submit.prevent="addMember">
        <div class="mb-3">
          <label for="name" class="form-label">Nom</label>
          <input id="name" v-model="newMember.name" type="text" class="form-control" placeholder="Nom du membre" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input id="email" v-model="newMember.email" type="email" class="form-control" placeholder="Email du membre" required />
        </div>
        <button type="submit" class="btn btn-success">Ajouter</button>
      </form>
    </div>

    <table class="table table-striped table-bordered shadow-sm">
      <thead class="bg-secondary text-white">
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.id">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="viewMember(member.id)">Voir</button>
            <button class="btn btn-warning btn-sm ms-2" @click="editMember(member.id)">Modifier</button>
            <button class="btn btn-danger btn-sm ms-2" @click="deleteMember(member.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for viewing and editing members -->
    <div v-if="currentMember" class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-3 shadow-lg">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditing ? 'Modifier' : 'Voir' }} le membre</h5>
            <button type="button" class="btn-close" @click="currentMember = null"></button>
          </div>
          <div class="modal-body">
            <div v-if="isEditing">
              <form @submit.prevent="updateMember">
                <div class="mb-3">
                  <label for="editName" class="form-label">Nom</label>
                  <input id="editName" v-model="currentMember.name" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="editEmail" class="form-label">Email</label>
                  <input id="editEmail" v-model="currentMember.email" type="email" class="form-control" />
                </div>
                <button type="submit" class="btn btn-success">Enregistrer</button>
              </form>
            </div>
            <div v-else>
              <p><strong>ID:</strong> {{ currentMember.id }}</p>
              <p><strong>Nom:</strong> {{ currentMember.name }}</p>
              <p><strong>Email:</strong> {{ currentMember.email }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="currentMember = null">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const members = ref([
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
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
</script>

<style scoped>
/* Use Bootstrap classes only, no custom CSS */
</style>
