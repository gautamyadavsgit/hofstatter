<template>
  <!-- adding a sidebar prop in page wrapper to show a side bar area in main page -->
  <page-wrapper sidebar>
    <div class="grid grid-cols-12">
      <!-- first box started -->
      <div class="col-span-12">
        <!-- custom style prop for adding custom classes in maincard -->
        <main-card customStyle="md:mt-[3.5rem]">
          <div class="grid grid-cols-12 mb-3">
            <div class="col-span-12 md:col-span-7">
              <div class="md:mb-6">
                <main-heading
                  customStyle="md:text-[24px] md:leading-[30px] text-lg pb-2"
                >
                  Hallo, Gautam Yadav
                </main-heading>
                <p class="font-oxygen text-[#82837E] text-base">
                  “Du hast 2 Anfragen in deinem Board”
                </p>
              </div>
              <div class="pt-6 flex md:grid md:grid-cols-3 md:gap-2 m-auto">
                <main-button>Impffragebogen</main-button>
                <main-button class="ml-10 md:ml-0">Lungentest</main-button>
                <div class="m-auto ml-0 hidden md:block">
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
            <div class="col-span-5 relative hidden md:block">
              <div class="absolute top-[-40%]">
                <doctors-img></doctors-img>
              </div>
            </div>
          </div>
        </main-card>
      </div>
      <!-- seccond box started -->
      <div class="md:col-span-6 col-span-12">
        <main-card>
          <div class="flex">
            <div>
              <main-heading>Kontaktiere uns</main-heading>
            </div>
            <div class="w-full">
              <div class="w-[60%] flex float-right">
                <!-- adding bgStyle prop for adding background classes and icostyle prop for icon styles -->
                <main-icon
                  icon="mdi:map-marker"
                  bgStyle="bg-[#E7EEF6] px-1 py-1"
                  icoStyle="text-blue "
                ></main-icon>
                <main-icon
                  icon="clarity:phone-handset-solid"
                  bgStyle="bg-[#A9E2DC] px-1 py-1"
                  icoStyle="text-[#00958F]"
                ></main-icon>
                <main-icon
                  icon="clarity:chat-bubble-outline-badged"
                  bgStyle="bg-[#D6F0FE] px-1 py-1"
                  icoStyle="text-[#009FF9]"
                ></main-icon>
              </div>
            </div>
          </div>
          <p class="mt-4">
            <span class="font-bold text-blue"> GEÖFFNET,</span> heute von 08:00
            bis 14:00 und 15:00 bis 20:00
          </p>
        </main-card>
      </div>
      <div class="md:col-span-6 col-span-12">
        <main-card>
          <main-heading>Dauermedikament bestellen</main-heading>
          <div class="flex">
            <div>
              <p class="mt-5">E-Rezept für deine Dauermedikamente bestellen.</p>
            </div>
            <div>
              <main-icon
                icon="healthicons:medicines"
                bgStyle="bg-[#666AC5]"
                icoStyle="text-white"
                class="ml-5 mt-2 box-border"
              ></main-icon>
            </div>
          </div>
        </main-card>
      </div>
      <!-- third box started -->
      <div class="col-span-12">
        <main-card>
          <main-heading>Befunde</main-heading>
          <div class="grid grid-cols-12 mt-5 text-center md:text-left">
            <div class="col-span-4">
              <div class="grid grid-cols-12">
                <div class="col-span-12 md:col-span-3">
                  <main-icon
                    icon="healthicons:health-worker-form-outline"
                    bgStyle="bg-[#A9E2DC] !py-2 !px-2"
                    icoStyle="text-[#00958F] !text-[30px] !leading-[36px]"
                  ></main-icon>
                </div>
                <div class="col-span-12 md:col-span-9">
                  <p class="font-bold text-blue mb-2">PCR Ergebnis</p>
                  <p>11 November 2022</p>
                </div>
                <div class="col-span-9"></div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="grid grid-cols-12">
                <div class="col-span-12 md:col-span-3">
                  <main-icon
                    icon="healthicons:health-worker-form-outline"
                    bgStyle="bg-[#FCE3AA] !py-2 !px-2"
                    icoStyle="text-[#FEB500] !text-[30px] !leading-[36px]"
                  ></main-icon>
                </div>
                <div class="col-span-12 md:col-span-9">
                  <p class="font-bold text-blue mb-2">Röntgenbefund</p>
                  <p>11 November 2022</p>
                </div>
                <div class="col-span-9"></div>
              </div>
            </div>
            <div class="col-span-4">
              <div class="grid grid-cols-12">
                <div class="col-span-12 md:col-span-3">
                  <main-icon
                    icon="healthicons:health-worker-form-outline"
                    bgStyle="bg-[#F8CBC8] !py-2 !px-2"
                    icoStyle="text-[#FD5957] !text-[30px] !leading-[36px]"
                  ></main-icon>
                </div>
                <div class="col-span-12 md:col-span-9">
                  <p class="font-bold text-blue mb-2">Blutbefund</p>
                  <p>11 November 2022</p>
                </div>
              </div>
              <div class="col-span-9"></div>
            </div>
          </div>
        </main-card>
      </div>
      <!-- fourth box started -->
      <div class="col-span-12 font-oxygen">
        <main-card>
          <main-heading>Notfalldatenblatt</main-heading>
          <div class="grid grid-cols-12 mt-5">
            <div class="md:col-span-4 col-span-6 pt-2 md:pt-0">
              <p class="pb-2 text-lg">Art</p>
              <ul class="list-none">
                <li class="text-blue font-bold">Notfalldatenblatt</li>
                <li class="text-blue font-bold">Letztes EKG</li>
                <li class="text-blue font-bold">Anästhesiepass</li>
                <li class="text-blue font-bold">Patientenverfügung</li>
                <!-- ... -->
              </ul>
            </div>
            <div class="md:col-span-4 col-span-6 pt-2 md:pt-0">
              <div class="flex justify-center">
                <div class="inline-block">
                  <p class="pb-2 text-lg">Art</p>
                  <ul class="list-none">
                    <li class="">Notfalldatenblatt</li>
                    <li class="">Letztes EKG</li>
                    <li class="">Anästhesiepass</li>
                    <li class="">Patientenverfügung</li>
                    <!-- ... -->
                  </ul>
                </div>
              </div>
            </div>
            <div class="md:col-span-4 col-span-6 pt-2 md:pt-0">
              <div class="m-auto inline-block md:float-right">
                <p class="pb-2 text-lg">Art</p>
                <ul class="list-none">
                  <li class="">Notfalldatenblatt</li>
                  <li class="">Letztes EKG</li>
                  <li class="">Anästhesiepass</li>
                  <li class="">Patientenverfügung</li>
                  <!-- ... -->
                </ul>
              </div>
            </div>
          </div>
        </main-card>
      </div>
    </div>
    <!-- template for sidebar adding a sidebar prop for identify  -->
    <template #sidebar>
      <!-- appointment sidebar component registered in main js -->
      <appointment-sidebar />
    </template>
  </page-wrapper>
</template>

<script>
import { defineAsyncComponent } from "vue";
// importing heavy images as vue componenets
const DoctorsImg = defineAsyncComponent(() =>
  import("../../../icons/DoctorsImg.vue")
);

export default {
  components: {
    "doctors-img": DoctorsImg,
  },
};
</script>
