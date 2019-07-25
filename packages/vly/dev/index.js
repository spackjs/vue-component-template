import Vue from 'vue'
import App from './App'
import Vly from 'vly'
import * as locales from '../src/locale'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.performance = true

Vue.use(Vly)

const vly = new Vly({
  lang: {
    locales,
  },
})

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  vly,
  router,
  render (h) {
    return this.isLoaded ? h(App) : undefined
  },
}).$mount('#app')

// Prevent layout jump while waiting for styles
vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
})
