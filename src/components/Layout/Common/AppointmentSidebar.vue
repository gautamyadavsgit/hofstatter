<template>
  <div class="py-4 md:pl-2 px-1 md:px-2">
    <main-card>
      <div class="pb-2">
        <div>
          <div class="flex justify-between py-2">
            <main-heading class="py-2">{{ $t("appointments") }}</main-heading>
            <router-link to="appointments">
              <main-icon icon="material-symbols:add"></main-icon
            ></router-link>
          </div>
          <p class="text-base text-[#82837E]">
            {{ $t("appointment-number", { number: 6 }) }}
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
          <li
            class="my-2"
            v-for="user in this.$store.state.appointments.DoctorsData"
            :key="user.id"
          >
            <div
              :class="user.color"
              class="p-2 flex rounded-lg w-full justify-between"
            >
              <div class="flex justify-between">
                <img
                  :src="user.img"
                  class="inline-block rounded-full h-[55px] w-[55px] border border-black object-cover"
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
            <main-button to="/appointments">{{
              $t("Book an appointment")
            }}</main-button>
          </div>
          <div class="text-center flex">
            <router-link
              :to="{ name: 'Requests' }"
              class="text-blue font-bold m-auto"
              >{{ $t("Show-all") }}
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
const a = randomDate(new Date(2023, 3, 1), new Date());
const b = randomDate(new Date(2023, 3, 1), new Date());
const c = randomDate(new Date(2023, 3, 1), new Date());
const d = randomDate(new Date(2023, 3, 1), new Date());

export default {
  data() {
    return {
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
