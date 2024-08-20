<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
// import BooksManager from './components/Books/BooksManager.vue'
//  import LoanManager from './components/Loans/LoanManager.vue'
//  import MembersPage from './components/Members/MembersPage.vue'
</script>

<template>
  <Header/>
  <LoanManager/>
  <BooksManager/> 
  <MembersPage/>
  <router-view/>

</template>

<style scoped>

</style>
