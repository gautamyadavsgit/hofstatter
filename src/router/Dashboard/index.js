import AppointmentRoutes from "./Appointment"; // importing appointment children routes
import SettingRoutes from "./Setting";
import store from "@/store/store";
const DashboardRoutes = [
  {
    // router group for all the dashboard views
    path: "/dashboardMain",
    name: "dashboardMain",
    redirect: { name: 'dashboard' },
    component: () => import("../../components/Pages/DashBoard/IndexMain.vue"),
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
          import("../../components/Pages/DashBoard/Home/DashBoard.vue"),
        meta: { sidebar: true },
      },
      // router for appointments
      {
        path: "/appointments",
        name: "PatientAppoinetments",
        redirect: { name: "PatientAppointmentsData" },
        component: () =>
          import(
            "../../components/Pages/DashBoard/PatientAppointment/PatientAppointment.vue"
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
            "../../components/Pages/DashBoard/PatientRequests/PatientRequest.vue"
          ),
      },
      {
        path: "/medications",
        name: "Medications",
        component: () =>
          import(
            "../../components/Pages/DashBoard/PatientMedication/PatientMedication.vue"
          ),
      },
      {
        path: "/healthstatus",
        name: "HealthStatus",
        component: () =>
          import(
            "@/components/Pages/DashBoard/PatientHealth/PatientHealth.vue"
          ),
      },

      {
        path: "/questions",
        name: "Questions",
        component: () =>
          import(
            "../../components/Pages/DashBoard/PatientQuestionaries/PatientQuestionaries.vue"
          ),
      },   
      {
        path: "/diagnostic-center",
        name: "PatientDiagnosticCenter",
        component: () =>
          import(
            "../../components/Pages/DashBoard/PatientDiagnostic/PatientDiagnosticCenter.vue"
          ),
      },
      {
        path: "/vaccination",
        name: "PatientVaccination",
        component: () =>
          import(
            "../../components/Pages/DashBoard/PatientVaccination/PatientVaccination.vue"
          ),
      },
      {
        path: "/setting",
        name: "Setting",
        redirect: { name: "AccountSetting" },
        component: () =>
          import("@/components/Pages/DashBoard/Setting/SettingIndex.vue"),
        children: [...SettingRoutes],
      },
      {
        path: "/chat",
        name: "PatientChat",
        redirect: { path: "/chat/gautam" },
        component: () =>
          import(
            "../../components/Pages/DashBoard/PatientChat/PatientChat.vue"
          ),
        // children group for chat page
        children: [
          {
            path: "/chat/:name",
            name: "chatMessages",
            component: () =>
              import(
                "../../components/Pages/DashBoard/PatientChat/Children/PatientChatmessages.vue"
              ),
          },
        ],
      },
      {
        path: "/access-log",
        name: "AccessLog",
        component: () =>
          import("@/components/Pages/DashBoard/AccessLog/AccessLog.vue"),
      },
      {
        path: "/my-profile",
        name: "MyProfile",
        component: () =>
          import("@/components/Pages/DashBoard/MyProfile/MyProfile.vue"),
        meta: { sidebar: true },
      },
    ],
  },
];

export default DashboardRoutes;
