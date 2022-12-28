<!-- component for wrapping pages -->
<template>
  <div class="h-full max-w-screen-2xl m-auto font-oxygen">
    <div class="flex flex-row bg-white">
      <!-- mobile menu -->
      <mobile-menu></mobile-menu>
      <!-- side button for opening sidenavbar in mobile  -->
      <Teleport to="body">
        <button
          class="border-2 p-0 border-white fixed pt-3 pb-2 top-60 right-0 bg-blue z-[99] md:hidden block rounded-[10px_0px_0px_10px] shadow-[0px_0px_10px_#2e319299] hover:shadow-[4px_4px_10px_#2e319299]"
          @click="showNavbar"
        >
          <main-icon
            icon="fluent:apps-list-24-filled"
            bgStyle="bg-blue !px-0 !py-0"
            icoStyle="text-white text-3xl"
          ></main-icon>
        </button>
      </Teleport>
      <!-- sidenav -->
      <Transition>
        <!-- adding dynamic class for navbar animation -->
        <div class="bg-white w-20 fixed md:static md:block z-50" v-if="navBar">
          <div class="fixed z-50">
            <side-nav></side-nav>
          </div>
        </div>
      </Transition>
      <div>
        <div
          class="md:px-4 md:pb-4 text-gray-700 bg-[#E7EEF680] w-full md:h-screen overflow-y-scroll md:rounded-l-[30px]"
        >
          <div class="w-full" :class="sidebar ? 'md:flex' : ''">
            <!-- set the div width of 70% if page has sidebar -->
            <div :class="sidebar ? 'md:w-[70%]' : 'col-span-12'">
              <!-- adding top navigation bar -->
              <top-nav></top-nav>
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
    "mobile-menu": MobileMenu,
  },
  methods: {
    showNavbar() {
      this.navBar = !this.navBar;
    },
  },
};
</script>

<style scoped>
.v-enter-from {
  left: -100px;
}
.v-enter-to {
  left: 0px;
}

.v-enter-active {
  transition: all 0.3s ease-in-out;
}
.v-leave-from {
  left: 0px;
}
.v-leave-to {
  left: -100px;
}
.v-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
