import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// required style for leaflet map plugin
import 'leaflet/dist/leaflet.css'
// import main css
import './assets/css/index.css'
import 'leaflet'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
