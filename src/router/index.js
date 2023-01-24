import { createRouter, createWebHistory } from "vue-router";

import WelCome from "../components/Pages/Login/WelCome.vue";
// const WelCome = defineAsyncComponent(() =>
//   import("../components/Pages/Login/WelCome.vue")
// );
import AustriaLogin from "../components/Pages/Login/AustriaLogin.vue";
// const AustriaLogin = defineAsyncComponent(() =>
//   import("../components/Pages/Login/AustriaLogin.vue")
// );
import SmsLogin from "../components/Pages/Login/SmsLogin.vue";
// const SmsLogin = defineAsyncComponent(() =>
//   import("../components/Pages/Login/SmsLogin.vue")
// );
import EnterTpn from "../components/Pages/Login/EnterTpn.vue";
// const EnterTpn = defineAsyncComponent(() =>
//   import("../components/Pages/Login/EnterTpn.vue")
// );
import Dashboard from "../components/Pages/DashBoard/DashBoard.vue";
// const Dashboard = defineAsyncComponent(() =>
//   import("../components/Pages/DashBoard/DashBoard.vue")
// );
import Anfragen from "../components/Pages/DashBoard/AnfRagen.vue";
// const Anfragen = defineAsyncComponent(() =>
//   import("../components/Pages/DashBoard/AnfRagen.vue")
// );
import PatientHealth from "../components/Pages/DashBoard/PatientHealth.vue";
import PatientDiagnosticCenter from "../components/Pages/DashBoard/PatientDiagnosticCenter.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: WelCome,
    },
    {
      path: "/austria-login",
      name: "austria-login",
      component: AustriaLogin,
    },
    {
      path: "/sms-login",
      name: "sms-login",
      component: SmsLogin,
    },
    {
      path: "/enter-tpn",
      name: "enter-tpn",
      component: EnterTpn,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/anfragen",
      name: "Anfragen",
      component: Anfragen,
    },
    {
      path: "/health-status",
      name: "HealthStatus",
      component: PatientHealth,
    },
    {
      path: "/diagnostic-center",
      name: "PatientDiagnosticCenter",
      component: PatientDiagnosticCenter,
    },
  ],
});

export default router;
