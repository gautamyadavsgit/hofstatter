<template>
  <!-- component for small text or grey text  -->
  <small :class="styles" class="flex text-light-grey">
    <iconify-icon v-if="!post" :icon="icon" :class="icoStyles"></iconify-icon>
    <span class="mx-1"><slot></slot></span>
    <iconify-icon v-if="post" :icon="icon" :class="icoStyles"></iconify-icon>
  </small>
</template>

<script>
export default {
  props: {
    // icon for adding the icon
    icon: {
      type: String,
      required: true,
    },
    // check if the icon is prefix or postfix
    post: {
      type: Boolean,
      default: false,
    },
    styles: {
      type: String,
      default: "text-xs",
    },
    icoStyles: {
      type: String,
      default: "text-base",
    },
  },
};
</script>
