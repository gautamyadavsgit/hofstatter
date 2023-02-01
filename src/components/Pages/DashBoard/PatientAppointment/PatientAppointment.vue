<template>
  <!-- adding a sidebar prop in page wrapper to show a side bar area in main page -->
  <page-wrapper sidebar>
    <div class="grid grid-cols-12">
      <!-- first box started -->
      <div class="col-span-12">
        <!-- custom style prop for adding custom classes in maincard -->
        <main-card customStyle="md:mt-[3.5rem]">
          <div class="mb-3">
            <main-heading>Termin Buchen</main-heading>
            <form
              class="grid md:grid-cols-5 grid-cols-2 justify-between items-center mt-6"
            >
              <div>
                <div>
                  <label class="font-bold text-sm text-black"
                    >Vaccination</label
                  >
                </div>
                <div class="mt-3">
                  <select
                    class="w-36 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226] [&>option]:hover:text-red-400"
                    placeholder="vaccination"
                  >
                    <option disabled>Vaccination</option>
                    <option value="all">COVID-19</option>
                    <option value="all">FSME</option>
                    <option value="all">Diphterie</option>
                    <option value="all">Influenza</option>
                    <option value="all">Poliomyelitis</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label class="font-bold text-sm text-black"
                    >Sleep Screening</label
                  >
                </div>
                <div class="mt-3">
                  <select
                    class="w-36 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226] [&>option]:hover:text-red-400"
                    placeholder="vaccination"
                  >
                    <option>Sleep Screening</option>
                    <option value="all">COVID-19</option>
                    <option value="all">FSME</option>
                    <option value="all">Diphterie</option>
                    <option value="all">Influenza</option>
                    <option value="all">Poliomyelitis</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label class="font-bold text-sm text-black"
                    >Lung Function</label
                  >
                </div>
                <div class="mt-3">
                  <select
                    class="w-36 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226] [&>option]:hover:text-red-400"
                    placeholder="vaccination"
                  >
                    <option disabled>Lung Function</option>
                    <option value="all">COVID-19</option>
                    <option value="all">FSME</option>
                    <option value="all">Diphterie</option>
                    <option value="all">Influenza</option>
                    <option value="all">Poliomyelitis</option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <label class="font-bold text-sm text-black">Blood Draw</label>
                </div>
                <div class="mt-3">
                  <select
                    class="w-36 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2 focus:!outline-[#2e319226] [&>option]:hover:text-red-400"
                    placeholder="vaccination"
                  >
                    <option>Blood Draw</option>
                    <option value="all">COVID-19</option>
                    <option value="all">FSME</option>
                    <option value="all">Diphterie</option>
                    <option value="all">Influenza</option>
                    <option value="all">Poliomyelitis</option>
                  </select>
                </div>
              </div>

              <div>
                <div class="mt-6">
                  <main-button :link="false" mode="md:!py-2">Apply</main-button>
                </div>
              </div>
            </form>
          </div>
        </main-card>
      </div>
      <!-- seccond box started -->

      <div class="col-span-12 py-6 px-2">
        <div class="grid grid-cols-1 md:grid-cols-3">
          <div class="col-span-1">
            <main-heading>Heute Termine</main-heading>
            <p class="text-light-grey text-base font-oxygenLight mt-2">
              6th wednesday, December
            </p>
          </div>
          <div class="col-span-1 md:col-span-2">
            <form class="flex justify-between mt-4 md:mt-2">
              <label class="text-sm m-auto mr-2 font-bold block md:inline"
                >Filter</label
              >
              <select
                class="w-64 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2"
              >
                <option selected value="all" class="font-oxygen">All</option>
              </select>
              <input
                type="text"
                class="md:w-64 w-36 rounded-full h-9 border-none mr-2 px-4"
                placeholder="suche"
              />
              <main-button :link="false" mode="!py-1 !px-3">Apply</main-button>
            </form>
          </div>
        </div>
      </div>

      <!-- third box started -->
      <div class="col-span-12">
        <div>
          <ul class="list-none mt-2">
            <li class="my-2" v-for="user in users" :key="user.id">
              <main-card>
                <div class="flex rounded-lg w-full justify-between">
                  <div class="flex justify-between">
                    <img
                      :src="user.img"
                      class="inline-block rounded-full h-[55px] w-[55px] border border-black"
                    />
                    <div class="py-1 pl-3">
                      <h4 class="font-bold font-oxygenBold text-base">
                        {{ user.name }}
                      </h4>
                      <p class="text-base">2:00PM , 06.12.2022</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-end">
                    <main-icon
                      v-if="user.type == 'dr'"
                      icon="fa-solid:notes-medical"
                      bgStyle="bg-[#009FF929]"
                      icoStyle="!text-2xl text-[#009FF9]"
                    ></main-icon>
                    <main-button v-if="user.type == 'vc'">
                      Impffragebogen
                    </main-button>

                    <main-icon
                      icon="maki:cross"
                      bgStyle="bg-[#F8CBC8]"
                      icoStyle="!text-2xl text-[#FD5957]"
                    ></main-icon>
                    <main-icon
                      icon="clarity:edit-solid"
                      bgStyle="bg-[#E7EEF6]"
                      icoStyle="!text-2xl text-[#2E3192]"
                    ></main-icon>
                  </div>
                </div>
              </main-card>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- template for sidebar adding a sidebar prop for identify -->
    <template #sidebar>
      <!-- appointment sidebar component registered in main js -->
      <appointment-sidebar />
    </template>
  </page-wrapper>
</template>

<script>
const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

// dates for which dates to be highlighted
const a = randomDate(new Date(2022, 12, 1), new Date());
const b = randomDate(new Date(2022, 12, 1), new Date());
const c = randomDate(new Date(2022, 12, 1), new Date());
const d = randomDate(new Date(2022, 12, 1), new Date());

export default {
  data() {
    return {
      users: [
        {
          id: "1",
          name: "Dr. Pickem Christian",
          img: "https://randomuser.me/api/portraits/women/3.jpg",
          type: "dr",
        },
        {
          id: "2",
          name: "Impftermin, Influenza",
          img: "https://pixabay.com/get/g37fbabb847010c076723256f8ca10184088f47a252ff632fee3743196f4a52f2c548ed7ef9853f460968d1b985230f66abee5ff284c11710c1c202a1b12ae988_640.png",
          color: "bg-[#FFDFDF80]",
          type: "vc",
        },
        {
          id: "3",
          name: "Dr. Ken Butler",
          img: "https://randomuser.me/api/portraits/men/87.jpg",
          type: "dr",
        },
        {
          id: "4",
          name: "Röntgen, Ärztezentrum Wienerwald",
          img: "https://pixabay.com/get/gc4af676345c69a58fdecf6edd69cfe6e6a1cff05599cadf252974e8ddefaae7db36ba4240b8fa99ddc652254cc845f39ce2afe1dd0dd490bfa56f83cf3794645_640.jpg",
          type: "rp",
        },
      ],
      // attributes for highlighting dates
      attributes: [
        {
          key: a,
          highlight: true,
          dates: a,
        },
        {
          key: b,
          highlight: "red",
          dates: b,
        },
        {
          key: c,
          highlight: "purple",
          dates: c,
        },
        {
          key: d,
          highlight: "green",
          dates: d,
        },
      ],
    };
  },
};
</script>
