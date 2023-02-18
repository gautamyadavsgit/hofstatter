<!-- // login wrapper for all the login views -->
<template>
  <div class="container m-auto font-oxygen">
    <login-card>
      <logo-area></logo-area>
      <RouterView v-slot="slotProps">
        <Transition name="fade" mode="out-in">
          <component :is="slotProps.Component" />
        </Transition> </RouterView
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
