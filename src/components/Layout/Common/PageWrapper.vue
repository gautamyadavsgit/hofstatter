<!-- component for wrapping pages -->
<template>
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

  <div class="clear-both"></div>
</template>

<script>
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

  components: {
    "top-nav": TopNavVue,
    // eslint-disable-next-line vue/no-unused-components
    "mobile-menu": MobileMenu,
  },
  created() {
    console.log(this.$route.matched[1].props);
  },
};
</script>
