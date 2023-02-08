<template>
  <div>
    <div class="main-card md:hidden !py-5">
      <div class="flex items-center justify-center">
        <main-heading>Organisation</main-heading>
      </div>
    </div>
    <ul class="list-none md:mt-14">
      <li class="my-6" v-for="user in users" :key="user.id">
        <div class="p-2 flex rounded-lg w-full justify-between main-card">
          <div class="flex justify-between">
            <img
              :src="user.img"
              class="inline-block rounded-full h-[55px] w-[55px] border border-black"
            />
            <div class="py-1 pl-3">
              <h4 class="font-bold font-oxygen text-sm">
                {{ user.name }}
              </h4>
              <p class="text-sm text-light-grey py-1">{{ user.color }}</p>
            </div>
          </div>
          <div class="flex items-center justify-end">
            <main-icon
              icon="clarity:phone-handset-solid"
              class="text-lg"
            ></main-icon>
            <main-icon icon="mdi:envelope"></main-icon>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "1",
          name: "Dr. Pickem Christian",
          img: "https://randomuser.me/api/portraits/women/3.jpg",
          color: "Ärztezentrum Wienerwald",
        },
        {
          id: "2",
          name: "Dr. Jennie Nichols",
          img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          color: "Internist, Kardiologe",
        },
        {
          id: "3",
          name: "Dr. Ken Butler",
          img: "https://randomuser.me/api/portraits/men/87.jpg",
          color: "Ärztezentrum Wienerwald",
        },
      ],
    };
  },
};
</script>
