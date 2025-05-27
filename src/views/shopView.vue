<template>
  <div>
    <h1>Trgovina</h1>
    <div v-for="(product, i) in store.products" :key="i">
      <img :src="product.image" :alt="product.name" />
      <p>{{ product.name }} - {{ product.price }} €</p>
      <button @click="store.addToCart(product)">Dodaj u košaricu</button>
    </div>
  </div>
</template>

<script setup>
import { useShopStore } from '../stores/shop'
const store = useShopStore()
</script>
