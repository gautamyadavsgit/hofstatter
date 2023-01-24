<!-- component for mobile menu show only in the small screen -->
<template>
  <div class="sticky top-24 bg-white z-[99]">
    <header class="pb-2 pt-3">
      <div class="overflow-x-scroll w-screen no-scrollbar">
        <ul class="flex [&>*]:mx-4">
          <the-menu />
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
// import { defineAsyncComponent } from "vue";
// TheMenus componenets for showing the mensu
// const TheMenusVue = defineAsyncComponent(() => import("./TheMenus.vue"));
import TheMenusVue from "./TheMenus.vue";
export default {
  components: {
    "the-menu": TheMenusVue,
  },
};
</script>
