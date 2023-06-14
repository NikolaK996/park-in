import { createApp } from 'vue'

import { createPinia } from 'pinia'
import Vue3Toasity from 'vue3-toastify'

import App from './App.vue'
import router from './router'
import { firebaseApp } from './services/firebase'

import { createLanguagePlugin } from '@/plugins/languages'

// required style for leaflet map plugin
import 'leaflet/dist/leaflet.css'
// Vue Toast plugin for notifications
import 'vue3-toastify/dist/index.css'
// styling
import './assets/css/index.scss'
import 'leaflet'
// Vue Firebase package
// eslint-disable-next-line import/order
import { VueFire, VueFireAuth } from 'vuefire'

// plugin that enables different languages

const app = createApp(App)

app.use(Vue3Toasity, { position: 'bottom-right' })
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})
app.use(createPinia())
app.use(router)
app.use(createLanguagePlugin())

app.mount('#app')
