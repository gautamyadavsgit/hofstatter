<template>
  <!-- adding a sidebar prop in page wrapper to show a side bar area in main page -->
  <page-wrapper sidebar>
    <div class="grid grid-cols-12">
      <!-- first box started -->
      <div class="col-span-12">
        <!-- custom style prop for adding custom classes in maincard -->
        <main-card customStyle="md:mt-[3.5rem]">
          <div class="mb-3">
            <main-heading>Termin Buchen</main-heading>
            <!-- filter form for selecting the type of Appointment -->
            <PatientAppointmentTypeForm />
          </div>
        </main-card>
      </div>
      <!-- Appointment search form and search result area -->
      <router-view />
    </div>
    <!-- template for sidebar adding a sidebar prop for identify -->
    <template #sidebar>
      <!-- appointment sidebar component registered in main js -->
      <appointment-sidebar />
    </template>
  </page-wrapper>
</template>
<script>
// importing filter form
import PatientAppointmentTypeForm from "./Children/PatientAppointmentTypeForm.vue";

export default {
  components: {
    PatientAppointmentTypeForm,
  },
};
</script>
