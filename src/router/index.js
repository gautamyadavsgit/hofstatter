import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

import Dashboard from "../components/Pages/DashBoard/Childrens/DashBoard.vue";
// const Dashboard = defineAsyncComponent(() =>
//   import("../components/Pages/DashBoard/DashBoard.vue")
// );
import Anfragen from "../components/Pages/DashBoard/Childrens/AnfRagen.vue";
// const Anfragen = defineAsyncComponent(() =>
//   import("../components/Pages/DashBoard/AnfRagen.vue")
// );
import PatientHealth from "../components/Pages/DashBoard/Childrens/PatientHealth.vue";
import PatientDiagnosticCenter from "../components/Pages/DashBoard/Childrens/PatientDiagnosticCenter.vue";
import PatientVaccination from "../components/Pages/DashBoard/Childrens/PatientVaccination.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      // redirecting the root to the login welcome page
      redirect: { name: "login" },
    },
    {
      // creating a group path for all the login pages
      path: "/login",
      name: "login",
      redirect: { name: "welcome" },
      components: defineAsyncComponent(() =>
        import("../components/Pages/Login/LoginMain.vue")
      ),
      children: [
        {
          path: "/welcome",
          name: "welcome",
          component: () =>
            import("../components/Pages/Login/Childrens/WelCome.vue"),
        },
        {
          path: "/austria-login",
          name: "austria-login",
          component: () =>
            import("../components/Pages/Login/Childrens/AustriaLogin.vue"),
        },
        {
          path: "/sms-login",
          name: "sms-login",
          component: () =>
            import("../components/Pages/Login/Childrens/SmsLogin.vue"),
        },
        {
          path: "/enter-tpn",
          name: "enter-tpn",
          component: () =>
            import("../components/Pages/Login/Childrens/EnterTpn.vue"),
        },
      ],
    },

    {
      // router group for all the dashboard views
      path: "/dashboard",
      name: "dashboard",
      component: defineAsyncComponent(() =>
        import("../components/Pages/DashBoard/DashboardMain.vue")
      ),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          components: {
            default: Dashboard,
            sidebar: () =>
              import("../components/Layout/Common/AppointmentSidebar.vue"),
          },
          props: { sidebar: true },
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
        {
          path: "/vaccination",
          name: "PatientVaccination",
          component: PatientVaccination,
        },
        {
          path: "/chat",
          name: "PatientChat",
          component: defineAsyncComponent(() =>
            import("../components/Pages/DashBoard/Childrens/PatientChat.vue")
          ),
        },
      ],
    },
  ],
});

export default router;
