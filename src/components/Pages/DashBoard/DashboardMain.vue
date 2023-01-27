<template>
  <div class="h-full max-w-screen-2xl m-auto font-oxygen">
    <div class="flex flex-row bg-white">
      <!-- sidenav -->

      <div class="bg-white w-20 fixed hidden md:static md:block z-50">
        <div class="fixed z-50">
          <side-nav></side-nav>
        </div>
      </div>

      <div class="w-full">
        <div
          class="md:px-4 md:pb-4 text-gray-700 bg-[#E7EEF680] w-full md:h-screen md:overflow-y-scroll md:rounded-l-[30px]"
        >
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "../../Layout/Common/Menus/SideNav.vue";
export default {
  components: {
    SideNav,
  },
};
</script>
