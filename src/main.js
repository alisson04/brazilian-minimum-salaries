import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
