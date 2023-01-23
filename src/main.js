import { createApp } from "vue";
import App from "./App.vue";

import router from "./router"; // importing router
// importing login component
// const LoginCard = defineAsyncComponent(() =>
//   import("./components/Layout/Login/LoginCard.vue")
// );
import LoginCard from "./components/Layout/Login/LoginCard.vue";
// const LogoArea = defineAsyncComponent(() =>
//   import("./components/Layout/Login/LogoArea.vue")
// );
import LogoArea from "./components/Layout/Login/LogoArea.vue";
// const BackButton = defineAsyncComponent(() =>
//   import("./components/Layout/Login/BackButton.vue")
// );
import BackButton from "./components/Layout/Login/BackButton.vue";

// importing Layout component
// const PageWrapper = defineAsyncComponent(() =>
//   import("./components/Layout/Common/PageWrapper.vue")
// );
import PageWrapper from "./components/Layout/Common/PageWrapper.vue";
// const MainCard = defineAsyncComponent(() =>
//   import("./components/Layout/Common/UI/MainCard.vue")
// );
import MainCard from "./components/Layout/Common/UI/MainCard.vue";
// const MainHeading = defineAsyncComponent(() =>
//   import("./components/Layout/Common/UI/MainHeading.vue")
// );
import MainHeading from "./components/Layout/Common/UI/MainHeading.vue";
// const MainButton = defineAsyncComponent(() =>
//   import("./components/Layout/Common/UI/MainButton.vue")
// );
import MainButton from "./components/Layout/Common/UI/MainButton.vue";
// const MainIcon = defineAsyncComponent(() =>
//   import("./components/Layout/Common/UI/MainIcon.vue")
// );
import MainIcon from "./components/Layout/Common/UI/MainIcon.vue";
import SmallText from "./components/Layout/Common/UI/SmallText.vue";
// importing iconnify icons
import { Icon } from "@iconify/vue";
//importing appointment component
// const AppointmentSidbar = defineAsyncComponent(() =>
//   import("./components/Layout/Common/AppointmentSidebar.vue")
// );
import AppointmentSidbar from "./components/Layout/Common/AppointmentSidebar.vue";
// adding v-calndar
import VCalendar from "v-calendar";
import "v-calendar/dist/style.css";

const app = createApp(App);

app.use(router);
app.use(VCalendar);
// registering layout components
app.component("page-wrapper", PageWrapper);
app.component("main-card", MainCard);
app.component("main-heading", MainHeading);
app.component("main-button", MainButton);
app.component("main-icon", MainIcon);
app.component("small-text", SmallText);

app.component("appointment-sidebar", AppointmentSidbar); // register appointment component

app.component("login-card", LoginCard); // Login card component for Base card in all the login screens
app.component("logo-area", LogoArea); // adding logo
app.component("back-button", BackButton); // back component for adding backbutton

app.component("iconify-icon", Icon); // component for iconify icons

app.mount("#app");
