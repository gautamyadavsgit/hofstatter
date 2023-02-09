import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {},
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
      component: () => import("../components/Pages/Login/LoginMain.vue"),
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
          component: () =>
            import("../components/Pages/DashBoard/Home/DashBoard.vue"),
          props: { sidebar: true },
        },
        // router for appointments
        {
          path: "/appointments",
          name: "PatientAppoinetments",
          redirect: { name: "PatientAppointmentsData" },
          component: () =>
            import(
              "../components/Pages/DashBoard/PatientAppointment/PatientAppointment.vue"
            ),
          props: { sidebar: true },
          // children group for appointments components
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
            {
              path: "/appointments/successfull",
              name: "PatientAppointmentDone",
              component: () =>
                import(
                  "../components/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentSuccessfull.vue"
                ),
            },
          ],
        },
        {
          path: "/requests",
          name: "Requests",
          component: () =>
            import(
              "../components/Pages/DashBoard/PatientRequests/PatientRequest.vue"
            ),
        },
        {
          path: "/medications",
          name: "Medications",
          component: () =>
            import(
              "../components/Pages/DashBoard/PatientMedication/PatientMedication.vue"
            ),
        },

        {
          path: "/questions",
          name: "Questions",
          component: () =>
            import(
              "../components/Pages/DashBoard/PatientQuestionaries/PatientQuestionaries.vue"
            ),
        },

        {
          path: "/health-status",
          name: "HealthStatus",
          component: () =>
            import(
              "../components/Pages/DashBoard/PatientHealth/PatientHealth.vue"
            ),
        },
        {
          path: "/diagnostic-center",
          name: "PatientDiagnosticCenter",
          component: () =>
            import(
              "../components/Pages/DashBoard/PatientDiagnostic/PatientDiagnosticCenter.vue"
            ),
        },
        {
          path: "/vaccination",
          name: "PatientVaccination",
          component: () =>
            import(
              "../components/Pages/DashBoard/PatientVaccination/PatientVaccination.vue"
            ),
        },
        {
          path: "/chat",
          name: "PatientChat",
          redirect: { path: "/chat/gautam" },
          component: () =>
            import("../components/Pages/DashBoard/PatientChat/PatientChat.vue"),
          // children group for chat page
          children: [
            {
              path: "/chat/:name",
              name: "chatMessages",
              component: () =>
                import(
                  "../components/Pages/DashBoard/PatientChat/Children/PatientChatmessages.vue"
                ),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
