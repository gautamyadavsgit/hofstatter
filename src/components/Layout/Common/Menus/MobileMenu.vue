<!-- component for mobile menu show only in the small screen -->
<template>
  <div class="sticky top-24 bg-white z-40">
    <header class="pb-2 pt-3">
      <div
        class="overflow-x-scroll w-screen sidenavScroll pb-3 md:no-scrollbar"
      >
        <ul class="flex [&>*]:mx-4">
          <the-menu />
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
const TheMenusVue = defineAsyncComponent(() => import("./TheMenus.vue"));
export default {
  components: {
    "the-menu": TheMenusVue,
  },
};
</script>
