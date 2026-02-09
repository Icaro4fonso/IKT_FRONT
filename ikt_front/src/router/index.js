import { createRouter, createWebHistory } from 'vue-router'
import SalesView from '../views/SalesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sales',
      name: 'sales',
      component: SalesView
    },
    {
      path: '/sales/import',
      name: 'import-records',
      component: () => import('../views/ImportRecordsView.vue')
    },
    {
      path: '/sales/top-months',
      name: 'top-months',
      component: () => import('../views/TopMonthsView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/',
      redirect: '/sales'
    }
  ]
})

export default router