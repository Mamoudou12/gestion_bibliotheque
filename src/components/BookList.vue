<template>
    <table class="table table-striped table-bordered shadow-sm">
      <thead class="bg-secondary text-white">
        <tr>
          <th>ID</th>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Genre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.genre }}</td>
          <td>
            <button class="btn btn-info btn-sm" @click="$emit('view-book', book.id)">Voir</button>
            <button class="btn btn-warning btn-sm ms-2" @click="$emit('edit-book', book.id)">Modifier</button>
            <button class="btn btn-danger btn-sm ms-2" @click="$emit('delete-book', book.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  const props = defineProps({
    books: Array
  });
  </script>
  