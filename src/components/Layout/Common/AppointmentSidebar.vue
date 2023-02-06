<template>
  <div class="py-4 pl-2">
    <main-card class="">
      <div class="pb-2">
        <div>
          <div class="flex justify-between py-2">
            <main-heading class="py-2">Termine</main-heading>
            <main-icon icon="material-symbols:add"></main-icon>
          </div>
          <p class="text-base text-[#82837E]">
            Du hast 6 Termine in deine Kalender
          </p>
        </div>
      </div>
      <!-- current appointment calendar -->
      <v-calendar
        :attributes="attributes"
        :masks="{
          title: 'MMM YYYY',
          weekdays: 'WWW',
        }"
        is-expanded
      />
      <!-- doctors data for appointments -->
      <div>
        <ul class="list-none mt-2">
          <li class="my-2" v-for="user in users" :key="user.id">
            <div
              :class="user.color"
              class="p-2 flex rounded-lg w-full justify-between"
            >
              <div class="flex justify-between">
                <img
                  :src="user.img"
                  class="inline-block rounded-full h-[55px] w-[55px] border border-black"
                />
                <div class="py-1 pl-3">
                  <h4 class="font-bold font-oxygen text-sm">
                    {{ user.name }}
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
          </li>
        </ul>
      </div>
      <!-- btns area -->
      <div class="py-4">
        <div class="grid grid-cols-2">
          <div>
            <main-button>Termin Buchen</main-button>
          </div>
          <div class="text-center">
            <router-link to="/" class="text-blue font-bold"
              >Alle anzeigen
              <iconify-icon
                class="inline m-auto"
                icon="material-symbols:chevron-right-rounded"
              ></iconify-icon>
            </router-link>
          </div>
        </div>
      </div>
    </main-card>
  </div>
</template>

<script>
const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

// dates for which dates to be highlighted
const a = randomDate(new Date(2023, 2, 1), new Date());
const b = randomDate(new Date(2023, 2, 1), new Date());
const c = randomDate(new Date(2023, 2, 1), new Date());
const d = randomDate(new Date(2023, 2, 1), new Date());

export default {
  data() {
    return {
      users: [
        {
          id: "1",
          name: "Dr. Pickem Christian",
          img: "https://randomuser.me/api/portraits/women/3.jpg",
          color: "bg-[#DAF8F480]",
        },
        {
          id: "2",
          name: "Dr. Jennie Nichols",
          img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          color: "bg-[#FFDFDF80]",
        },
        {
          id: "3",
          name: "Dr. Ken Butler",
          img: "https://randomuser.me/api/portraits/men/87.jpg",
          color: "bg-[#FFF3D780]",
        },
        {
          id: "4",
          name: "Dr. Natasha Romanoff",
          img: "https://randomuser.me/api/portraits/women/33.jpg",
          color: "bg-[#E7E7FF80]",
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
