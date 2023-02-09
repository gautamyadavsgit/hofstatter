<template>
  <!-- themenus component for adding menus in both desktop and mobile  -->
  <nav-bar-link
    link="/dashboard"
    icon="ci:home-alt-fill"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :class="cStyle"
    link="/appointments"
    icon="healthicons:i-schedule-school-date-time"
  ></nav-bar-link>
  <nav-bar-link
    link="/requests"
    icon="carbon:request-quote"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    link="/health-status"
    icon="ri:heart-pulse-fill"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    link="/medications"
    icon="healthicons:medicines"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    link="/vaccination"
    icon="bxs:injection"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    link="/questions"
    icon="mdi:question-mark-circle"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link link="/chat" icon="entypo:chat" :class="cStyle"></nav-bar-link>
  <nav-bar-link
    link="/diagnostic-center"
    icon="fa-regular:hospital"
    :class="cStyle"
  ></nav-bar-link>
  <!-- checing sidenav prop for give space only in the desktop -->
  <div v-if="sideNav" class="mt-10 inline-block"></div>
  <nav-bar-link
    link="/account-setting"
    icon="ant-design:setting-filled"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link link="/" icon="mdi:folder-user" :class="cStyle"></nav-bar-link>
  <nav-bar-link link="/" icon="mdi:user" :class="cStyle"></nav-bar-link>
</template>

<script>
import { defineAsyncComponent } from "vue";
const NavBarLinkVue = defineAsyncComponent(() => import("./NavBarLink.vue"));
export default {
  props: {
    cStyle: {
      Type: String,
      required: false,
    },
    sideNav: {
      Type: Boolean,
      required: false,
    },
  },
  components: {
    "nav-bar-link": NavBarLinkVue,
  },
};
</script>
