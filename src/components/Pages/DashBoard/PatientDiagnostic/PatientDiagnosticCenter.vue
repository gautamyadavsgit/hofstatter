<template>
  <page-wrapper>
    <div class="grid grid-cols-2 md:grid-cols-6 mt-6 md:mt-12 p-4">
      <main-card class="!p-5">
        <h4 class="text-blue font-bold text-lg">Röntgen</h4>
        <XRayImg class="m-auto mt-2" />
        <small-text class="mt-4" icon="uiw:reload" icoStyles="text-xs"
          >16 min ago</small-text
        >
      </main-card>
      <main-card class="!p-5">
        <h4 class="text-blue font-bold text-lg">Labor</h4>
        <LaborImg class="m-auto mt-2" />
        <small-text class="mt-4" icon="uiw:reload" icoStyles="text-xs"
          >16 min ago</small-text
        >
      </main-card>
      <main-card class="!p-5">
        <h4 class="text-blue font-bold text-lg">Arztbefunde</h4>
        <MedicalFindingsImgVue class="m-auto mt-2" />
        <small-text class="mt-4" icon="uiw:reload" icoStyles="text-xs"
          >16 min ago</small-text
        >
      </main-card>
      <main-card class="!p-5">
        <h4 class="text-blue font-bold text-lg">Erweiterter Filter</h4>
        <AdvancedFilterImg class="m-auto mt-2" />
        <small-text class="mt-4" icon="uiw:reload" icoStyles="text-xs"
          >16 min ago</small-text
        >
      </main-card>
    </div>
    <div class="w-full overflow-scroll no-scrollbar">
      <div class="w-full md:my-4">
        <div class="flex md:justify-end p-4 md:p-0">
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
        <!-- <table
        class="w-full mt-6 table-fixed rounded-md border-collapse border-spacing-7"
        cellpadding="12px"
      >
        <tr class="main-card">
          <th class="text-xl">
            Type
            <iconify-icon
              icon="tabler:arrows-sort"
              class="mt-1 mx-1 inline-block"
            />
          </th>
          <th class="text-xl">
            Type
            <iconify-icon
              icon="tabler:arrows-sort"
              class="mt-1 mx-1 inline-block"
            />
          </th>
          <th class="text-xl">
            Type
            <iconify-icon
              icon="tabler:arrows-sort"
              class="mt-1 mx-1 inline-block"
            />
          </th>
          <th class="text-xl">
            Type
            <iconify-icon
              icon="tabler:arrows-sort"
              class="mt-1 mx-1 inline-block"
            />
          </th>
          <th class="text-xl">
            Type
            <iconify-icon
              icon="tabler:arrows-sort"
              class="mt-1 mx-1 inline-block"
            />
          </th>
        </tr>
        <tr class="main-card mt-2">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table> -->

        <main-card customStyle="!mt-4 !w-[1180px] lg:!w-full">
          <table class="table-fixed w-full border-collapse">
            <tr>
              <th>
                Type
                <iconify-icon
                  icon="tabler:arrows-sort"
                  class="mt-1 mx-1 inline-block text-black"
                />
              </th>
              <th>Institut</th>
              <th>Betreff</th>
              <th>Datum</th>
            </tr>
          </table>
        </main-card>
        <main-card
          customStyle="!mt-4 !w-[1180px] lg:!w-full"
          v-for="dummyData in dummyDatas"
          :key="dummyData.id"
        >
          <table class="table-fixed w-[1180px] border-collapse">
            <tr>
              <td>
                <a href="" download>
                  <iconify-icon
                    icon="ant-design:folder-open-outlined"
                    class="inline-block text-2xl font-bold text-light-blue mr-2"
                  />{{ dummyData.Type }}</a
                >
              </td>
              <td>{{ dummyData.Institut }}</td>
              <td>{{ dummyData.Betreff }}</td>
              <td>{{ dummyData.Datum }}</td>
            </tr>
          </table>
        </main-card>
      </div>
    </div>
  </page-wrapper>
</template>
<script>
// importing images
import XRayImg from "@/components/icons/PatientDiagnosticCenter/XRayImg.vue";
import AdvancedFilterImg from "@/components/icons/PatientDiagnosticCenter/AdvancedFilterImg.vue";
import LaborImg from "@/components/icons/PatientDiagnosticCenter/LaborImg.vue";
import MedicalFindingsImgVue from "@/components/icons/PatientDiagnosticCenter/MedicalFindingsImg.vue";

export default {
  components: {
    XRayImg,
    AdvancedFilterImg,
    LaborImg,
    MedicalFindingsImgVue,
  },
  data() {
    return {
      dummyDatas: [
        {
          id: 1,
          Type: "Röntgen",
          Institut: "PVE",
          Betreff: "Lungenröntgen",
          Datum: new Date(),
        },
        {
          id: 2,
          Type: "Labor",
          Institut: "Labor Lang",
          Betreff: "Blutbefund",
          Datum: new Date("03/25/2015"),
        },
        {
          id: 3,
          Type: "PCR Befund",
          Institut: "PVE",
          Betreff: "Ergebnis PCR Befund COVID 19",
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
/* table tr th:last-child,
table tr td:last-child {
  border-right: 1px solid white;
  border-radius: 0px 10px 10px 0px;
}
table tr th:first-child,
table tr td:first-child {
  border-left: 1px solid white;
  border-radius: 10px 0px 0px 10px;
}
th {
  color: black;
}
tr {
  margin-top: 20px;
}
table {
  border-spacing: 0 1em;
} */
</style>
