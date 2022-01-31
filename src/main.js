import { createApp } from 'vue'
import App from './App.vue'
import router from '/src/router.js'
import store from './store'
import VueLocalStorage from 'vue-localstorage'



createApp(App).use(router).use(store).use(VueLocalStorage).mount('#app')

