<template>
  <div class="col-span-12">
    <main-card>
      <div class="grid grid-cols-2">
        <div class="col-span-2 flex items-center justify-between">
          <main-heading>Doctor Details</main-heading>
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
        <div class="cols-span-1 mt-6">
          <main-heading
            >Hey John Doe, your appointment request for {{ value + " " }}
            {{ type }} is accepted.</main-heading
          >
          <p class="mt-4 font-oxygenBold text-sm">
            Date : <span class="text-[#00958F]">{{ date }}</span
            >, Time <span class="text-[#00958F]">{{ slotTime }}</span>
          </p>
        </div>
      </div>
    </main-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: {},
      type: "",
      value: "",
      slotTime: "",
    };
  },

  created() {
    this.date = localStorage.getItem("date");
    this.type = localStorage.getItem("type");
    this.value = localStorage.getItem("value");
    this.slotTime = localStorage.getItem("timeSlot");
    this.date = new Date(this.date).toDateString();
  },
};
</script>
