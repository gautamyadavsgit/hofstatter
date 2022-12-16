import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LoginCard from "./components/UI/LoginCard.vue";
import LoginButton from "./components/UI/LoginButton.vue";
import LogoArea from "./components/UI/LogoArea.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";


const app = createApp(App);

library.add(faLongArrowAltLeft);

app.use(router); 
app.component("font-awesome-icon",FontAwesomeIcon); // adding the font awesome component 
app.component("login-card", LoginCard); // Login card component for Base card in all the login screens
app.component('logo-area',LogoArea);
app.component("login-button", LoginButton); // Login button for using it different form pages


app.mount("#app");
