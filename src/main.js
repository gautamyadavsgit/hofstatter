import { createApp } from "vue";
import App from "./App.vue";

import router from "./router"; // importing router
// importing login component
import LoginCard from "./components/Layout/Login/LoginCard.vue";
import LogoArea from "./components/Layout/Login/LogoArea.vue";
import BackButton from "./components/Layout/Login/BackButton.vue";

import { Icon } from "@iconify/vue";
// importing Layout component
import PageWrapper from "./components/Layout/Common/PageWrapper.vue";
import MainCard from "./components/Layout/Common/MainCard.vue";
import MainHeading from "./components/Layout/Common/MainHeading.vue";
import MainButton from "./components/Layout/Common/MainButton.vue";
import MainIcon from "./components/Layout/Common/MainIcon.vue";

const app = createApp(App);

app.use(router);
// registering layout components
app.component("page-wrapper", PageWrapper);
app.component("main-card", MainCard);
app.component("main-heading", MainHeading);
app.component("main-button", MainButton);
app.component("main-icon", MainIcon);

app.component("login-card", LoginCard); // Login card component for Base card in all the login screens
app.component("logo-area", LogoArea); // adding logo
app.component("back-button", BackButton); // back component for adding backbutton

app.component("iconify-icon", Icon); // component for iconify icons

app.mount("#app");
