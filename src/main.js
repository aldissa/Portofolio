import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import Home from './components/Home.vue'

const app = createApp(App)

app.use(router)

app.component('Home', Home)

app.mount('#app')
