import { createApp } from "vue";
import App from "./App.vue";

import router from "./router"; // importing router
// importing login component
import vuex from "./store/store.js";
import BackButton from "./components/Layout/Login/BackButton.vue";
import MainCard from "./components/Layout/Common/UI/MainCard.vue";
import MainHeading from "./components/Layout/Common/UI/MainHeading.vue";
import MainButton from "./components/Layout/Common/UI/MainButton.vue";
import MainIcon from "./components/Layout/Common/UI/MainIcon.vue";
import SmallText from "./components/Layout/Common/UI/SmallText.vue";
// importing iconnify icons
import { Icon } from "@iconify/vue";
// adding v-calndar
import VCalendar from "v-calendar";
import "v-calendar/dist/style.css";
//importing loading plugin for overlays loading
import { LoadingPlugin } from "vue-loading-overlay";
import 'vue-loading-overlay/dist/css/index.css';
// importing sweetalert
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import i18n from "./plugins/i18n";

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(vuex);
app.use(VCalendar);
app.use(LoadingPlugin)
app.use(VueSweetalert2);
// registering layout components
app.component("main-card", MainCard);
app.component("main-heading", MainHeading);
app.component("main-button", MainButton);
app.component("main-icon", MainIcon);
app.component("small-text", SmallText);

app.component("back-button", BackButton); // back component for adding backbutton

app.component("iconify-icon", Icon); // component for iconify icons
app.mount("#app");
