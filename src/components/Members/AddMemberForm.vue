<template>
  <div class="mb-4 bg-light border rounded p-4 shadow-sm" v-if="showAddMemberForm">
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
</template>

<script setup>
defineProps(['showAddMemberForm', 'newMember', 'addMember']);
</script>
