<template>
  <div
    class="h-auto w-auto bg-white shadow-[0px_0px_6px_6px_#E7EEF6] relative font-oxygen rounded-[10px] px-4 py-4"
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
}
</script>
