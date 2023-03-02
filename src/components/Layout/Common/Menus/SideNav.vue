<template>
  <!-- sidebar nav component for show navigation only in the desktop -->
  <div class="w-20">
    <div class="z-50 mt-7 w-20 invisible md:visible">
      <a href="#">
        <dashboard-logo
          class="rounded-full w-10 h-10 mb-10 mx-auto"
        ></dashboard-logo>
      </a>
    </div>
    <div
      class="md:h-[80%] h-[70%] fixed overflow-scroll no-scrollbar overflow-x-hidden bg-white md:bg-transparent"
    >
      <nav class="w-20 justify-between flex flex-col h-auto">
        <div class="my-10">
          <ul>
            <!-- themenu component for add menus in the sidenav addding a extra prop sideNav = true for adding gap between profile menus and main menus -->
            <the-menu cStyle="mb-6" :sideNav="true" />
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
const DashboardLogo = defineAsyncComponent(() =>
  import("../../../icons/DashboardLogo.vue")
);
const TheMenusVue = defineAsyncComponent(() => import("./TheMenus.vue"));

export default {
  components: {
    "dashboard-logo": DashboardLogo,
    "the-menu": TheMenusVue,
  },
};
</script>
