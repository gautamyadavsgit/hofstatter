<!-- base component for buttons -->
<template>
  <div class="main-card" :class="customStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // custom style props for adding extra classes
    customStyle: {
      type: String,
      required: false,
    },
  },
};
</script>
