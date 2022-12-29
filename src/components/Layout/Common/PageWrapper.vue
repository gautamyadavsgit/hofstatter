<!-- component for wrapping pages -->
<template>
  <div class="h-full max-w-screen-2xl m-auto font-oxygen">
    <div class="flex flex-row bg-white">
      <!-- sidenav -->

      <div
        class="bg-white w-20 fixed hidden md:static md:block z-50"
        v-if="navBar"
      >
        <div class="fixed z-50">
          <side-nav></side-nav>
        </div>
      </div>

      <div class="w-full">
        <div
          class="md:px-4 md:pb-4 text-gray-700 bg-[#E7EEF680] w-full md:h-screen md:overflow-y-scroll md:rounded-l-[30px]"
        >
          <div class="w-full" :class="sidebar ? 'md:flex' : ''">
            <!-- set the div width of 70% if page has sidebar -->
            <div :class="sidebar ? 'md:w-[70%]' : 'col-span-12'">
              <!-- adding top navigation bar -->
              <top-nav></top-nav>
              <!-- mobile menu -->
              <mobile-menu class="md:hidden"></mobile-menu>

              <!-- main page content -->
              <slot></slot>
            </div>
            <!-- if condition for checking if page has sidebar -->
            <div v-if="sidebar" class="md:w-[30%]">
              <div class="top-[0] sticky">
                <slot name="sidebar"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="clear-both"></div>
</template>

<script>
// import { defineAsyncComponent } from "vue";
// const SideNavVue = defineAsyncComponent(() => import("./Menus/SideNav.vue"));
// const TopNavVue = defineAsyncComponent(() => import("./Menus/TopNav.vue"));
// const MobileMenu = defineAsyncComponent(() => import("./Menus/MobileMenu.vue"));
import SideNavVue from "./Menus/SideNav.vue";
import TopNavVue from "./Menus/TopNav.vue";
import MobileMenu from "./Menus/MobileMenu.vue";
export default {
  props: {
    sidebar: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      navBar: true,
    };
  },
  components: {
    "side-nav": SideNavVue,
    "top-nav": TopNavVue,
    // eslint-disable-next-line vue/no-unused-components
    "mobile-menu": MobileMenu,
  },
};
</script>
