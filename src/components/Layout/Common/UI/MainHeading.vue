<!-- base componnt for headings -->
<template>
  <h2
    class="font-oxygenBold font-bold whitespace-nowrap text-black capitalize "
    :class="customStyle"
  >
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
