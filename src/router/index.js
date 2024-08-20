// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import BooksManager from '@/components/Books/BooksManager.vue';
import MembersPage from '@/components/Members/MembersPage.vue';
import LoanManager from '@/components/Loans/LoanManager.vue';

const routes = [
  {
    path: '/',
    redirect: '/books',
  },
  {
    path: '/books',
    name: 'books',
    component: BooksManager
  },
  {
    path: '/members',
    name: 'members',
    component: MembersPage  // Remplacez par le composant correspondant
  },
  {
    path: '/loans',
    name: 'loans',
    component: LoanManager  // Remplacez par le composant correspondant
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
