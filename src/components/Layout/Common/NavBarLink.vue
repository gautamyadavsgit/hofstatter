<!-- component for adding navbar links -->
<template>
  <li class="mb-6">
    <router-link :to="link">
      <span>
        <iconify-icon :icon="icon" class="text-[30px] m-auto text-site-grey hover:text-blue" />
      </span>
    </router-link>
  </li>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
  props: {
    link: {
      type: String,
      required: true,
      default: '/',
    },
    icon: {
      type: String,
      required: true,
      default: 'material-symbols:home',
    },
  },
  components: {
    'iconify-icon': Icon,
  },
}
</script>
