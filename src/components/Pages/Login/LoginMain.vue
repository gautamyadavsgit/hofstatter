<!-- // login wrapper for all the login views -->
<template>
  <div class="container m-auto font-oxygen">
    <login-card> <logo-area></logo-area><router-view></router-view></login-card>
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
