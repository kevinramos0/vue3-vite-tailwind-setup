import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdMenu, MdLogin, FaUsers, FaUser, FaAngleDown } from 'oh-vue-icons/icons'
import './assets/tailwind.css'

addIcons(MdMenu, MdLogin, FaUsers, FaUser, FaAngleDown)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('v-icon', OhVueIcon)

app.mount('#app')
