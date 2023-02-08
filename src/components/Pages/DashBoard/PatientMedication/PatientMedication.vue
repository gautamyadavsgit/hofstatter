<template>
  <page-wrapper>
    <div class="mt-12 px-3">
      <div class="main-card hidden md:block">
        <div class="md:grid grid-cols-3 gap-12 px-4">
          <div class="flex justify-between items-center">
            <!-- getStringDate computed propery to show date in string -->
            <main-heading>{{ getStringDate }}</main-heading>
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
          <div class="flex justify-between items-center">
            <main-heading>Medikation</main-heading>

            <button class="px-3">
              <main-icon icon="material-symbols:add"></main-icon>
            </button>
          </div>
          <div class="flex items-center">
            <main-heading>Organisation</main-heading>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-3 grid-cols-1 md:gap-12 mt-8">
        <PatientMedicineTimesArea
          :date="getStringDate"
          @ChangeOneDay="ChangeOneDay"
        />
        <PatientMedicationDetailsArea />
        <PatientMedicationDoctorsArea />
      </div>
    </div>
  </page-wrapper>
</template>
<script>
import WeekDays from "./weekdays.js"; // importing weekdays
import MonthNames from "./monthname.js"; // importing monthnames
import { initAccordions } from "flowbite"; // importing accordian from third party library floatbite
import PatientMedicineTimesArea from "./Children/PatientMedicinesTimeArea.vue";
import PatientMedicationDetailsArea from "./Children/PatientMedicationDetailsArea.vue";
import PatientMedicationDoctorsArea from "./Children/PatientMedicationDoctorsArea.vue";
export default {
  components: {
    PatientMedicineTimesArea,
    PatientMedicationDetailsArea,
    PatientMedicationDoctorsArea,
  },
  data() {
    return {
      // currentDate data property for getting the today date
      currentDate: new Date(),
    };
  },
  computed: {
    // getStringDate computed propery to show date in string
    getStringDate() {
      const date = this.currentDate.getDate();
      const monthName = MonthNames[this.currentDate.getMonth()];
      const dayName = WeekDays[this.currentDate.getDay()];
      //  return date as string
      return dayName + "  " + date + "  " + "  " + monthName;
    },
  },
  methods: {
    // ChangeOneDay mehtods for increase or decrease the day by 1
    ChangeOneDay(condition) {
      // day var for getting the milliseccond of one day
      var day = 60 * 60 * 24 * 1000;
      // conditions for checking the day has to plus or minus
      if (condition == "+") {
        this.currentDate = new Date(this.currentDate.getTime() + day);
      }
      if (condition == "-") {
        this.currentDate = new Date(this.currentDate.getTime() - day);
      }
    },
    accordianHandler(e) {
      console.log(e.target);
    },
  },
  mounted() {
    initAccordions();
  },
};
</script>
