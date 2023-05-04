import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'animate.css'

axios.defaults.baseURL = 'http://localhost:127.0.0.1:8000'
window.$ = window.jQuery = window.jquery = require("jquery");

createApp(App).use(store).use(router,axios).mount('#app')
