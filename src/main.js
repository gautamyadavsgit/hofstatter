import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";

import router from "./router"; // importing router
// importing login component
// import LoginCard from "./components/Layout/Login/LoginCard.vue";
const LoginCard = defineAsyncComponent(() =>
  import("./components/Layout/Login/LoginCard.vue")
);
// import LogoArea from "./components/Layout/Login/LogoArea.vue";
const LogoArea = defineAsyncComponent(() =>
  import("./components/Layout/Login/LogoArea.vue")
);
// import BackButton from "./components/Layout/Login/BackButton.vue";
const BackButton = defineAsyncComponent(() =>
  import("./components/Layout/Login/BackButton.vue")
);

// importing Layout component
// import PageWrapper from "./components/Layout/Common/PageWrapper.vue";
const PageWrapper = defineAsyncComponent(() =>
  import("./components/Layout/Common/PageWrapper.vue")
);
// import MainCard from "./components/Layout/Common/UI/MainCard.vue";
const MainCard = defineAsyncComponent(() =>
  import("./components/Layout/Common/UI/MainCard.vue")
);
// import MainHeading from "./components/Layout/Common/UI/MainHeading.vue";
const MainHeading = defineAsyncComponent(() =>
  import("./components/Layout/Common/UI/MainHeading.vue")
);
// import MainButton from "./components/Layout/Common/UI/MainButton.vue";
const MainButton = defineAsyncComponent(() =>
  import("./components/Layout/Common/UI/MainButton.vue")
);
// import MainIcon from "./components/Layout/Common/UI/MainIcon.vue";
const MainIcon = defineAsyncComponent(() =>
  import("./components/Layout/Common/UI/MainIcon.vue")
);
// importing iconnify icons
import { Icon } from "@iconify/vue";
//importing appointment component
// import AppointmentSidbar from "./components/Layout/Common/AppointmentSidebar.vue";
const AppointmentSidbar = defineAsyncComponent(() =>
  import("./components/Layout/Common/AppointmentSidebar.vue")
);
// adding v-calndar
// import VCalendar from "v-calendar";
const VCalendar = defineAsyncComponent(() => import("v-calendar"));
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

app.component("appointment-sidebar", AppointmentSidbar); // register appointment component

app.component("login-card", LoginCard); // Login card component for Base card in all the login screens
app.component("logo-area", LogoArea); // adding logo
app.component("back-button", BackButton); // back component for adding backbutton

app.component("iconify-icon", Icon); // component for iconify icons

app.mount("#app");
