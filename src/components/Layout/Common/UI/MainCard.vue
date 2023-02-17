<!-- base component for buttons -->
<template>
  <Transition name="fade" >
  <div class="main-card" :class="customStyle">
    <slot></slot>
  </div>
</Transition>
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
<style>
.main-card {
  box-shadow: 4px -4px 10px rgba(46, 49, 146, 0.1),
    -4px 4px 10px rgba(46, 49, 146, 0.1);
}
.main-card:hover {
  box-shadow: 4px -4px 10px rgba(46, 49, 146, 0.1),
    -4px 4px 10px rgba(46, 49, 146, 0.6);
}
</style>
