<script setup>
import { RouterView } from "vue-router";
import "./style.css";
import store from "./store/store";

if (localStorage.getItem("token") && localStorage.getItem("userId")) {
  store.commit("login/autoLogin");
}
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <!-- Use any custom transition and  to `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
