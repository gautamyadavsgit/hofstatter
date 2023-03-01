<template>
  <div class="col-span-12 py-6 px-2">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-1">
        <main-heading>{{ $t("Appointments today") }}</main-heading>
        <p class="text-light-grey text-base font-oxygenLight mt-2">
          6th wednesday, December
        </p>
      </div>
      <div class="md:flex justify-between col-span-2">
        <div class="col-span-1 md:col-span-2 flex justify-between mt-2">
          <label class="text-sm my-auto md:my-2 md:mr-2 font-bold block md:inline"
            >Filter</label
          >
          <select
            class="h-9 border-1 max-sm:w-56 border-[#82837E26] rounded-md text-sm !font-oxygen"
            v-model="searchFilter"
          >
            <option value="all" class="font-oxygen">All</option>
            <option value="dr" class="font-oxygen">Doctor</option>
          </select>
        </div>
        <div class="col-span-1 md:col-span-2">
          <form
            class="flex justify-between mt-4 md:mt-2"
            @submit="formSubmitHandler"
          >
            <input
              type="text"
              class="w-56 rounded-full h-9 border-none mr-2 px-4"
              :placeholder="$t('search')"
              v-model="searchQuery"
            />
            <main-button :link="false" mode="!py-1 !px-3">{{
              $t("Apply")
            }}</main-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["filter-data"], // emitting the search form data with filterData emits
  data() {
    return {
      searchQuery: "",
      searchFilter: "all",
    };
  },
  methods: {
    formSubmitHandler(e) {
      e.preventDefault();
      this.$emit("filter-data", {
        searchQuery: this.searchQuery, //emitting searchQuery input
        searchFilter: this.searchFilter, // emitting searchFilter input
      });
    },
  },
};
</script>
