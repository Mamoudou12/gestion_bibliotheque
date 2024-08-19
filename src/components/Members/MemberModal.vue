<template>
  <div v-if="currentMember" class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0, 0, 0, 0.5);">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-3 shadow-lg">
        <div class="modal-header">
          <h5 class="modal-title">{{ isEditing ? 'Modifier' : 'Voir' }} le membre</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
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
          <button type="button" class="btn btn-secondary" @click="closeModal">Fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['currentMember', 'isEditing', 'updateMember', 'closeModal']);
</script>
