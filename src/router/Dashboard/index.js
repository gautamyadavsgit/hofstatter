import AppointmentRoutes from "./Appointment"; // importing appointment children routes
import SettingRoutes from "./Setting"; // importing setting children route
import store from "@/store/store";
const DashboardRoutes = [
  {
    // router group for all the dashboard views
    path: "/dashboardMain",
    name: "dashboardMain",
    redirect: { name: 'dashboard' },
    component: () => import("@/Pages/DashBoard/IndexMain.vue"),
    beforeEnter: (_, _2, next) => {
      if (store.state.login.isLoggedIn) {
        next();
      } else {
        next("/login");
      }
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
          import("@/Pages/DashBoard/Home/DashBoard.vue"),
        meta: { sidebar: true },
      },
      // router for appointments
      {
        path: "/appointments",
        name: "PatientAppoinetments",
        redirect: { name: "PatientAppointmentsData" },
        component: () =>
          import(
            "@/Pages/DashBoard/PatientAppointment/PatientAppointment.vue"
          ),
        meta: { sidebar: true },
        // children group for appointments components
        children: [...AppointmentRoutes],
      },
      {
        path: "/requests",
        name: "Requests",
        component: () =>
          import(
            "@/Pages/DashBoard/PatientRequests/PatientRequest.vue"
          ),
      },
      {
        path: "/medications",
        name: "Medications",
        component: () =>
          import(
            "@/Pages/DashBoard/PatientMedication/PatientMedication.vue"
          ),
      },
      {
        path: "/health-status",
        name: "HealthStatus",
        component: () =>
          import(
            "@/Pages/DashBoard/PatientHealth/PatientHealth.vue"
          ),
      },

      {
        path: "/questions",
        name: "Questions",
        component: () =>
          import(
            "@/Pages/DashBoard/PatientQuestionaries/PatientQuestionaries.vue"
          ),
      },   
      {
        path: "/diagnostic-center",
        name: "PatientDiagnosticCenter",
        component: () =>
          import(
            "@/Pages/DashBoard/PatientDiagnostic/PatientDiagnosticCenter.vue"
          ),
      },
      {
        path: "/vaccination",
        name: "PatientVaccination",
        component: () =>
          import(
            "@/Pages/DashBoard/PatientVaccination/PatientVaccination.vue"
          ),
      },
      {
        path: "/setting",
        name: "Setting",
        redirect: { name: "AccountSetting" },
        component: () =>
          import("@/Pages/DashBoard/Setting/SettingIndex.vue"),
        children: [...SettingRoutes],
      },
      {
        path: "/chat",
        name: "PatientChat",
        component: () =>
          import(
            "@/Pages/DashBoard/PatientChat/PatientChat.vue"
          ),
        // children group for chat page
        children: [
          {
            path: "/chat/:name",
            name: "chatMessages",
            component: () =>
              import(
                "@/Pages/DashBoard/PatientChat/Children/PatientChatmessages.vue"
              ),
          },
        ],
      },
      {
        path: "/access-log",
        name: "AccessLog",
        component: () =>
          import("@/Pages/DashBoard/AccessLog/AccessLog.vue"),
      },
      {
        path: "/my-profile",
        name: "MyProfile",
        component: () =>
          import("@/Pages/DashBoard/MyProfile/MyProfile.vue"),
        meta: { sidebar: true },
      },
    ],
  },
];

export default DashboardRoutes;
