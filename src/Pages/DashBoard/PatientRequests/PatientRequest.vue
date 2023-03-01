<template>
  <div class="">
    <main-table Heading="Personal Questionnaires" cwidth="!w-[1080px]">
      <template v-slot:Header>
        <th class="w-[35%]">{{ $t("Name") }}</th>
        <th>{{ $t("Status") }}</th>
        <th>{{ $t("Category") }}</th>
        <th>{{ $t("Notes") }}</th>
      </template>
      <template v-slot:Body>
        <main-card
          customStyle="!mt-4 !w-[1080px] lg:!w-full !mx-0"
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
      </template>
    </main-table>
    <main-table Heading="Allgemeine Fragebögen" cwidth="!w-[1080px]">
      <template v-slot:Header>
        <th class="w-[35%]">{{ $t("Name") }}</th>
        <th>{{ $t("Status") }}</th>
        <th>{{ $t("Category") }}</th>
        <th>{{ $t("Notes") }}</th>
      </template>
      <template v-slot:Body>
        <main-card
          customStyle="!mt-4 !w-[1080px] lg:!w-full !mx-0"
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
      </template>
      <template v-slot:body>
        <main-card
          customStyle="!mt-4 !w-[1080px] lg:!w-full"
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
      </template>
    </main-table>
  </div>
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
