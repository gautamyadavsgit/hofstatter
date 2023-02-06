<template>
  <div class="col-span-12 py-6 px-2">
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-1">
        <main-heading>Heute Termine</main-heading>
        <p class="text-light-grey text-base font-oxygenLight mt-2">
          6th wednesday, December
        </p>
      </div>
      <div class="col-span-1 md:col-span-2">
        <form
          class="flex justify-between mt-4 md:mt-2"
          @submit="formSubmitHandler"
        >
          <label class="text-sm m-auto mr-2 font-bold block md:inline"
            >Filter</label
          >
          <select
            class="w-64 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2"
            v-model="searchFilter"
          >
            <option value="all" class="font-oxygen">All</option>
            <option value="dr" class="font-oxygen">Doctor</option>
          </select>
          <input
            type="text"
            class="md:w-64 w-36 rounded-full h-9 border-none mr-2 px-4"
            placeholder="suche"
            v-model="searchQuery"
          />
          <main-button :link="false" mode="!py-1 !px-3">Apply</main-button>
        </form>
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
