<script setup>
import { RouterView } from "vue-router";
import "./style.css";
import store from "./store/store";

if (localStorage.getItem("login")) {
  store.commit("login/autoLogin");
}
</script>

<template>
  <RouterView v-slot="slotProps" >
  <Transition name="fade" mode="out-in" >
    <component :is="slotProps.Component"></component>
  </Transition>
  </RouterView>
</template>
