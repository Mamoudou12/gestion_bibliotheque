<template>
  <div class="container mt-5">
    <h1 class="mb-4">Gestion des Livres</h1>
    
    <div class="d-flex justify-content-between mb-4">
      <button class="btn btn-primary" @click="toggleAddBookForm">
        {{ showAddBookForm ? 'Annuler' : 'Ajouter un livre' }}
      </button>
    </div>

    <AddBookForm
      v-if="showAddBookForm"
      :newBook="newBook"
      @add-book="addBook"
      @cancel="toggleAddBookForm"
    />

    <BookList
      :books="books"
      @view-book="viewBook"
      @edit-book="editBook"
      @delete-book="deleteBook"
    />

    <BookModal
      v-if="currentBook"
      :book="currentBook"
      :isEditing="isEditing"
      @update-book="updateBook"
      @close="currentBook = null"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddBookForm from './AddBook.vue';
import BookList from './BookList.vue';
import BookModal from './BookModal.vue';

const books = ref([
  { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
]);

const showAddBookForm = ref(false);
const newBook = ref({ title: '', author: '', genre: '' });
const currentBook = ref(null);
const isEditing = ref(false);

const toggleAddBookForm = () => {
  showAddBookForm.value = !showAddBookForm.value;
};

const addBook = (book) => {
  if (book.title && book.author && book.genre) {
    books.value.push({
      id: books.value.length + 1,
      ...book,
    });
    newBook.value = { title: '', author: '', genre: '' };
    showAddBookForm.value = false;
  }
};

const viewBook = (id) => {
  const book = books.value.find(b => b.id === id);
  if (book) {
    currentBook.value = { ...book };
    isEditing.value = false;
  }
};

const editBook = (id) => {
  const book = books.value.find(b => b.id === id);
  if (book) {
    currentBook.value = { ...book };
    isEditing.value = true;
  }
};

const updateBook = (updatedBook) => {
  const index = books.value.findIndex(b => b.id === updatedBook.id);
  if (index !== -1) {
    books.value[index] = { ...updatedBook };
    currentBook.value = null;
  }
};

const deleteBook = (id) => {
  books.value = books.value.filter(book => book.id !== id);
};
</script>
