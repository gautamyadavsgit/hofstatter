<template>
  <PatientAppointmentSearchForm />
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
</template>
<script>
import PatientAppointmentSearchForm from "../Children/PatientAppointmentSearchForm.vue";

// dates for which dates to be highlighted
export default {
  components: {
    PatientAppointmentSearchForm,
  },
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
    };
  },
};
</script>
