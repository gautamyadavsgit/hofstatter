<template>
  <div class="container mx-auto">
    <div
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-6 lg:mt-12 p-4"
    >
      <main-card class="!p-5">
        <h4 class="text-blue font-bold text-lg">{{ $t("x-Ray") }}</h4>
        <XRayImg class="m-auto mt-2" />
        <small-text class="mt-4" icon="uiw:reload" icoStyles="text-xs">{{
          $t("min ago", { number: "16" })
        }}</small-text>
      </main-card>
      <main-card class="!p-5">
        <h4 class="text-blue font-bold text-lg">{{ $t("Laboratory") }}</h4>
        <LaborImg class="m-auto mt-2" />
        <small-text class="mt-4" icon="uiw:reload" icoStyles="text-xs">{{
          $t("min ago", { number: "16" })
        }}</small-text>
      </main-card>
      <main-card class="!p-5">
        <h4 class="text-blue font-bold text-lg">
          {{ $t("medical findings") }}
        </h4>
        <MedicalFindingsImgVue class="m-auto mt-2" />
        <small-text class="mt-4" icon="uiw:reload" icoStyles="text-xs">{{
          $t("min ago", { number: "16" })
        }}</small-text>
      </main-card>
      <main-card class="!p-5">
        <h4 class="text-blue font-bold text-lg">{{ $t("Advanced Filter") }}</h4>
        <AdvancedFilterImg class="m-auto mt-2" />
        <small-text class="mt-4" icon="uiw:reload" icoStyles="text-xs">{{
          $t("min ago", { number: "16" })
        }}</small-text>
      </main-card>
    </div>

    <main-table Heading="">
      <template v-slot:Header>
        <th>
          Type
          <iconify-icon
            icon="tabler:arrows-sort"
            class="mt-1 mx-1 inline-block text-black"
          />
        </th>
        <th>{{ $t("institute") }}</th>
        <th>{{ $t("Regarding") }}</th>
        <th>{{ $t("date") }}</th>
      </template>
      <template v-slot:Body>
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
      </template>
    </main-table>
  </div>
</template>
<script>
// importing images
import XRayImg from "@/components/icons/PatientDiagnosticCenter/XRayImg.vue";
import AdvancedFilterImg from "@/components/icons/PatientDiagnosticCenter/AdvancedFilterImg.vue";
import LaborImg from "@/components/icons/PatientDiagnosticCenter/LaborImg.vue";
import MedicalFindingsImgVue from "@/components/icons/PatientDiagnosticCenter/MedicalFindingsImg.vue";
import DateHelper from "@/mixins/DateHelper";

export default {
  // using date helper mixins for formate date and time
  mixins: [DateHelper],
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
          Datum: this.formatDateTime(new Date()),
        },
        {
          id: 2,
          Type: "Labor",
          Institut: "Labor Lang",
          Betreff: "Blutbefund",
          Datum: this.formatDateTime(new Date("03/25/2018")),
        },
        {
          id: 3,
          Type: "PCR Befund",
          Institut: "PVE",
          Betreff: "Ergebnis PCR Befund COVID 19",
          Datum: this.formatDateTime(new Date("05/21/2019 12:03")),
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
