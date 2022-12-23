<!-- base component for using icons -->
<template>
  <span class="py-2 px-2 inline-block rounded-lg mx-1" :class="bgStyle">
    <iconify-icon :icon="icon" class="text-2xl" :class="icoStyle" :inline:="true"></iconify-icon>
  </span>
</template>
<script>
export default {
  props: {
    // bg style for background styles
    bgStyle: {
      type: String,
      required: false,
      default: 'bg-blue',
    },
    // icoStyle for icon style
    icoStyle: {
      type: String,
      required: false,
      default: 'border-blue',
    },
    // icon for icon name
    icon: {
      type: String,
      required: false,
    },
  },
}
</script>
