<template>
  <section>
    <main-table Heading="AccessLog.Login Data" cwidth="!w-full">
      <template v-slot:Header>
        <th class="w-[60%]">{{ $t("AccessLog.Description") }}</th>
        <th class="">{{ $t("AccessLog.Time") }}</th>
        <th class="float-right">{{ $t("AccessLog.time stamp") }}</th>
      </template>
      <template v-slot:Body>
        <main-card
          customStyle="!mt-4 !w-[580px] md:!w-full"
          v-for="dummyData in dummyDatas"
          :key="dummyData.id"
        >
          <table class="table-fixed !w-[580px] md:!w-full border-collapse">
            <tr>
              <td class="w-[60%]">
                {{ dummyData.Type }}
              </td>
              <td>{{ dummyData.Institut }}</td>
              <td class="float-right">
                {{ dummyData.Datum.toISOString().substring(0, 10) + "     " }}
                {{ "    " + dummyData.Datum.toLocaleTimeString() }}
              </td>
            </tr>
          </table>
        </main-card>
      </template>
    </main-table>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dummyDatas: [
        {
          id: 1,
          Type: "John Doe (ich)",
          Institut: "30 min",
          Datum: new Date(),
        },
        {
          id: 2,
          Type: "John Doe (ich)",
          Institut: "2 hours",
          Datum: new Date("03/25/2015"),
        },
        {
          id: 3,
          Type: "Isabell Doe (Vertretungsbefugt)",
          Institut: "1:30 min",
          Datum: new Date("2015"),
        },
        {
          id: 4,
          Type: "John Doe (ich)",
          Institut: "1:30 min",
          Datum: new Date("2015"),
        },
        {
          id: 5,
          Type: "John Doe (ich)",
          Institut: "1:30 min",
          Datum: new Date("2015"),
        },
        {
          id: 6,
          Type: "John Doe (ich)",
          Institut: "1:30 min",
          Datum: new Date("2015"),
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
