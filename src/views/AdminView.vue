<template>
  <div>
    <h1>Admin</h1>
    <router-link to="/admin/add">➕ Dodaj novi proizvod</router-link>
    <div v-for="(product, i) in store.products" :key="i">
      <p>{{ product.name }} - {{ product.price }} €</p>
      <button @click="store.removeProduct(i)">Obriši</button>
    </div>
  </div>
</template>

<script setup>
import { useShopStore } from '../stores/shop'
const store = useShopStore()
</script>
