<template>
  <div class="grid grid-cols-12 mt-3 md:mt-12">
    <div class="col-span-12">
      <!-- main-profile-area -->
      <div class="main-card">
        <main-heading>{{ $t(Heading) }}</main-heading>

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
  methods: {
    addHeading() {
      if (this.$route.name == "AccountSetting") {
        this.Heading = "accountSetting";
      }
      if (this.$route.name == "ProfileSetting") {
        this.Heading = "editProfile";
      }
    },
  },
  watch: {
    $route() {
      this.addHeading();
    },
  },
  created() {
    this.addHeading();
  },
  updated() {
    this.addHeading();
  },
};
</script>
