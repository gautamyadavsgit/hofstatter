<template>
  <div
    class="text-center grid grid-cols-4 justify-between gap-6 chat-shadow-double h-[70px]"
  >
    <router-link
      to="/chat/all"
      class="text-sm font-bold text-black border-b-4 border-blue font-oxygenLight p-5"
      >All</router-link
    >
    <router-link
      to="/chat/unread"
      class="text-sm text-[#82837E] font-oxygenLight p-5"
      >Unread</router-link
    >

    <router-link
      to="/chat/unresolve"
      class="text-sm text-[#82837E] font-oxygenLight p-5"
      >Unresolve</router-link
    >
    <a
      href="javascript:void(0)"
      class="text-sm text-[#82837E] font-oxygenLight p-5"
      >Filter</a
    >
  </div>
</template>

<script></script>
