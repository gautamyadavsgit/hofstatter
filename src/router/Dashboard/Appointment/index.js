const AppointmentRoutes = [
  {
    path: "/appointments",
    name: "PatientAppointmentsData",
    component: () =>
      import(
        "@/components/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentSearchResult.vue"
      ),
  },
  {
    path: "/appointments/choose-date",
    name: "PatientAppointmentsChooseDate",
    component: () =>
      import(
        "@/components/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentChooseDate.vue"
      ),
  },
  {
    path: "/appointments/choose-time",
    name: "PatientAppointmentChooseTime",
    component: () =>
      import(
        "@/components/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentChooseTime.vue"
      ),
  },
  {
    path: "/appointments/successfull",
    name: "PatientAppointmentDone",
    component: () =>
      import(
        "@/components/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentSuccessfull.vue"
      ),
  },
];
export default AppointmentRoutes;
