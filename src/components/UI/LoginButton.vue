<template>
  <!-- adding  two elements button and link button for submittting the form and the link for the Back button present in the form  -->
  <router-link v-if="link" class="main-button" :to="to" :class="class">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </router-link>
  <button v-else class="main-button" :class="class">
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </button>
</template>

<script>
export default {
  props: {
    class: {
      //  prop for adding dynamic class
      type: String,
      required: false,
      default: null,
    },
    link: {
      //  prop for identifying between button and link
      type: Boolean,
      required: false,
      default: true,
    },
    to: {
      // props for adding link on router link
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>
