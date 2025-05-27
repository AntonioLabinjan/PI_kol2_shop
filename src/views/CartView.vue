<template>
  <div>
    <h1>Košarica</h1>
    <div v-for="(product, i) in store.cart" :key="i">
      <p>{{ product.name }} - {{ product.price }} €</p>
      <button @click="store.removeFromCart(i)">Ukloni</button>
    </div>
    <p>Ukupno: {{ totalPrice.toFixed(2) }} €</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useShopStore } from '../stores/shop'
const store = useShopStore()

const totalPrice = computed(() =>
  store.cart.reduce((acc, p) => acc + p.price, 0)
)
</script>
