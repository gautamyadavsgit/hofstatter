import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LoginCard from './components/UI/LoginCard.vue'
import LogoArea from './components/UI/LogoArea.vue'
import BackButton from './components/UI/Login/BackButton.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faLongArrowAltLeft)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon) // adding the font awesome component
app.component('login-card', LoginCard) // Login card component for Base card in all the login screens
app.component('logo-area', LogoArea)
app.component('back-button', BackButton)

app.mount('#app')
