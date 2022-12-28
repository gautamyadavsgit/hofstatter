<template>
  <nav-bar-link
    link="/dashboard"
    icon="ci:home-alt-fill"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :class="cStyle"
    link="/"
    icon="healthicons:i-schedule-school-date-time"
  ></nav-bar-link>
  <nav-bar-link
    link="/"
    icon="carbon:request-quote"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    link="/"
    icon="ri:heart-pulse-fill"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    link="/"
    icon="healthicons:medicines"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link link="/" icon="bxs:injection" :class="cStyle"></nav-bar-link>
  <nav-bar-link
    link="/"
    icon="mdi:question-mark-circle"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link link="/" icon="entypo:chat" :class="cStyle"></nav-bar-link>
  <div v-if="sideNav" class="mt-10 inline-block"></div>
  <nav-bar-link
    link="/"
    icon="fa-regular:hospital"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    link="/"
    icon="ant-design:setting-filled"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link link="/" icon="mdi:user" :class="cStyle"></nav-bar-link>
</template>

<script>
import NavBarLinkVue from "./NavBarLink.vue";
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
