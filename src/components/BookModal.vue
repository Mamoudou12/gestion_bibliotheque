<template>
    <div class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-3 shadow-lg">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditing ? 'Modifier' : 'Voir' }} le livre</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <div v-if="isEditing">
              <form @submit.prevent="submitUpdate">
                <div class="mb-3">
                  <label for="editTitle" class="form-label">Titre</label>
                  <input id="editTitle" v-model="localBook.title" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="editAuthor" class="form-label">Auteur</label>
                  <input id="editAuthor" v-model="localBook.author" type="text" class="form-control" />
                </div>
                <div class="mb-3">
                  <label for="editGenre" class="form-label">Genre</label>
                  <input id="editGenre" v-model="localBook.genre" type="text" class="form-control" />
                </div>
                <button type="submit" class="btn btn-success">Enregistrer</button>
              </form>
            </div>
            <div v-else>
              <p><strong>ID:</strong> {{ book.id }}</p>
              <p><strong>Titre:</strong> {{ book.title }}</p>
              <p><strong>Auteur:</strong> {{ book.author }}</p>
              <p><strong>Genre:</strong> {{ book.genre }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="$emit('close')">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    book: Object,
    isEditing: Boolean
  });
  
  const emit = defineEmits(['update-book', 'close']);
  
  const localBook = ref({ ...props.book });
  
  watch(() => props.book, (newValue) => {
  localBook.value = { ...newValue };
});

const submitUpdate = () => {
  emit('update-book', localBook.value);
  emit('close');
};
</script>

  