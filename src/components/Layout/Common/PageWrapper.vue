<!-- component for wrapping pages -->
<template>
  <div class="h-full max-w-screen-2xl m-auto font-oxygen">
    <div class="flex flex-row bg-white">
      <!-- sidenav -->
      <button
        class="fixed py-2 top-52 right-[-0px] bg-blue z-[99] md:hidden block"
        @click="showNabar"
      >
        <main-icon
          icon="ph:caret-double-left-bold"
          bgStyle="bg-blue !px-0"
          icoStyle="text-white text-3xl"
        ></main-icon>
      </button>
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
import SideNavVue from "./SideNav.vue";
import TopNavVue from "./TopNav.vue";
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
  },
  methods: {
    showNabar() {
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
</style>
