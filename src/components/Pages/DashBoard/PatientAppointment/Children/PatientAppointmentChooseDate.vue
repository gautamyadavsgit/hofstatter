<template>
  <div class="col-span-12" id="dateSection">
    <main-card>
      <div class="grid grid-cols-2">
        <div class="col-span-2 flex items-center justify-between">
          <main-heading>{{ $t("Doctor Details") }}</main-heading>
          <a @click="$router.go(-1)" class="font-bold text-sm text-blue"
            ><iconify-icon icon="ion:chevron-back" class="inline-block" />
            {{ $t("Back") }}</a
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
              <main-button :link="false" @click="dateSubmit">{{
                $t("Continue")
              }}</main-button>
            </div>
          </div>
        </div>
        <div class="md:w-5/12 col-span-2 mt-6">
          <main-heading>{{ $t("Choose Slot Date") }}</main-heading>

          <v-calendar
            :attributes="attributes"
            :masks="{
              title: 'MMM YYYY',
              weekdays: 'WWW',
            }"
            is-expanded
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
      date: new Date(),
    };
  },
  computed: {
    attributes() {
      return [
        {
          key: this.date,
          highlight: "green",
          dates: this.date,
        },
      ];
    },
  },

  methods: {
    scroll() {
      setTimeout(() => {
        const element = document.getElementById("dateSection");
        element.scrollIntoView();
      }, 100);
    },
    onDayClick(day) {
      this.date = day.date;
    },
    dateSubmit() {
      if (this.chooseDate == "") {
        this.$swal({
          title: this.$t("Please Select atleast one date"),
          icon: "error",
        });
        return;
      }
      console.log(this.chooseDate);
      //setting the data into the local storage of type value and date
      localStorage.setItem("date", this.chooseDate);
      localStorage.setItem("type", this.$route.query.type);
      localStorage.setItem("value", this.$route.query.value);
      this.$router.push({ name: "PatientAppointmentChooseTime" });
    },
  },
  created() {
    this.scroll();
  },
  updated() {
    this.scroll();
  },
};
</script>
