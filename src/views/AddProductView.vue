<template>
  <div>
    <button @click="$router.back()">← Natrag</button>
    <h1>Dodaj proizvod</h1>
    <form @submit.prevent="add">
      <input v-model="name" placeholder="Naziv" required />
      <input v-model.number="price" placeholder="Cijena" type="number" step="0.01" required />
      <input v-model="image" placeholder="URL slike" required />
      <button type="submit">Dodaj proizvod</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useShopStore } from '../stores/shop'

const store = useShopStore()
const router = useRouter()

const name = ref('Lubenica')
const price = ref(4.35)
const image = ref('https://img.jelposkupilo.eu/?id=lubenica-mini')

function add() {
  store.addProduct({ name: name.value, price: price.value, image: image.value })
  router.push('/shop')
}
</script>
