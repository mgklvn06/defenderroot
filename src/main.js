import { createApp } from 'vue'
import { initSmoothScroll } from './plugins/scroll'
import AOS from 'aos'
import App from './App.vue'
import './index.css'
import router from './router/index.js'


initSmoothScroll()
const app = createApp(App)
app.use(router)
app.mount('#app')

AOS.init({
  duration: 600,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  once: true,
  offset: 120
})

router.afterEach(() => {
  requestAnimationFrame(() => {
    AOS.refresh()
  })
})
