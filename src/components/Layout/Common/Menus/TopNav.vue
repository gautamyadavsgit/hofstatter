<!-- component for top navbar -->
<template>
  <header class="sticky z-50 top-0 bg-[#f3f7fa] pt-4">
    <div class="mx-auto px-2 py-4 flex justify-between">
      <div class="sm:flex">
        <!-- logo -->
        <div class="md:w-48 flex-shrink-0">
          <span class="text-blue text-[26px] font-oxygen font-bold">
            Medical Care
          </span>
        </div>
      </div>
      <div class="flex justify-between">
        <!-- translation -->
        <div class="flex md:w-48 m-auto">
          <div class="relative group">
            <translate-icon> </translate-icon>
            <div
              class="absolute top-12 left-[-50px] hidden group-hover:block bg-white z-40 before:absolute before:bg-blue"
            >
              <ul class="flex justify-center items-center">
                <li
                  class="font-oxygen text-[12px] cursor-pointer py-2 px-4 text-gray-500 border-b-2 border-blue"
                >
                  English
                </li>
                <li
                  class="font-oxygen text-[12px] cursor-pointer py-2 px-4 text-gray-500 border-b-2"
                >
                  German
                </li>
              </ul>
            </div>
          </div>
          <!-- notification -->

          <div class="relative ml-[10px] m-auto">
            <span
              class="animate-ping absolute inline-flex h-[10px] w-[10px] top-[8%] left-[55%] rounded-full bg-blue"
            ></span>
            <iconify-icon
              icon="mdi:bell-notification"
              class="text-[26px] text-blue"
            ></iconify-icon>
          </div>
        </div>

        <!-- user profile -->
        <div class="flex justify-between">
          <div class="hidden md:block">
            <span
              class="font-oxygen font-bold text-[18px] block whitespace-nowrap"
              >John Doe</span
            >
            <span
              class="font-oxygen font-normal text-[16px] inline-block float-right"
              >Patient</span
            >
          </div>
          <div class="ml-[20px]">
            <span>
              <img
                src="https://randomuser.me/api/portraits/women/56.jpg"
                class="w-[50px] h-[50px] rounded-full border-2 border-solid border-black"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import { defineAsyncComponent } from "vue";
// const TranslateIcon = defineAsyncComponent(() =>
//   import("../../../icons/TranslateIcon.vue")
// );
import TranslateIcon from "../../../icons/TranslateIcon.vue";
export default {
  components: {
    "translate-icon": TranslateIcon,
  },
};
</script>
