<template>
  <!-- This is an example component -->
  <div class="w-20">
    <div class="z-50 mt-7 w-20 invisible md:visible">
      <a href="#">
        <dashboard-logo
          class="rounded-full w-10 h-10 mb-10 mx-auto"
        ></dashboard-logo>
      </a>
    </div>
    <div
      class="md:h-[80%] h-[70%] fixed overflow-scroll no-scrollbar bg-white md:bg-transparent"
    >
      <nav class="w-20 justify-between flex flex-col h-auto">
        <div class="my-10">
          <ul>
            <the-menu cStyle="mb-6" :sideNav="true" />
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import DashboardLogo from "../../../icons/DashboardLogo.vue";
import TheMenusVue from "./TheMenus.vue";

export default {
  components: {
    "dashboard-logo": DashboardLogo,
    "the-menu": TheMenusVue,
  },
};
</script>
