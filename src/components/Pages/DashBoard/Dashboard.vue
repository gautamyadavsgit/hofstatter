<template>
  <!-- This is an example component -->
  <div class="h-full bg-white">
    <div class="flex flex-row">
      <!-- Sidebar -->
      <side-nav></side-nav>

      <div
        class="px-4 py-4 text-gray-700 bg-[#E7EEF680] h-screen w-screen rounded-t-[30px] rounded-l-[30px]"
      >
        <top-nav></top-nav>
      </div>
    </div>
  </div>
  <div class="clear-both"></div>
</template>

<script>
import SideNavVue from '../../Layout/Common/SideNav.vue'
import TopNavVue from '../../Layout/Common/TopNav.vue'
export default {
  components: {
    'side-nav': SideNavVue,
    'top-nav': TopNavVue,
  },
}
</script>
