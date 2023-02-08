<template>
  <div>
    <div class="main-card md:hidden !py-5">
      <div class="flex justify-between items-center">
        <main-heading>Medikation</main-heading>
        <button class="px-3">
          <main-icon icon="material-symbols:add"></main-icon>
        </button>
      </div>
    </div>
    <h4 class="text-lg text-blue mt-1">Aktuelle</h4>

    <div id="accordion-collapse" data-accordion="collapse">
      <PatientMedicationBox
        :id="1"
        icon="quill:paper"
        :refill="1"
        title="Vitamin D 1000UI Tablet"
      />
      <PatientMedicationBox
        :id="2"
        icon="healthicons:syringe-outline"
        :refill="1"
        title="Vitamin D 1000UI Tablet"
      />

      <PatientMedicationBox
        :id="3"
        icon="quill:paper"
        :refill="3"
        title="Lorsartan 50mg  Tablet"
      />
      <h4 class="text-lg text-blue mt-1">Bedarf</h4>
      <PatientMedicationBox
        :id="4"
        icon="quill:paper"
        :refill="1"
        title="Minomycin 20mg Tablet"
      />
      <h4 class="text-lg text-blue mt-1">Abgelaufen</h4>
      <PatientMedicationBox
        :id="5"
        icon="quill:paper"
        :refill="1"
        title="Hydrocortisol 2.5mg Ointment"
        :expired="true"
      />
    </div>
  </div>
</template>
<script>
import PatientMedicationBox from "./PatientMedicationDetailAreaBox.vue";
export default {
  components: {
    PatientMedicationBox,
  },
};
</script>
