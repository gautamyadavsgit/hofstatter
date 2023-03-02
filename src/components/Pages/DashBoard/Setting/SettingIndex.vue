<template>
  <div class="grid grid-cols-12 mt-3 md:mt-12">
    <div class="lg:col-span-11 col-span-12">
      <!-- main-profile-area -->
      <div class="main-card">
        <main-heading>{{ Heading }}</main-heading>

        <AccountSettingHeader />
        <router-view v-slot="{ Component, route }">
          <!-- Use any custom transition and  to `fade` -->
          <transition :name="route.meta.transition || 'fade'">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AccountSettingHeader from "./SettingHeader.vue";
export default {
  components: {
    AccountSettingHeader,
  },
  data() {
    return {
      Heading: "",
    };
  },
  // watch: {
  //   $route() {
  //     if (this.$route.name === "AccountSetting") {
  //       this.Heading = "Account Setting";
  //     }
  //     if (this.$route.name === "ProfileSetting") {
  //       this.Heading = "Profil Bearbeiten";
  //     }
  //   },
  // },
};
</script>
