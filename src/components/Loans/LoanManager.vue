<template>
  <div class="container mt-5">
    <h1 class="mb-4">Gestion des Prêts de Livres</h1>
    
    <div class="d-flex justify-content-between mb-4">
      <button class="btn btn-primary" @click="toggleAddLoanForm">
        {{ showAddLoanForm ? 'Annuler' : 'Ajouter un prêt' }}
      </button>
    </div>

    <div v-if="showAddLoanForm" class="mb-4 bg-light border rounded p-4 shadow-sm">
      <h3>Ajouter un nouveau prêt</h3>
      <LoanForm @submit-loan="addLoan" />
    </div>

    <table class="table table-striped table-bordered shadow-sm">
      <thead class="bg-secondary text-white">
        <tr>
          <th>ID</th>
          <th>Livre</th>
          <th>Emprunteur</th>
          <th>Date de Début</th>
          <th>Date de Retour Prévue</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="loan in loans" :key="loan.id">
          <td>{{ loan.id }}</td>
          <td>{{ loan.book }}</td>
          <td>{{ loan.borrower }}</td>
          <td>{{ loan.startDate }}</td>
          <td>{{ loan.dueDate }}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="viewLoan(loan.id)">Voir</button>
            <button class="btn btn-warning btn-sm ms-2" @click="editLoan(loan.id)">Modifier</button>
            <button class="btn btn-danger btn-sm ms-2" @click="deleteLoan(loan.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal for viewing and editing loans -->
    <LoanModal 
      v-if="isModalOpen" 
      :loan="currentLoan" 
      :isEditing="isEditing" 
      @update-loan="handleLoanUpdate" 
      @close="closeModal" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoanForm from './LoanForm.vue';
import LoanModal from './LoanModal.vue';

const loans = ref([
  { id: 1, book: 'De la dune au fleuve', borrower: 'Harouna Traoré', startDate: '2024-01-01', dueDate: '2024-01-15' },
  { id: 2, book: 'Atomic Habits', borrower: 'Ousmane Ly', startDate: '2024-02-01', dueDate: '2024-02-15' },
]);

const showAddLoanForm = ref(false);
const isModalOpen = ref(false);
const isEditing = ref(false);
const currentLoan = ref(null);

const toggleAddLoanForm = () => {
  showAddLoanForm.value = !showAddLoanForm.value;
};

const addLoan = (loan) => {
  loan.id = loans.value.length + 1; // Simple ID generation
  loans.value.push(loan);
  showAddLoanForm.value = false;
};

const viewLoan = (id) => {
  const loan = loans.value.find(l => l.id === id);
  if (loan) {
    currentLoan.value = { ...loan };
    isEditing.value = false;
    isModalOpen.value = true;
  }
};

const editLoan = (id) => {
  const loan = loans.value.find(l => l.id === id);
  if (loan) {
    currentLoan.value = { ...loan };
    isEditing.value = true;
    isModalOpen.value = true;
  }
};

const handleLoanUpdate = (updatedLoan) => {
  const index = loans.value.findIndex(l => l.id === updatedLoan.id);
  if (index !== -1) {
    loans.value[index] = { ...updatedLoan };
    closeModal();
  }
};

const deleteLoan = (id) => {
  loans.value = loans.value.filter(loan => loan.id !== id);
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>
