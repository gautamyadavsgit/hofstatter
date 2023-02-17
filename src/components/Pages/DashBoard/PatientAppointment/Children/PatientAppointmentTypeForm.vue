<template>
  <form
    @submit="typeSubmitHandler"
    class="grid md:grid-cols-5 grid-cols-1 justify-between items-center mt-6"
  >
    <div>
      <div>
        <label class="font-bold text-sm text-black">{{ $t('Vaccination') }}</label>
      </div>
      <div class="mt-3">
        <select
          class="md:w-36 h-9 hover:blur-0 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226] over:blur-0"
          placeholder="vaccination"
          name="vaccination"
          :class="{ 'blur-[1.5px]': vaccinationFilter == true }"
          @change="onAppointmentTypeChange"
        >
          <option value="" :selected="vaccinationFilter">Vaccination</option>
          <option value="COVID-19">COVID-19</option>
          <option value="FSME">FSME</option>
          <option value="Diphterie">Diphterie</option>
          <option value="Influenza">Influenza</option>
          <option value="Poliomyelitis">Poliomyelitis</option>
        </select>
      </div>
    </div>
    <div>
      <div>
        <label class="font-bold text-sm text-black">{{ $t('Sleep Screening') }}</label>
      </div>
      <div class="mt-3">
        <select
          class="w-36 h-9 hover:blur-0 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226]"
          placeholder="vaccination"
          :class="{ 'blur-[1.5px]': sleepScreening == true }"
          @change="onAppointmentTypeChange"
          name="sleepScreening"
        >
          <option value="" :selected="sleepScreening">Sleep Screening</option>
          <option>COVID-19</option>
          <option value="all">FSME</option>
          <option value="all">Diphterie</option>
          <option value="all">Influenza</option>
          <option value="all">Poliomyelitis</option>
        </select>
      </div>
    </div>
    <div>
      <div>
        <label class="font-bold text-sm text-black">{{ $t('Lung Function') }}</label>
      </div>
      <div class="mt-3">
        <select
          class="w-36 h-9 border-1 hover:blur-0 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226]"
          placeholder="vaccination"
          :class="{ 'blur-[1.5px]': lungFunction == true }"
          @change="onAppointmentTypeChange"
          name="lungFunction"
        >
          <option value="" :selected="lungFunction">Lung Function</option>
          <option>COVID-19</option>
          <option value="all">FSME</option>
          <option value="all">Diphterie</option>
          <option value="all">Influenza</option>
          <option value="all">Poliomyelitis</option>
        </select>
      </div>
    </div>
    <div>
      <div>
        <label class="font-bold text-sm text-black">{{ $t('Blood Draw') }}</label>
      </div>
      <div class="mt-3">
        <select
          class="w-36 h-9 border-1 hover:blur-0 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226]"
          placeholder="vaccination"
          :class="{ 'blur-[1.5px]': bloodDraw == true }"
          @change="onAppointmentTypeChange"
          name="bloodDraw"
        >
          <option value="" :selected="bloodDraw">BloodDraw</option>
          <option value="covid-19">COVID-19</option>
          <option value="all">FSME</option>
          <option value="all">Diphterie</option>
          <option value="all">Influenza</option>
          <option value="all">Poliomyelitis</option>
        </select>
      </div>
    </div>

    <div>
      <div class="mt-8 flex">
        <main-button :link="false" mode="md:!py-2 m-auto">{{ $t('Apply') }}</main-button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      vaccinationFilter: false,
      sleepScreening: false,
      lungFunction: false,
      bloodDraw: false,
      selectBoxName: "",
      selectBoxValue: "",
    };
  },
  methods: {
    //   blur the other filter when one filter is selected
    handleBlurEvents(e) {
      if (e == "vaccination") {
        this.vaccinationFilter = false;
        this.sleepScreening = true;
        this.lungFunction = true;
        this.bloodDraw = true;
      }
      if (e == "sleepScreening") {
        this.sleepScreening = false;
        this.vaccinationFilter = true;
        this.lungFunction = true;
        this.bloodDraw = true;
      }
      if (e == "lungFunction") {
        this.lungFunction = false;
        this.sleepScreening = true;
        this.vaccinationFilter = true;
        this.bloodDraw = true;
      }
      if (e == "bloodDraw") {
        this.sleepScreening = true;
        this.bloodDraw = false;
        this.vaccinationFilter = true;
        this.lungFunction = true;
      }
    },
    // set selectbox value and name onappointmentchange
    onAppointmentTypeChange(e) {
      console.log(e.target.value);
      if (e.target.value != "") {
        this.handleBlurEvents(e.target.name);
        this.selectBoxName = e.target.name;
        this.selectBoxValue = e.target.value;
      }
    },
    typeSubmitHandler(e) {
      e.preventDefault();
      var name = this.selectBoxName;
      var value = this.selectBoxValue;
      if (name == "" || value == "") {
        this.$swal("The form can not be empty");
        return;
      }
      this.$router.push({
        name: "PatientAppointmentsChooseDate",
        query: { type: name, value: value },
      });
    },
  },
  created() {
    // call the handle blue event when the type is selected
    if (this.$route.query.type && this.$route.query.value) {
      this.handleBlurEvents(this.$route.query.type);
    }
  },
};
</script>
<!-- custom css for psuedo selection -->
<style scoped>
@media screen and (max-width: 640px) {
  form select {
    margin-bottom: 10px;
    width: 100%;
  }
}
</style>
