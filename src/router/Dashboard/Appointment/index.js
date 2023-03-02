const AppointmentRoutes = [
  {
    path: "/appointments",
    name: "PatientAppointmentsData",
    component: () =>
      import(
        "@/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentSearchResult.vue"
      ),
  },
  {
    path: "/appointments/choose-date",
    name: "PatientAppointmentsChooseDate",
    component: () =>
      import(
        "@/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentChooseDate.vue"
      ),
  },
  {
    path: "/appointments/choose-time",
    name: "PatientAppointmentChooseTime",
    component: () =>
      import(
        "@/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentChooseTime.vue"
      ),
  },
  {
    path: "/appointments/successfull",
    name: "PatientAppointmentDone",
    component: () =>
      import(
        "@/Pages/DashBoard/PatientAppointment/Children/PatientAppointmentSuccessfull.vue"
      ),
  },
];
export default AppointmentRoutes;
