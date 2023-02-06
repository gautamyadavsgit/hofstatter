<template>
  <page-wrapper>
    <div class="w-full overflow-scroll no-scrollbar mt-8">
      <div class="w-full md:my-4">
        <div class="md:flex md:justify-between p-4 md:p-0">
          <main-heading>Persönliche Fragebögen</main-heading>
          <div class="md:w-2/5">
            <!-- filter and search form -->
            <form class="flex justify-between mt-4 md:mt-0">
              <label class="text-sm m-auto mr-2 font-bold">Filter</label>
              <select
                class="w-64 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2"
              >
                <option selected value="all" class="font-oxygen">All</option>
              </select>
              <input
                Name="text"
                class="w-64 rounded-full h-9 border-none mr-2 px-4"
                placeholder="suche"
              />
              <main-button :link="false" mode="!py-1 !px-3">Apply</main-button>
            </form>
          </div>
        </div>
        <main-card customStyle="!mt-4 !w-[180px] lg:!w-full">
          <table class="table-fixed w-full border-collapse">
            <tr>
              <th class="w-[35%]">Name</th>
              <th>Status</th>
              <th>Kategorie</th>
              <th>Notes</th>
            </tr>
          </table>
        </main-card>
        <main-card
          customStyle="!mt-4 !w-[1180px] lg:!w-full"
          v-for="dummyData in dummyDatas"
          :key="dummyData.id"
        >
          <table class="table-fixed w-full border-collapse">
            <tr>
              <td class="w-[35%]">
                <a href="" download>
                  <iconify-icon
                    icon="material-symbols:download-sharp"
                    class="inline-block text-3xl font-bold text-cyan mr-2"
                  />
                  <iconify-icon
                    icon="carbon:report"
                    class="inline-block text-3xl font-bold text-site-grey mr-2"
                  />{{ dummyData.Name }}</a
                >
              </td>
              <td
                :class="{
                  '!text-skyblue !font-bold': dummyData.Status === 'Open',
                }"
              >
                {{ dummyData.Status }}
              </td>
              <td>{{ dummyData.Kategorie }}</td>
              <td>{{ dummyData.Notes }}</td>
            </tr>
          </table>
        </main-card>
      </div>
    </div>
    <div class="w-full overflow-scroll no-scrollbar mt-8">
      <div class="w-full md:my-4">
        <div class="md:flex md:justify-between p-4 md:p-0">
          <main-heading>Allgemeine Fragebögen</main-heading>
          <div class="md:w-2/5">
            <!-- filter and search form -->
            <form class="flex justify-between mt-4 md:mt-0">
              <label class="text-sm m-auto mr-2 font-bold">Filter</label>
              <select
                class="w-64 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2"
              >
                <option selected value="all" class="font-oxygen">All</option>
              </select>
              <input
                Name="text"
                class="w-64 rounded-full h-9 border-none mr-2 px-4"
                placeholder="suche"
              />
              <main-button :link="false" mode="!py-1 !px-3">Apply</main-button>
            </form>
          </div>
        </div>
        <main-card customStyle="!mt-4 !w-[180px] lg:!w-full">
          <table class="table-fixed w-full border-collapse">
            <tr>
              <th class="w-[35%]">Name</th>
              <th>Status</th>
              <th>Kategorie</th>
              <th>Notes</th>
            </tr>
          </table>
        </main-card>
        <main-card
          customStyle="!mt-4 !w-[1180px] lg:!w-full"
          v-for="dummyData2 in dummyDatas2"
          :key="dummyData2.id"
        >
          <table class="table-fixed w-full border-collapse">
            <tr>
              <td class="w-[35%]">
                <a href="" download>
                  <iconify-icon
                    icon="material-symbols:download-sharp"
                    class="inline-block text-3xl font-bold text-cyan mr-2"
                  />
                  <iconify-icon
                    icon="carbon:report"
                    class="inline-block text-3xl font-bold text-site-grey mr-2"
                  />{{ dummyData2.Name }}</a
                >
              </td>
              <td
                :class="{
                  '!text-skyblue !font-bold': dummyData2.Status === 'Open',
                }"
              >
                {{ dummyData2.Status }}
              </td>
              <td>{{ dummyData2.Kategorie }}</td>
              <td>{{ dummyData2.Notes }}</td>
            </tr>
          </table>
        </main-card>
      </div>
    </div>
  </page-wrapper>
</template>
<script>
export default {
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
