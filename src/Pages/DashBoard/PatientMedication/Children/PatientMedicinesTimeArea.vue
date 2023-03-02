<template>
  <div>
    <main-card class="lg:hidden !py-5">
      <div class="flex justify-between items-center">
        <!-- getStringDate computed propery to show date in string -->
        <main-heading>{{ date }}</main-heading>
        <div class="flex items-center">
          <!-- buttons for changing date by plus 1 and minus 1 -->
          <button class="px-3" @click="ChangeOneDay('-')">
            <iconify-icon
              icon="octicon:chevron-left-16"
              class="text-[24px]"
            ></iconify-icon>
          </button>
          <button class="px-3" @click="ChangeOneDay('+')">
            <iconify-icon
              icon="octicon:chevron-right-16"
              class="text-[24px]"
            ></iconify-icon>
          </button>
        </div>
      </div>
    </main-card>
    <h4 class="text-lg text-blue mt-1">{{ $t("Morning") }}</h4>
    <ul>
      <PatientMedicationTimesAreaBox :number="1" title="PROPANOL 20MG TAB" />
      <PatientMedicationTimesAreaBox :number="2" title="SIMVASTATIN 40MG TAB" />
    </ul>
    <h4 class="text-lg text-blue mt-1">{{ $t("Midday") }}</h4>
    <ul>
      <PatientMedicationTimesAreaBox :number="1" title="CITALOPTAM 20MG TAB" />
    </ul>
    <h4 class="text-lg text-blue mt-1">{{ $t("Evening") }}</h4>
    <ul>
      <PatientMedicationTimesAreaBox :number="1" title="LISINOPRIL 20MG TAB" />
    </ul>

    <ul>
      <h4 class="text-lg text-blue mt-1">{{ $t("Night") }}</h4>
      <PatientMedicationTimesAreaBox :number="1" title="LISINOPRIL 20MG TAB" />
    </ul>
  </div>
</template>
<script>
import PatientMedicationTimesAreaBox from "./PatientMedicationsTimeAreaBox.vue";
export default {
  props: ["date"],
  emits: ["changeOneDay"],
  components: {
    PatientMedicationTimesAreaBox,
  },
  data() {
    return {
      getStringDate: this.$store.state.PatientMedicationDate,
    };
  },
  methods: {
    ChangeOneDay(arg) {
      this.$emit("changeOneDay", arg);
    },
  },
};
</script>
