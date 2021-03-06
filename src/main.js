import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.mount('#app')
