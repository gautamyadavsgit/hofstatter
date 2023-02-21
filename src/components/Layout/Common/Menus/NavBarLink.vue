<!-- component for adding navbar links -->
<template>
  <li>
    <router-link :to="link">
      <span>
        <iconify-icon
          :icon="icon"
          class="text-[30px] m-auto text-site-grey hover:text-blue"
        />
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    // data prop for link
    link: {
      required: true,
      default: "/",
    },
    // data prop for icon
    icon: {
      type: String,
      required: true,
      default: "material-symbols:home",
    },
  },
};
</script>
