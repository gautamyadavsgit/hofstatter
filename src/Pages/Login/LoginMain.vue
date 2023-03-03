<!-- This template defines the layout of the login page and uses the LoginCard and LogoArea components -->
<template>
  <div class="container m-auto font-oxygen">

    <!-- The LoginCard component contains the card design and layout for the login page -->
    <login-card>
      <!-- The LogoArea component contains the logo image and styling for the login page -->
      <logo-area></logo-area>

      <!-- The router-view displays the current login view using a custom fade transition -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition> </router-view
    ></login-card>
  </div>
</template>

<script>
import LoginCard from "./LoginComponents/LoginCard.vue";
import LogoArea from "./LoginComponents/LogoArea.vue";

export default {
  components: {
    LoginCard,
    LogoArea,
  },
};
</script>
