<!-- base componnt for headings -->
<template>
  <h2
    class="font-oxygenBold main-heading font-bold whitespace-nowrap text-black capitalize"
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

<style>
@media screen and (min-width: 720px) {
  .main-heading:not(.main-card .main-heading) {
    margin-left: 5px;
  }
}
</style>
