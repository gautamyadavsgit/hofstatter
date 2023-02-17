<script setup>
import { RouterView } from "vue-router";
import "./style.css";
import store from "./store/store";

if (localStorage.getItem("login")) {
  store.commit("login/autoLogin");
}
</script>

<template>
  <RouterView />
</template>
