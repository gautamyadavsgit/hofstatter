<template>
  <div
    class="text-center grid grid-cols-4 justify-between items-center gap-6 chat-shadow-double h-[70px]"
  >
    <a
      href="javascript:void(0)"
      class="text-sm border-blue font-oxygenLight cursor-pointer transition-all delay-150 py-5 h-[65px] ease-in-out"
      :class="{ 'text-black border-b-4 font-bold': activeElement == 'all' }"
      @click="applyContactFilter('all')"
      >All</a
    >
    <a
      href="javascript:void(0)"
      class="text-sm text-[#82837E] border-blue font-oxygenLight cursor-pointer transition-all delay-150 py-5 h-[65px] ease-in-out"
      :class="{ 'text-black border-b-4 font-bold': activeElement == 'unread' }"
      @click="applyContactFilter('unread')"
      >Unread</a
    >

    <a
      key="unresolve"
      href="javascript:void(0)"
      class="text-sm text-[#82837E] font-oxygenLight border-blue cursor-pointer transition-all delay-150 py-5 h-[65px] ease-in-out"
      :class="{
        'text-black border-b-4 font-bold': activeElement == 'unresolve',
      }"
      @click="applyContactFilter('unresolve')"
      >Unresolve</a
    >
    <a
      class="text-sm text-[#82837E] font-oxygenLight border-blue cursor-pointer transition-all delay-150 py-5 h-[65px] ease-in-out"
      :class="{ 'text-black border-b-4 font-bold': activeElement == 'filter' }"
      @click="applyContactFilter('filter')"
      >Filter</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      // data property for setting the active class on the a element default is all
      activeElement: "all",
    };
  },
  methods: {
    // trigger an event when clicked on any filter
    applyContactFilter(filter) {
      this.activeElement = filter;
    },
  },
};
</script>
