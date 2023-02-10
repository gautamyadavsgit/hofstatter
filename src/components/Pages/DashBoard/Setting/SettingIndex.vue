<template>
  <div class="grid grid-cols-12 mt-3 md:mt-12">
    <div class="md:col-span-11 col-span-12">
      <main-card>
        <main-heading>{{ Heading }}</main-heading>
        <!-- main-profile-area -->
        <AccountSettingHeader />
        <RouterView />
      </main-card>
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
  watch: {
    $route() {
      if (this.$route.name === "AccountSetting") {
        this.Heading = "Account Setting";
      }
      if (this.$route.name === "ProfileSetting") {
        this.Heading = "Profil Bearbeiten";
      }
    },
  },
};
</script>
