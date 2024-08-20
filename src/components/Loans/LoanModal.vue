<template>
  <div class="modal fade show d-block" tabindex="-1" style="background-color: rgba(0, 0, 0, 0.5);">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-3 shadow-lg">
        <div class="modal-header">
          <h5 class="modal-title">{{ isEditing ? 'Modifier' : 'Voir' }} le prêt</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <div v-if="isEditing">
            <form @submit.prevent="submitUpdate">
              <div class="mb-3">
                <label for="editBook" class="form-label">Livre</label>
                <input id="editBook" v-model="localLoan.book" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="editBorrower" class="form-label">Emprunteur</label>
                <input id="editBorrower" v-model="localLoan.borrower" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="editStartDate" class="form-label">Date de Début</label>
                <input id="editStartDate" v-model="localLoan.startDate" type="date" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="editDueDate" class="form-label">Date de Retour Prévue</label>
                <input id="editDueDate" v-model="localLoan.dueDate" type="date" class="form-control" />
              </div>
              <button type="submit" class="btn btn-success">Enregistrer</button>
            </form>
          </div>
          <div v-else>
            <p><strong>ID:</strong> {{ loan.id }}</p>
            <p><strong>Livre:</strong> {{ loan.book }}</p>
            <p><strong>Emprunteur:</strong> {{ loan.borrower }}</p>
            <p><strong>Date de Début:</strong> {{ loan.startDate }}</p>
            <p><strong>Date de Retour Prévue:</strong> {{ loan.dueDate }}</p>
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
  loan: Object,
  isEditing: Boolean
});

const emit = defineEmits(['update-loan', 'close']);

const localLoan = ref({ ...props.loan });

watch(() => props.loan, (newValue) => {
  localLoan.value = { ...newValue };
});

const submitUpdate = () => {
  emit('update-loan', localLoan.value);
  emit('close');
};
</script>
