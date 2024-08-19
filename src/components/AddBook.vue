<template>
    <div class="mb-4 bg-light border rounded p-4 shadow-sm">
      <h3>Ajouter un nouveau livre</h3>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title" class="form-label">Titre</label>
          <input id="title" v-model="localBook.title" type="text" class="form-control" placeholder="Titre du livre" required />
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">Auteur</label>
          <input id="author" v-model="localBook.author" type="text" class="form-control" placeholder="Auteur du livre" required />
        </div>
        <div class="mb-3">
          <label for="genre" class="form-label">Genre</label>
          <input id="genre" v-model="localBook.genre" type="text" class="form-control" placeholder="Genre du livre" required />
        </div>
        <button type="submit" class="btn btn-success">Ajouter</button>
        <button type="button" class="btn btn-secondary ms-2" @click="$emit('cancel')">Annuler</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    newBook: Object
  });
  
  const emit = defineEmits(['add-book', 'cancel']);
  
  const localBook = ref({ ...props.newBook });
  
  watch(() => props.newBook, (newValue) => {
    localBook.value = { ...newValue };
  });
  
  const submitForm = () => {
    emit('add-book', localBook.value);
  };
  </script>
  