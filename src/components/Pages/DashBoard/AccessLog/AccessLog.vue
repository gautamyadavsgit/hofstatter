<template>
  <div class="w-full overflow-scroll no-scrollbar mt-6 md:mt-12 p-4">
    <div class="w-full md:my-4">
      <div class="md:flex md:justify-between p-4 md:p-0">
        <main-heading>Login-Daten</main-heading>
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
              type="text"
              class="w-64 rounded-full h-9 border-none mr-2 px-4"
              placeholder="suche"
            />
            <main-button :link="false" mode="!py-1 !px-3">Apply</main-button>
          </form>
        </div>
      </div>

      <main-card customStyle="!mt-4 !w-[580px] lg:!w-full">
        <table class="table-fixed w-full border-collapse">
          <tr>
            <th class="w-[60%]">Beschreibung</th>
            <th class="">Zeit</th>
            <th class="float-right">Zeitstempel</th>
          </tr>
        </table>
      </main-card>
      <main-card
        customStyle="!mt-4 !w-[580px] lg:!w-full"
        v-for="dummyData in dummyDatas"
        :key="dummyData.id"
      >
        <table class="table-fixed !w-[580px] lg:!w-full border-collapse">
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
    </div>
  </div>
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
