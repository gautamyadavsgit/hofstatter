import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LoginCard from "./components/UI/LoginCard.vue";

const app = createApp(App);

app.use(router);
app.component('login-card',LoginCard);

app.mount("#app");
