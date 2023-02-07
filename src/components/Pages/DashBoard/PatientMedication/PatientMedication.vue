<template>
  <page-wrapper>
    <div class="mt-12">
      <div class="main-card">
        <div class="grid grid-cols-3 gap-12 px-4">
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
            <main-heading>Gautam Bawa</main-heading>

            <button class="px-3">
              <main-icon icon="material-symbols:add"></main-icon>
            </button>
          </div>
          <div class="flex items-center">
            <main-heading>Organisation</main-heading>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-12 mt-8">
        <div>
          <h4 class="text-lg text-blue mt-1">Morgen</h4>
          <ul>
            <li class="my-6">
              <main-card class="grid grid-cols-5">
                <div class="col-span-4">
                  <span class="font-bold">1 </span>
                  <span class="ml-4 inline-block">PROPANOL 20MG TAB</span>

                  <p class="mt-1">
                    <iconify-icon
                      icon="fa-solid:tablets"
                      class="text-lg text-cyan inline-block"
                    />
                    <iconify-icon
                      icon="mdi:silverware-fork-knife"
                      class="text-2xl text-orange inline-block ml-2"
                    />
                  </p>
                </div>
                <div class="col-span-1 flex justify-between items-center">
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="mdi:tick" class="text-xl" />
                  </button>
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="radix-icons:cross-2" class="text-xl" />
                  </button>
                </div>
              </main-card>
            </li>
            <li class="my-6">
              <main-card class="grid grid-cols-5">
                <div class="col-span-4">
                  <span class="font-bold">2 </span>
                  <span class="ml-4 inline-block">LISINOPRIL 20MG TAB</span>

                  <p class="mt-1">
                    <iconify-icon
                      icon="fa-solid:tablets"
                      class="text-lg text-cyan inline-block"
                    />
                    <iconify-icon
                      icon="mdi:silverware-fork-knife"
                      class="text-2xl text-orange inline-block ml-2"
                    />
                  </p>
                </div>
                <div class="col-span-1 flex justify-between items-center">
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="mdi:tick" class="text-xl" />
                  </button>
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="radix-icons:cross-2" class="text-xl" />
                  </button>
                </div>
              </main-card>
            </li>
          </ul>
          <h4 class="text-lg text-blue mt-1">Mittag</h4>
          <ul>
            <li class="my-6">
              <main-card class="grid grid-cols-5">
                <div class="col-span-4">
                  <span class="font-bold">2 </span>
                  <span class="ml-4 inline-block">CITALOPTAM 20MG TAB</span>

                  <p class="mt-1">
                    <iconify-icon
                      icon="fa-solid:tablets"
                      class="text-lg text-cyan inline-block"
                    />
                    <iconify-icon
                      icon="mdi:silverware-fork-knife"
                      class="text-2xl text-orange inline-block ml-2"
                    />
                  </p>
                </div>
                <div class="col-span-1 flex justify-between items-center">
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="mdi:tick" class="text-xl" />
                  </button>
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="radix-icons:cross-2" class="text-xl" />
                  </button>
                </div>
              </main-card>
            </li>
          </ul>
          <h4 class="text-lg text-blue mt-1">Abend</h4>
          <ul>
            <li class="my-6">
              <main-card class="grid grid-cols-5">
                <div class="col-span-4">
                  <span class="font-bold">2 </span>
                  <span class="ml-4 inline-block">LISINOPRIL 20MG TAB</span>

                  <p class="mt-1">
                    <iconify-icon
                      icon="fa-solid:tablets"
                      class="text-lg text-cyan inline-block"
                    />
                    <iconify-icon
                      icon="mdi:silverware-fork-knife"
                      class="text-2xl text-orange inline-block ml-2"
                    />
                  </p>
                </div>
                <div class="col-span-1 flex justify-between items-center">
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="mdi:tick" class="text-xl" />
                  </button>
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="radix-icons:cross-2" class="text-xl" />
                  </button>
                </div>
              </main-card>
            </li>
          </ul>

          <ul>
            <h4 class="text-lg text-blue mt-1">Nacht</h4>
            <li class="my-6">
              <main-card class="grid grid-cols-5">
                <div class="col-span-4">
                  <span class="font-bold">2 </span>
                  <span class="ml-4 inline-block">LISINOPRIL 20MG TAB</span>

                  <p class="mt-1">
                    <iconify-icon
                      icon="fa-solid:tablets"
                      class="text-lg text-cyan inline-block"
                    />
                    <iconify-icon
                      icon="mdi:silverware-fork-knife"
                      class="text-2xl text-orange inline-block ml-2"
                    />
                  </p>
                </div>
                <div class="col-span-1 flex justify-between items-center">
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="mdi:tick" class="text-xl" />
                  </button>
                  <button
                    class="border-2 p-1 border-site-grey rounded-full inline-block"
                  >
                    <iconify-icon icon="radix-icons:cross-2" class="text-xl" />
                  </button>
                </div>
              </main-card>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg text-blue mt-1">Aktuelle</h4>

          <div id="accordion-collapse" data-accordion="collapse">
            <main-card>
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-1"
                  class="flex justify-between items-center w-full text-left"
                >
                  <iconify-icon icon="tabler:notes" class="text-2xl w-1/6" />
                  <p class="w-4/">Lorsartan 50mg Tablet</p>
                  <span class="w-1/6">1 Refils</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                class="hidden border-t mt-4"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-2 flex rounded-lg w-full justify-between">
                  <div class="flex justify-between">
                    <img
                      src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                      class="inline-block rounded-full h-[55px] w-[55px] border border-black"
                    />
                    <div class="py-1 pl-3">
                      <h4 class="font-bold font-oxygen text-sm">
                        Dr. Christoph Weiser
                      </h4>
                      <p class="text-xs">2:00PM , 06.12.2022</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-end">
                    <main-icon
                      icon="maki:cross"
                      bgStyle="bg-[#F8CBC8]"
                      icoStyle="!text-sm text-[#FD5957]"
                    ></main-icon>
                    <main-icon
                      icon="clarity:edit-solid"
                      icoStyle="!text-sm"
                    ></main-icon>
                  </div>
                </div>
              </div>
            </main-card>
            <main-card>
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                  class="flex justify-between items-center w-full text-left"
                >
                  <iconify-icon icon="tabler:notes" class="text-2xl w-1/6" />
                  <p class="w-4/">Lorsartan 50mg Tablet</p>
                  <span class="w-1/6">1 Refils</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                class="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div class="p-2 flex rounded-lg w-full justify-between">
                  <div class="flex justify-between">
                    <img
                      class="inline-block rounded-full h-[55px] w-[55px] border border-black"
                    />
                    <div class="py-1 pl-3">
                      <h4 class="font-bold font-oxygen text-sm"></h4>
                      <p class="text-xs">2:00PM , 06.12.2022</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-end">
                    <main-icon
                      icon="maki:cross"
                      bgStyle="bg-[#F8CBC8]"
                      icoStyle="!text-sm text-[#FD5957]"
                    ></main-icon>
                    <main-icon
                      icon="clarity:edit-solid"
                      icoStyle="!text-sm"
                    ></main-icon>
                  </div>
                </div>
              </div>
            </main-card>
          </div>
        </div>
      </div>
    </div>
  </page-wrapper>
</template>
<script>
import WeekDays from "./weekdays.js"; // importing weekdays
import MonthNames from "./monthname.js"; // importing monthnames
import { initAccordions } from "flowbite";
export default {
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
