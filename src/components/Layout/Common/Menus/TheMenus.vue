<template>
  <!-- themenus component for adding menus in both desktop and mobile  -->

  <nav-bar-link
    :link="{ name: 'dashboard' }"
    icon="ci:home-alt-fill"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :class="cStyle"
    :link="{ name: 'PatientAppoinetments' }"
    icon="healthicons:i-schedule-school-date-time"
  ></nav-bar-link>
  <nav-bar-link
    :link="{ name: 'Requests' }"
    icon="carbon:request-quote"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :link="{ name: 'HealthStatus' }"
    icon="ri:heart-pulse-fill"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :link="{ name: 'Medications' }"
    icon="healthicons:medicines"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :link="{ name: 'PatientVaccination' }"
    icon="bxs:injection"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :link="{ name: 'Questions' }"
    icon="mdi:question-mark-circle"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :link="{ name: 'PatientChat' }"
    icon="entypo:chat"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :link="{ name: 'PatientDiagnosticCenter' }"
    icon="fa-regular:hospital"
    :class="cStyle"
  ></nav-bar-link>
  <!-- checing sidenav prop for give space only in the desktop -->
  <div v-if="sideNav" class="mt-10 inline-block"></div>
  <nav-bar-link
    :link="{ name: 'Setting' }"
    icon="ant-design:setting-filled"
    :class="cStyle"
  ></nav-bar-link>
  <nav-bar-link
    :link="{ name: 'AccessLog' }"
    icon="mdi:folder-user"
    :class="cStyle"
  ></nav-bar-link>
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <nav-bar-link
    :link="{ name: 'MyProfile' }"
    icon="mdi:user"
    :class="cStyle"
  ></nav-bar-link>
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
    // sideNav prop for adding gap between the main menus and profile menus in the dashabord
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
