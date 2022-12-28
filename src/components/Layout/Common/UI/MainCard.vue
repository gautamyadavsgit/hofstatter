<!-- base component for buttons -->
<template>
  <div
    class="h-auto w-auto bg-white shadow-[0px_0px_6px_6px_#E7EEF6] hover:shadow-[4px_4px_10px_#2e319299] transition delay-100 ease-in-out relative my-2 mx-1 font-oxygen rounded-[10px] px-2 py-2 md:px-4 md:py-4"
    :class="customStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    customStyle: {
      type: String,
      required: false,
    },
  },
};
</script>
