import AppointmentRoutes from "./Appointment"; // importing appointment children routes
import SettingRoutes from "./Setting";
const DashboardRoutes = [
  {
    // router group for all the dashboard views
    path: "/dashboardmain",
    name: "dashboard",
    component: () => import("../../components/Pages/DashBoard/IndexMain.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
          import("../../components/Pages/DashBoard/Home/DashBoard.vue"),
        props: { sidebar: true },
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
        props: { sidebar: true },
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
        path: "/questions",
        name: "Questions",
        component: () =>
          import(
            "../../components/Pages/DashBoard/PatientQuestionaries/PatientQuestionaries.vue"
          ),
      },

      {
        path: "/health-status",
        name: "HealthStatus",
        component: () =>
          import(
            "../../components/Pages/DashBoard/PatientHealth/PatientHealth.vue"
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
    ],
  },
];

export default DashboardRoutes;
