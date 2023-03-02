<template>
  <div class="col-span-12" ref="timeSection">
    <main-card>
      <div class="grid grid-cols-2">
        <div class="col-span-2 flex items-center justify-between">
          <main-heading>{{ $t("Doctor Details") }}</main-heading>
          <a class="font-bold text-sm text-blue" @click="$router.go(-1)"
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
              <main-button :link="false" @click="submitHandler">{{
                $t("Continue")
              }}</main-button>
            </div>
          </div>
        </div>
        <div class="col-span-2 mt-6">
          <main-heading>{{ $t("Choose Slot Time") }}</main-heading>
          <p class="mt-4 font-oxygenBold text-sm">
            <span class="text-[#00958F]">25th Dec</span>,
            {{ $t("availability") }}
          </p>
          <div class="mt-5">
            <form>
              <p>{{ $t("Morning") }}</p>
              <label class="label" for="1m">
                <p
                  class="whitespace-nowrap disabled my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block"
                >
                  01:00AM
                </p>
                <input
                  value=" 01:00AM"
                  name="time-slot"
                  id="1m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                  disabled
                />
              </label>
              <label class="label" for="2m">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  02:00AM
                </p>
                <input
                  value=" 02:00AM"
                  name="time-slot"
                  id="2m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="3m">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  03:00AM
                </p>
                <input
                  value=" 03:00AM"
                  name="time-slot"
                  id="3m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="4m">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  04:00AM
                </p>
                <input
                  value=" 04:00AM"
                  name="time-slot"
                  id="4m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="5m">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  05:00AM
                </p>
                <input
                  value=" 05:00AM"
                  name="time-slot"
                  id="5m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="6m">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  06:00AM
                </p>
                <input
                  value=" 06:00AM"
                  name="time-slot"
                  id="6m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="7m">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  07:00AM
                </p>
                <input
                  value=" 07:00AM"
                  name="time-slot"
                  id="7m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="8m">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  08:00AM
                </p>
                <input
                  value=" 08:00AM"
                  name="time-slot"
                  id="8m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="9m">
                <p
                  class="whitespace-nowrap disabled my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block"
                >
                  09:00AM
                </p>
                <input
                  value=" 09:00AM"
                  name="time-slot"
                  id="9m"
                  type="radio"
                  class="hidden"
                  disabled
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="10m">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  10:00AM
                </p>
                <input
                  value=" 10:00AM"
                  name="time-slot"
                  id="10m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="11m">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  11:00AM
                </p>
                <input
                  value=" 11:00AM"
                  name="time-slot"
                  id="11m"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>

              <p>{{ $t("Afternoon") }}</p>
              <label class="label" for="12e">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  12:00PM
                </p>
                <input
                  value="12:00PM"
                  name="time-slot"
                  id="12E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="1E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  01:00PM
                </p>
                <input
                  value="01:00PM"
                  name="time-slot"
                  id="1E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="2E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  02:00PM
                </p>
                <input
                  value="02:00PM"
                  name="time-slot"
                  id="2E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="3E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  03:00PM
                </p>
                <input
                  value="03:00PM"
                  name="time-slot"
                  id="3E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="4E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  04:00PM
                </p>
                <input
                  value="04:00PM"
                  name="time-slot"
                  id="4E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="5E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  05:00PM
                </p>
                <input
                  value="05:00PM"
                  name="time-slot"
                  id="5E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <p>{{ $t("Evening") }}</p>
              <label class="label" for="6E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  06:00PM
                </p>
                <input
                  value="06:00PM"
                  name="time-slot"
                  id="6E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="7E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  07:00PM
                </p>
                <input
                  value="07:00PM"
                  name="time-slot"
                  id="7E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="8E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  08:00PM
                </p>
                <input
                  value="08:00PM"
                  name="time-slot"
                  id="8E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="9E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  09:00PM
                </p>
                <input
                  value="09:00PM"
                  name="time-slot"
                  id="9E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="10E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  10:00PM
                </p>
                <input
                  value="10:00PM"
                  name="time-slot"
                  id="10E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
              <label class="label" for="11E">
                <p
                  class="whitespace-nowrap my-2 mx-2 text-sm font-oxygenBold border-2 rounded-md border-[#3F3D56] p-1 inline-block cursor-pointer"
                >
                  11:00PM
                </p>
                <input
                  value="11:00PM"
                  name="time-slot"
                  id="11E"
                  type="radio"
                  class="hidden"
                  @change="clickHandler"
                />
              </label>
            </form>
          </div>
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
      slotTime: "",
    };
  },
  methods: {
    clickHandler(e) {
      let x = document.getElementsByClassName("l-active");

      // If it exists, remove it.
      if (x.length > 0) {
        x[0].classList.remove("l-active");
      }
      let element = document.getElementById(e.target.id);
      element.parentElement.classList.add("l-active");
      this.slotTime = e.target.value;
      this.eventSectionScroll();
    },
    submitHandler() {
      if (this.slotTime == "") {
        this.$swal("Please select atleat one time slot");
        return;
      }
      localStorage.setItem("timeSlot", this.slotTime);
      this.$router.push({ name: "PatientAppointmentDone" });
    },
  },
  created() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.scroll(this.$refs.timeSection);
      },1000);
    });
  },
  updated() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.scroll(this.$refs.timeSection);
      },1000);
    });
  },
};
</script>

<style scoped>
.l-active p {
  border-color: #00958f !important;
  background-color: #daf8f4 !important;
  color: #00958f !important;
}
.disabled {
  border-color: #82837e80 !important;
  color: #82837e80 !important;
}
</style>
