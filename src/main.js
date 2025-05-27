import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia' // 👈 uvoz Pinie

const app = createApp(App)

app.use(createPinia()) // 👈 registracija Pinie
app.use(router)

app.mount('#app')
