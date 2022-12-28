<!-- base component for buttons -->
<template>
  <button v-if="!link" :class="mode" class="main-button">
    <slot></slot>
  </button>
  <router-link
    v-else
    :to="to"
    :class="mode"
    class="bg-blue border-2 transition ease-in-out delay-150 border-blue md:px-5 md:py-3 px-3 py-2 rounded-full text-white font-oxygen font-bold text-sm text-center hover:bg-white hover:text-blue max-w-fit max-h-fit"
  >
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: true,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>
