<template>
 <div>
  <div class="grid grid-cols-12 mt-12 md:px-1 lg:px-0">
    <div class="col-span-12 lg:col-span-11 px-2 md:px-0 md:flex justify-between mb-5">
      <div>
        <main-heading>
          {{$t('vaccinations')}}
          <span
            class="bg-[#F8CBC8] font-bold ml-2 px-3 py-2 text-center rounded-full text-[#E20603]"
            >3</span
          >
        </main-heading>
      </div>
    </div>
    <!-- question divs  -->
    <div class="col-span-12 lg:col-span-11">
      <div class="grid grid-cols-12 gap-2">
        <div
          class="col-span-12 md:col-span-4"
          v-for="que in ques"
          :key="que.id"
        >
          <main-card customStyle="!py-4 !px-4">
            <main-heading
              customStyle="text-blue md:text-[26px] md:leading-9 text-md"
              >{{ que.name }}</main-heading
            >
            <div>
              <span
                class="text-[#82837E] font-normal text-lg mt-4 mb-2 inline-block"
              >
                {{ $t('Number') }}: </span
              ><span class="text-[22px] font-bold text-[#00958F] ml-3">{{
                que.Number
              }}</span>
            </div>
            <div>
              <span
                class="text-[#82837E] font-normal text-lg my-2 inline-block"
              >
                {{ $t("Last vaccination") }}: </span
              ><span class="text-[22px] font-bold text-[#00958F] ml-3"
                >Today - G1</span
              >
            </div>
          </main-card>
        </div>
      </div>
    </div>
    <!-- analysis area -->
  </div>
  <div class="my-4">
    <div class="col-span-11 px-2 md:px-0 md:flex justify-between mb-5">
      <div>
        <main-heading> {{ $t('Automatic analysis')}}</main-heading>
      </div>
    </div>
    <!-- question divs  -->
    <div class="col-span-11">
      <div class="grid grid-cols-12 gap-2">
        <div class="col-span-12 md:col-span-4">
          <main-card customStyle="!py-8 !px-2 flex gap-4">
            <div class="w-1/3 border-r-2 border-dashed border-[#C0C1BF]">
              <div class="text-center">
                <iconify-icon
                  icon="mdi:warning-octagon"
                  class="text-6xl m-auto text-[#FD5957]"
                ></iconify-icon>
                <p class="mt-3 text-4xl text-[#FD5957] m-auto font-bold">3</p>
              </div>
            </div>
            <div class="w-1/3">
              <div class="text-center">
                <iconify-icon
                  icon="material-symbols:warning-rounded"
                  class="text-6xl m-auto text-[#82837E80]"
                ></iconify-icon>
                <p class="mt-3 text-4xl text-[#82837E80] m-auto font-bold">0</p>
              </div>
            </div>
            <div class="w-1/3">
              <div class="text-center">
                <iconify-icon
                  icon="charm:block"
                  class="text-6xl m-auto text-[#82837E80]"
                ></iconify-icon>
                <p class="mt-3 text-4xl text-[#82837E80] m-auto font-bold">0</p>
              </div>
            </div>
          </main-card>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      // dummy data for pagination
      ques: [
        {
          id: 1,
          name: "COVID 19",
          Number: 1,
          LastVaccination:
            "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 2,
          name: "Diphterie",
          Number: 3,
          LastVaccination:
            "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 3,
          name: "FSME",
          Number: 2,
          LastVaccination:
            "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 4,
          name: "Influenza",
          Number: 1,
          LastVaccination:
            "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 5,
          name: "Poliomyelitis",
          Number: 2,
          LastVaccination:
            "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 6,
          name: "Tetanus",
          Number: 1,
          LastVaccination:
            "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>