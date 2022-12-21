<template>
  <h2 class="font-oxygen font-bold" :class="customStyle">
    <slot> </slot>
  </h2>
</template>

<script>
export default {
  props: {
    customStyle: {
      type: String,
      required: false,
      default: 'font-[20px] leading-[25px] ',
    },
  },
}
</script>
