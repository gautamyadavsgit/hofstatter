<template>
  <section class="md:px-1 lg:px-0">
    <div class="grid grid-cols-12 mt-12">
      <div class="col-span-12 lg:col-span-10 px-2 md:px-0 md:flex justify-between mb-5">
        <div>
          <main-heading>
            {{ $t("Requests") }}
            <span
              class="bg-[#F8CBC8] font-bold ml-2 px-3 py-2 text-center rounded-full text-[#E20603]"
              >3</span
            >
          </main-heading>
        </div>
        <div>
          <!-- search form -->
          <form
            class="flex justify-between mt-4 md:mt-0"
            @submit.prevent="serachQuestion"
          >
            <input
              type="text"
              class="w-64 rounded-full h-9 border-none mr-2 px-4"
              :placeholder="$t('search')"
              v-model="search"
              @input="serachQuestion"
            />
            <main-button :link="false" mode="!py-1 !px-3">{{
              $t("Apply")
            }}</main-button>
          </form>
        </div>
      </div>
      <!-- question divs  -->
    </div>
    <div class="grid grid-cols-12" v-if="ques.length > 0">
      <div class="col-span-12 md:col-span-6 lg:col-span-5" v-for="que in ques" :key="que.id">
        <main-card customStyle="!py-4 !px-4">
          <div class="flex">
            <div class="w-9/12">
              <main-heading customStyle="text-blue md:text-xl text-md">{{
                que.heading
              }}</main-heading>
              <p class="text-[#82837E] font-normal text-base mt-2">
                {{ que.para }}
              </p>
              <main-button class="mt-6 inline-block text-sm">
                {{ $t("View More") }}
              </main-button>
            </div>
            <div class="w-3/12 flex items-center">
              <UnsuscribeIcon class="m-auto" />
            </div>
          </div>
        </main-card>
      </div>
      <!-- start pagination code -->
      <div
        class="md:col-span-10 col-span-12 mt-16 pb-16 m-auto w-full"
        v-if="ques.length > 6"
      >
        <paginate-pagination
          :pageCount="3"
          :page-range="2"
          :clickHandler="handlerPaginate"
          :prevText=" '< ' + $t('prev') "
          :nextText="$t('next') + ' >' "
          :containerClass="'que-pagination'"
        />
      </div>
    </div>
    
    <main-card  v-else class="md:!w-1/2 !m-auto !mt-20 p-4">
     <h4 class="text-2xl text-center font-oxygenBold">{{$t('No Result')}}</h4>
    </main-card>
    
  </section>
</template>

<script>
import UnsuscribeIcon from "@/components/icons/Anfragen/UnsubscribeIcon.vue";
// import TransfersIcon from "@/components/icons/Anfragen/TransfersIcon.vue";
// import XRayImg from "@/components/icons/PatientDiagnosticCenter/XRayImg.vue";
// import AttesteIcon from "@/components/icons/Anfragen/AttesteIcon.vue";
// import PflegefreistellungIcon from "@/components/icons/Anfragen/PflegefreistellungIcon.vue";
// import NurseIcon from "@/components/icons/Anfragen/NurseIcon.vue";

// imorting pagination Library
import Paginate from "vuejs-paginate-next";

export default {
  data() {
    return {
      search: "",
      ques: [],
      // dummy data for pagination
      dummyques: [
        {
          id: 1,
          heading: "Abmelden vom Krankenstand",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 2,
          heading: "Überweisungen, Verordnungen",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 3,
          heading: "Rehaantrag stellen",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 4,
          heading: "Atteste",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 5,
          heading: "Pflegefreistellung",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 6,
          heading: "Pflegeheimantrag",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
      ],
    };
  },
  components: {
    UnsuscribeIcon,
    "paginate-pagination": Paginate,
    // XRayImg,
    // TransfersIcon,
    // AttesteIcon,
    // PflegefreistellungIcon,
    // NurseIcon,
  },
  methods: {
    handlerPaginate(page) {
      console.log(page);
    },
    serachQuestion() {
      const data = [];
      this.dummyques.forEach((cv) => {
        const regex = new RegExp(this.search, "i");
        if (regex.test(cv.heading)) {
          data.push(cv);
        }
      });
      this.ques = data;
    },
  },
  created() {
    this.ques = this.dummyques;
  },
};
</script>
