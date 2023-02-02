import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

import Dashboard from "../components/Pages/DashBoard/Home/DashBoard.vue";
// const Dashboard = defineAsyncComponent(() =>
//   import("../components/Pages/DashBoard/DashBoard.vue")
// );
import Anfragen from "../components/Pages/DashBoard/Anfragen/AnfRagen.vue";
// const Anfragen = defineAsyncComponent(() =>
//   import("../components/Pages/DashBoard/AnfRagen.vue")
// );
import PatientHealth from "../components/Pages/DashBoard/PatientHealth/PatientHealth.vue";
import PatientDiagnosticCenter from "../components/Pages/DashBoard/PatientDiagnostic/PatientDiagnosticCenter.vue";
import PatientVaccination from "../components/Pages/DashBoard/PatientVaccination/PatientVaccination.vue";
const Sidebar = defineAsyncComponent(() =>
  import("../components/Layout/Common/AppointmentSidebar.vue")
);
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
      component: defineAsyncComponent(() =>
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
      path: "/dashboardmain",
      name: "dashboard",
      component: () => import("../components/Pages/DashBoard/IndexMain.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          components: {
            default: Dashboard,
            sidebar: Sidebar,
          },
          props: { sidebar: true },
        },
        // router for appointments
        {
          path: "/appointments",
          name: "PatientAppoinetments",
          redirect: { name: "PatientAppointmentsData" },
          components: {
            default: () =>
              import(
                "../components/Pages/DashBoard/PatientAppointment/PatientAppointment.vue"
              ),
            sidebar: Sidebar,
          },
          props: { sidebar: true },
          children: [
            {
              path: "/appointments",
              name: "PatientAppointmentsData",
              component: () =>
                import(
                  "../components/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentSearchResult.vue"
                ),
            },
            {
              path: "/appointments/choose-date",
              name: "PatientAppointmentsChooseDate",
              component: () =>
                import(
                  "../components/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentChooseDate.vue"
                ),
            },
            {
              path: "/appointments/choose-time",
              name: "PatientAppointmentChooseTime",
              component: () =>
                import(
                  "../components/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentChooseTime.vue"
                ),
            },
          ],
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
            import("../components/Pages/DashBoard/PatientChat/PatientChat.vue")
          ),
          // children group for chat page
          children: [
            {
              path: "/chat/:name",
              name: "chatMessages",
              component: defineAsyncComponent(() =>
                import(
                  "../components/Pages/DashBoard/PatientChat/Children/PatientChatmessages.vue"
                )
              ),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
