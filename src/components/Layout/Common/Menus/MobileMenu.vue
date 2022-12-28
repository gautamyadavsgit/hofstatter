<template>
  <div class="sticky top-24 bg-white z-[99]">
    <header class="pb-2 pt-3">
      <div class="overflow-x-scroll w-screen">
        <ul class="flex [&>*]:mx-4">
          <the-menu />
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
import TheMenusVue from "./TheMenus.vue";
export default {
  components: {
    "the-menu": TheMenusVue,
  },
};
</script>
