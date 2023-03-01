<template>
  <div class="col-span-12" ref="successPage">
    <main-card>
      <div class="grid grid-cols-2">
        <div class="col-span-2 flex items-center justify-between">
          <main-heading>{{ $t("Doctor Details") }}</main-heading>
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
          </div>
        </div>
        <div class="col-span-2 mt-6">
          <main-heading class="!whitespace-normal">{{
            $t("Hey your appointment request for is accepted", {
              value: value,
              type: type,
              name: "John Doe",
            })
          }}</main-heading>
          <p class="mt-4 font-oxygenBold text-sm">
            {{ $t("date") }} : <span class="text-[#00958F]">{{ date }}</span
            >, {{ $t("Time") }}
            <span class="text-[#00958F]">{{ slotTime }}</span>
          </p>
        </div>
      </div>
    </main-card>
  </div>
</template>

<script>
import Scroll from "@/mixins/Appointment/Scroll";
export default {
  mixins: [Scroll], // importing scroll mixins
  data() {
    return {
      date: {},
      type: "",
      value: "",
      slotTime: "",
    };
  },

  created() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.scroll(this.$refs.successPage);
      }, 1000);
    });
    this.date = localStorage.getItem("date");
    this.type = localStorage.getItem("type");
    this.value = localStorage.getItem("value");
    this.slotTime = localStorage.getItem("timeSlot");
    this.date = new Date(this.date).toDateString();
  },
  updated() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.scroll(this.$refs.successPage);
      }, 1000);
    });
  },
};
</script>
