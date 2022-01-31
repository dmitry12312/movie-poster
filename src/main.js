import { createApp } from 'vue'
import App from './App.vue'
import router from '/src/router.js'
import store from './store'
import VueLocalStorage from 'vue-localstorage'
import axios from 'axios'
import VueAxios from 'vue-axios'


createApp(App).use(router).use(store).use(VueLocalStorage).use(VueAxios, axios).mount('#app')

