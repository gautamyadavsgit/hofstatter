<!-- component for wrapping pages -->
<template>
  <div class="h-full max-w-screen-2xl m-auto font-oxygen">
    <div class="flex flex-row bg-white">
      <!-- sidenav -->
      <div class="bg-white block w-20">
        <div class="fixed z-50">
          <side-nav></side-nav>
        </div>
      </div>
      <div>
        <div
          class="px-4 pb-4 text-gray-700 bg-[#E7EEF680] w-full h-screen overflow-y-scroll rounded-l-[30px]"
        >
          <div class="w-full flex">
            <!-- set the div width of 70% if page has sidebar -->
            <div :class="sidebar ? 'w-[70%]' : 'col-span-12'">
              <!-- adding top navigation bar -->
              <top-nav></top-nav>
              <!-- main page content -->
              <slot></slot>
            </div>
            <!-- if condition for checking if page has sidebar -->
            <div v-if="sidebar" class="w-[30%]">
              <div class="sticky top-[0]">
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
  components: {
    "side-nav": SideNavVue,
    "top-nav": TopNavVue,
  },
};
</script>
