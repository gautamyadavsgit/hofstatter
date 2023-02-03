<template>
  <div class="col-span-12">
    <main-card>
      <div class="grid grid-cols-2">
        <div class="col-span-2 flex items-center justify-between">
          <main-heading>Doctor Details</main-heading>
          <a @click="$router.go(-1)" class="font-bold text-sm text-blue"
            ><iconify-icon icon="ion:chevron-back" class="inline-block" />
            Rücken</a
          >
        </div>
        <div class="col-span-2 border-b py-4">
          <div class="flex rounded-lg w-full justify-between">
            <div class="flex justify-between">
              <img
                src="https://randomuser.me/api/portraits/women/56.jpg"
                class="inline-block rounded-full h-[55px] w-[55px] border border-black"
              />
              <div class="py-1 pl-3">
                <h4 class="font-bold font-oxygenBold text-base">
                  Dr. Christian Pickem
                </h4>
                <p class="text-sm">Ärztezentrum Wienerwald</p>
              </div>
            </div>
            <div>
              <main-button :link="false" @click="dateSubmit"
                >Continue</main-button
              >
            </div>
          </div>
        </div>
        <div class="cols-span-1 mt-6">
          <main-heading>Choose Slot Date</main-heading>

          <v-calendar
            :attributes="attributes"
            class="mt-6"
            :masks="{
              title: 'MMM YYYY',
              weekdays: 'WWW',
            }"
            @dayclick="onDayClick"
          />
        </div>
      </div>
    </main-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
    };
  },

  methods: {
    onDayClick(day) {
      this.date = day.date;
    },
    dateSubmit() {
      if (this.date == "") {
        this.$swal("Please select atleat one date");
        return;
      }
      //setting the data into the local storage of type value and date
      localStorage.setItem("date", this.date);
      localStorage.setItem("type", this.$route.query.type);
      localStorage.setItem("value", this.$route.query.value);
      this.$router.push({ name: "PatientAppointmentChooseTime" });
    },
  },
};
</script>
