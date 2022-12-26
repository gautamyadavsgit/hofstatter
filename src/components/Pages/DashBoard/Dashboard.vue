<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <page-wrapper sidebar>
    <div class="grid grid-cols-12">
      <div class="col-span-12">
        <main-card customStyle="mt-[3.5rem]">
          <div class="grid grid-cols-12 mb-3">
            <div class="col-span-6">
              <div class="mb-6">
                <main-heading customStyle="text-[24px] leading-[30px] pb-2">
                  Hallo, Gautam Yadav
                </main-heading>
                <p class="font-oxygen text-[#82837E] text-base">
                  “Du hast 2 Anfragen in deinem Board”
                </p>
              </div>
              <div class="pt-6 grid grid-cols-3 gap-2 m-auto">
                <main-button>Impffragebogen</main-button>
                <main-button>Lungentest</main-button>
                <div class="m-auto ml-0">
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
            <div class="col-span-6 relative">
              <div class="absolute top-[-40%] left-[30%]">
                <doctors-img></doctors-img>
              </div>
            </div>
          </div>
        </main-card>
      </div>
      <div class="col-span-6">
        <main-card>
          <div class="flex">
            <div>
              <main-heading>Kontaktiere uns</main-heading>
            </div>
            <div class="w-full">
              <div class="w-[50%] flex float-right mr-0">
                <main-icon
                  icon="mdi:map-marker"
                  bgStyle="bg-[#E7EEF6]"
                  icoStyle="text-blue"
                ></main-icon>
                <main-icon
                  icon="clarity:phone-handset-solid"
                  bgStyle="bg-[#A9E2DC]"
                  icoStyle="text-[#00958F]"
                ></main-icon>
                <main-icon
                  icon="clarity:chat-bubble-outline-badged"
                  bgStyle="bg-[#D6F0FE]"
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
      <div class="col-span-6">
        <main-card>
          <main-heading>Dauermedikament bestellen</main-heading>
          <div class="flex">
            <div>
              <p class="mt-8">E-Rezept für deine Dauermedikamente bestellen.</p>
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
      <div class="col-span-12">
        <main-card>
          <main-heading>Befunde</main-heading>
          <div class="grid grid-cols-3 mt-5">
            <div class="grid grid-cols-12">
              <div class="col-span-3">
                <main-icon
                  icon="healthicons:health-worker-form-outline"
                  bgStyle="bg-[#A9E2DC] !py-2 !px-2"
                  icoStyle="text-[#00958F] !text-[30px] !leading-[36px]"
                ></main-icon>
              </div>
              <div class="col-span-9">
                <p class="font-bold text-blue mb-3">PCR Ergebnis</p>
                <p>11 November 2022</p>
              </div>
              <div class="col-span-9"></div>
            </div>
            <div class="grid grid-cols-12">
              <div class="col-span-3">
                <main-icon
                  icon="healthicons:health-worker-form-outline"
                  bgStyle="bg-[#FCE3AA] !py-2 !px-2"
                  icoStyle="text-[#FEB500] !text-[30px] !leading-[36px]"
                ></main-icon>
              </div>
              <div class="col-span-9">
                <p class="font-bold text-blue mb-3">Röntgenbefund</p>
                <p>11 November 2022</p>
              </div>
              <div class="col-span-9"></div>
            </div>
            <div class="grid grid-cols-12">
              <div class="col-span-3">
                <main-icon
                  icon="healthicons:health-worker-form-outline"
                  bgStyle="bg-[#F8CBC8] !py-2 !px-2"
                  icoStyle="text-[#FD5957] !text-[30px] !leading-[36px]"
                ></main-icon>
              </div>
              <div class="col-span-9">
                <p class="font-bold text-blue mb-3">Blutbefund</p>
                <p>11 November 2022</p>
              </div>
              <div class="col-span-9"></div>
            </div>
          </div>
        </main-card>
      </div>
      <div class="col-span-12">
        <main-card>
          <main-heading>Notfalldatenblatt</main-heading>
          <div class="grid grid-cols-3 mt-5">
            <div>
              <p class="pb-2 text-lg">Art</p>
              <ul class="list-none">
                <li class="text-blue font-bold">Notfalldatenblatt</li>
                <li class="text-blue font-bold">Letztes EKG</li>
                <li class="text-blue font-bold">Anästhesiepass</li>
                <li class="text-blue font-bold">Patientenverfügung</li>
                <!-- ... -->
              </ul>
            </div>
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
            <div>
              <div class="m-auto inline-block float-right">
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

    <template #sidebar>
      <appointment-sidebar />
    </template>
  </page-wrapper>
</template>

<script>
import DoctorsImg from "../../icons/DoctorsImg.vue";

export default {
  components: {
    "doctors-img": DoctorsImg,
  },
  // data() {
  //   return {
  //     date: new Date(),
  //     timezone: "",
  //   };
  // },
};
</script>
