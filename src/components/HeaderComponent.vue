<template>
  <header>
    <nav>
      <router-link to="/shop" :class="{ active: route.path.startsWith('/shop') }">Trgovina</router-link>
      <router-link to="/admin" :class="{ active: route.path.startsWith('/admin') }">Admin</router-link>
      <router-link to="/cart" :class="{ active: route.path.startsWith('/cart') }">
        Košarica ({{ store.cart.length }})
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useShopStore } from '../stores/shop'

const route = useRoute()
const store = useShopStore()
</script>

<style scoped>
.active {
  color: green;
}
</style>
