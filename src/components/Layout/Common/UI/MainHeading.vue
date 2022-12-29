<!-- base componnt for headings -->
<template>
  <h2 class="font-oxygen font-bold whitespace-nowrap" :class="customStyle">
    <slot> </slot>
  </h2>
</template>

<script>
export default {
  props: {
    // custom style props for adding extra classes
    customStyle: {
      type: String,
      required: false,
      default: "md:text-xl text-md",
    },
  },
};
</script>
