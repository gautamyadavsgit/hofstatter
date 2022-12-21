<template>
  <!-- This is an example component -->
  <div class="h-full bg-white">
    <div class="flex flex-row">
      <!-- Sidebar -->
      <side-nav></side-nav>

      <div class="px-4 py-4 text-gray-700 bg-[#E7EEF680] h-screen w-screen rounded-l-[30px]">
        <div class="grid grid-cols-12">
          <div :class="sidebar ? 'col-span-9' : 'col-span-12'">
            <top-nav></top-nav>
            <div>
              <slot name="main"> </slot>
            </div>
          </div>
          <div v-if="sidebar" class="col-span-3">
            <slot name="sidebar"></slot>
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
