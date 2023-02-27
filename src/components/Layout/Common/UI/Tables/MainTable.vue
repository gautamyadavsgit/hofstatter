<template>
  <div class="w-full overflow-scroll no-scrollbar mt-6 md:mt-12 p-4">
    <div class="w-full md:my-4">
      <div class="md:flex md:justify-between p-4 md:p-0">
        <div>
          <main-heading v-if="this.Heading">{{
            $t(this.Heading)
          }}</main-heading>
        </div>
        <div class="md:w-2/5">
          <!-- filter and search form -->
          <FilterForm />
        </div>
      </div>

      <main-card customStyle="!mt-4 !w-[580px] lg:!w-full">
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
  },
  components: {
    FilterForm, // registering filter form component for filter and search
  },
  data() {
    return {
      dummyDatas: [
        {
          id: 1,
          Name: "Vorsorgeuntersuchung",
          Status: "Open",
          Kategorie: "Vorsorge",
          Notes: "Dr. Julia Saleta",
        },
        {
          id: 2,
          Name: "Impffragebogen",
          Status: "Open",
          Kategorie: "Aufklärungsbogen",
          Notes: "Dr. Pickem Christian",
        },
        {
          id: 3,
          Name: "COPD Lungentest (CAT-Score)",
          Status: "Closed",
          Kategorie: "Lunge",
          Notes: "Dr. Pickem Christian",
        },
      ],
      dummyDatas2: [
        {
          id: 1,
          Name: "Depressionsvorsorge",
          Status: "Open",
          Kategorie: "Vorsorge",
          Notes: "Dr. Julia Saleta",
        },
        {
          id: 2,
          Name: "Chronische Wunden",
          Status: "Open",
          Kategorie: "Prävention",
          Notes: "Dr. Pickem Christian",
        },
        {
          id: 3,
          Name: "Alkoholcheck",
          Status: "Closed",
          Kategorie: "Prävention",
          Notes: "---",
        },
      ],
    };
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
