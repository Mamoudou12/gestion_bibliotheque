<template>
  <form @submit.prevent="submitLoan">
    <div class="mb-3">
      <label for="book" class="form-label">Livre</label>
      <input id="book" v-model="loan.book" type="text" class="form-control" placeholder="Titre du livre" required />
    </div>
    <div class="mb-3">
      <label for="borrower" class="form-label">Emprunteur</label>
      <input id="borrower" v-model="loan.borrower" type="text" class="form-control" placeholder="Nom de l'emprunteur" required />
    </div>
    <div class="mb-3">
      <label for="startDate" class="form-label">Date de début</label>
      <input id="startDate" v-model="loan.startDate" type="date" class="form-control" required />
    </div>
    <div class="mb-3">
      <label for="dueDate" class="form-label">Date de retour prévue</label>
      <input id="dueDate" v-model="loan.dueDate" type="date" class="form-control" required />
    </div>
    <button type="submit" class="btn btn-success">Ajouter</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['submit-loan']);

const loan = ref({
  book: '',
  borrower: '',
  startDate: '',
  dueDate: ''
});

const submitLoan = () => {
  emit('submit-loan', { ...loan.value });
  loan.value = { book: '', borrower: '', startDate: '', dueDate: '' }; // Reset the form after submission
};
</script>
