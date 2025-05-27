import { createRouter, createWebHistory } from 'vue-router'

import ShopView from '../views/shopView.vue'
import CartView from '../views/CartView.vue'
import AdminView from '../views/AdminView.vue'
import AddProductView from '../views/AddProductView.vue'

const routes = [
    { path: '/', redirect: '/shop' },
  { path: '/shop', component: ShopView },
  { path: '/cart', component: CartView },
  { path: '/admin', component: AdminView },
  { path: '/admin/add', component: AddProductView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router