<!-- base componnt for headings -->
<template>
  <h2 class="font-oxygen font-bold whitespace-nowrap" :class="customStyle">
    <slot> </slot>
  </h2>
</template>

<script>
export default {
  props: {
    customStyle: {
      type: String,
      required: false,
      default: "text-[20px] leading-[25px] ",
    },
  },
};
</script>
