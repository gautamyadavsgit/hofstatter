import { createApp } from "vue";
import App from "./App.vue";

import router from "./router"; // importing router
// importing login component

import BackButton from "./components/Layout/Login/BackButton.vue";
import PageWrapper from "./components/Layout/Common/PageWrapper.vue";
import MainCard from "./components/Layout/Common/UI/MainCard.vue";
import MainHeading from "./components/Layout/Common/UI/MainHeading.vue";
import MainButton from "./components/Layout/Common/UI/MainButton.vue";
import MainIcon from "./components/Layout/Common/UI/MainIcon.vue";
import SmallText from "./components/Layout/Common/UI/SmallText.vue";
// importing iconnify icons
import { Icon } from "@iconify/vue";
import AppointmentSidbar from "./components/Layout/Common/AppointmentSidebar.vue";
// adding v-calndar
import VCalendar from "v-calendar";
import "v-calendar/dist/style.css";

// importing sweetalert
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.use(router);
app.use(VCalendar);
app.use(VueSweetalert2);
// registering layout components
app.component("page-wrapper", PageWrapper);
app.component("main-card", MainCard);
app.component("main-heading", MainHeading);
app.component("main-button", MainButton);
app.component("main-icon", MainIcon);
app.component("small-text", SmallText);

app.component("appointment-sidebar", AppointmentSidbar); // register appointment component

app.component("back-button", BackButton); // back component for adding backbutton

app.component("iconify-icon", Icon); // component for iconify icons

app.mount("#app");
