import { createRouter, createWebHistory } from 'vue-router'
import WelCome from '../components/Pages/Login/WelCome.vue'
import AustriaLogin from '../components/Pages/Login/AustriaLogin.vue'
import SmsLogin from '../components/Pages/Login/SmsLogin.vue'
import EnterTpn from '../components/Pages/Login/EnterTpn.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelCome,
    },
    {
      path: '/austria-login',
      name: '/austria-login',
      component: AustriaLogin,
    },
    {
      path: '/sms-login',
      name: '/sms-login',
      component: SmsLogin,
    },
    {
      path: '/enter-tpn',
      name: 'enter-tpn',
      component: EnterTpn,
    },
  ],
})

export default router
