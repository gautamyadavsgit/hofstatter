import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // importing router
// importing login component
import LoginCard from './components/Layout/Login/LoginCard.vue'
import LogoArea from './components/Layout/Login/LogoArea.vue'
import BackButton from './components/Layout/Login/BackButton.vue'
import { Icon } from '@iconify/vue'
// importing font awesome library for the icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faLongArrowAltLeft) // exporting fonts for using globally

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon) // adding the font awesome component
app.component('login-card', LoginCard) // Login card component for Base card in all the login screens
app.component('logo-area', LogoArea) // adding logo
app.component('back-button', BackButton) // back component for adding backbutton
app.component('iconify-icon', Icon) // component for iconify icons
app.mount('#app')
