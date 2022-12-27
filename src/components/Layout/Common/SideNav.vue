<template>
  <!-- This is an example component -->
  <div class="w-20">
    <div class="z-50 mt-7 w-20 invisible md:visible">
      <a href="#">
        <dashboard-logo
          class="rounded-full w-10 h-10 mb-10 mx-auto"
        ></dashboard-logo>
      </a>
    </div>
    <div
      class="h-[80%] fixed overflow-scroll no-scrollbar bg-white md:bg-transparent"
    >
      <nav class="w-20 justify-between flex flex-col h-auto">
        <div class="mt-10">
          <ul>
            <nav-bar-link
              link="/dashboard"
              icon="ci:home-alt-fill"
            ></nav-bar-link>
            <nav-bar-link
              link="/"
              icon="healthicons:i-schedule-school-date-time"
            ></nav-bar-link>
            <nav-bar-link link="/" icon="carbon:request-quote"></nav-bar-link>
            <nav-bar-link link="/" icon="ri:heart-pulse-fill"></nav-bar-link>
            <nav-bar-link link="/" icon="healthicons:medicines"></nav-bar-link>
            <nav-bar-link link="/" icon="bxs:injection"></nav-bar-link>
            <nav-bar-link
              link="/"
              icon="mdi:question-mark-circle"
            ></nav-bar-link>
            <nav-bar-link link="/" icon="entypo:chat"></nav-bar-link>
          </ul>
        </div>
        <div class="mt-10">
          <ul>
            <nav-bar-link link="/" icon="fa-regular:hospital"></nav-bar-link>
            <nav-bar-link
              link="/"
              icon="ant-design:setting-filled"
            ></nav-bar-link>
            <nav-bar-link link="/" icon="mdi:user"></nav-bar-link>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import NavBarLinkVue from "../../Layout/Common/NavBarLink.vue";
import DashboardLogo from "../../icons/DashboardLogo.vue";

export default {
  components: {
    "nav-bar-link": NavBarLinkVue,
    "dashboard-logo": DashboardLogo,
  },
};
</script>
