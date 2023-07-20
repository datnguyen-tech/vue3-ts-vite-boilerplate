import './assets/styles/tailwind/index.css'
import forEach from 'lodash-es/forEach'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import listModule from '@/modules'
import type { ModuleInterface } from '@/types/module.types'
import type { RouteRecordRaw } from 'vue-router'

const app = createApp(App)

forEach(listModule, (module: ModuleInterface) => {
  forEach(module.router, (value: RouteRecordRaw) => {
    router.addRoute(value)
  })
})

app.use(createPinia())
app.use(router)

app.mount('#app')
