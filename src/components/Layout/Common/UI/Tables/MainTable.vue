<template>
  <div class="w-full overflow-x-scroll lg:overflow-visible mt-6 md:mt-12 px-1">
    <div class="w-full md:my-4">
      <div class="md:flex md:justify-between p-4 md:p-0">
        <div>
          <main-heading v-if="this.Heading">{{
            $t(this.Heading)
          }}</main-heading>
        </div>
        <div class="md:w-3/5 lg:w-2/5">
          <!-- filter and search form -->
          <FilterForm />
        </div>
      </div>

      <main-card :customStyle="'!mt-4 lg:!w-full !mx-0 ' + customClass">
        <table class="table-fixed w-full border-collapse">
          <tr>
            <slot name="Header"></slot>
          </tr>
        </table>
      </main-card>
      <slot name="Body"></slot>
    </div>
  </div>
</template>
<script>
import FilterForm from "./FilterForm.vue";
export default {
  props: {
    Heading: {
      Type: String,
    },
    cwidth: {
      Type: String,
      default: "!w-[580px]",
    },
  },
  components: {
    FilterForm, // registering filter form component for filter and search
  },
  computed: {
    customClass() {
      return this.cwidth;
    },
  },
};
</script>
<style scoped>
td {
  font-size: 16px;
  line-height: 20px;
  color: #82837e;
  margin: auto;
}
td a {
  color: #2e3192;
  font-size: 18px;
  font-weight: bold;
}
th {
  font-size: 20px;
  color: black;
  line-height: 28px;
  font-weight: 700;
  text-align: left;
}
.main-card:hover a svg {
  color: #2e3192 !important;
  transition: 0.5s;
}
</style>
