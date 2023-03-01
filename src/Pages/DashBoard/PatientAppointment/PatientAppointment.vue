<template>
  <!-- adding a sidebar prop in page wrapper to show a side bar area in main page -->

  <div class="grid grid-cols-12 md:px-1 lg:px-0">
    <!-- first box started -->
    <div class="col-span-12">
      <!-- custom style prop for adding custom classes in maincard -->
      <main-card customStyle="md:mt-[3.5rem]">
        <div class="mb-3">
          <main-heading>{{ $t("Book an appointment") }}</main-heading>
          <!-- filter form for selecting the type of Appointment -->
          <PatientAppointmentTypeForm />
        </div>
      </main-card>
    </div>
    <!-- Appointment search form and search result area -->
    <router-view v-slot="slotProps">
      <Transition name="fade">
        <component :is="slotProps.Component"></component>
      </Transition>
    </router-view>
  </div>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
