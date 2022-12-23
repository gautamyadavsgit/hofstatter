<!-- component for wrapping pages -->
<template>
  <div class="h-full bg-white">
    <div class="flex flex-row">
      <!-- sidenav -->
      <div class="bg-white block w-20">
        <div class="fixed z-50">
          <side-nav></side-nav>
        </div>
      </div>
      <div>
        <div
          class="px-4 pb-4 text-gray-700 bg-[#E7EEF680] h-screen w-screen fixed overflow-y-scroll rounded-l-[30px]"
        >
          <div class="grid grid-cols-12">
            <!-- set the div width of 70% if page has sidebar -->
            <div :class="sidebar ? 'col-span-9' : 'col-span-12'">
              <!-- adding top navigation bar -->
              <top-nav></top-nav>

              <slot name="main"> </slot>
            </div>
            <!-- if condition for checking if page has sidebar -->
            <div v-if="sidebar" class="col-span-3">
              <slot name="sidebar"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="clear-both"></div>
</template>

<script>
import SideNavVue from './SideNav.vue'
import TopNavVue from './TopNav.vue'
export default {
  props: {
    sidebar: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    'side-nav': SideNavVue,
    'top-nav': TopNavVue,
  },
}
</script>
