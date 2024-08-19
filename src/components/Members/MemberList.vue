<template>
  <div>
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
  </div>
</template>

<script setup>
defineProps(['members', 'viewMember', 'editMember', 'deleteMember']);
</script>
