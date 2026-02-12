import { createApp } from 'vue'
import { initSmoothScroll } from './plugins/scroll'
import AOS from 'aos'
import App from './App.vue'
import './index.css'
import router from './router/index.js'


const lenis = initSmoothScroll()
const app = createApp(App)
app.use(router)
app.mount('#app')

AOS.init({
  duration: 600,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  once: true,
  offset: 120
})

document.body.classList.add('aos-ready')

if (lenis && typeof lenis.on === 'function') {
  lenis.on('scroll', () => {
    AOS.refresh()
    window.dispatchEvent(new Event('scroll'))
  })
}

router.afterEach(() => {
  requestAnimationFrame(() => {
    AOS.refresh()
  })
})
