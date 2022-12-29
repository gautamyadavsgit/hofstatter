<template>
  <page-wrapper>
    <div class="grid grid-cols-12 mt-12">
      <div class="col-span-10 px-2 md:px-0 md:flex justify-between mb-5">
        <div>
          <main-heading>
            Anfragen
            <span
              class="bg-[#F8CBC8] font-bold ml-2 px-3 py-2 text-center rounded-full text-[#E20603]"
              >3</span
            >
          </main-heading>
        </div>
        <div>
          <!-- search form -->
          <form class="flex justify-between mt-4 md:mt-0">
            <input
              type="text"
              class="w-64 rounded-full h-9 border-none mr-2 px-4"
              placeholder="suche"
            />
            <main-button :link="false" mode="!py-1 !px-3">Apply</main-button>
          </form>
        </div>
      </div>
      <!-- question divs  -->
      <div class="col-span-12 md:col-span-5" v-for="que in ques" :key="que.id">
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
                Weiter
              </main-button>
            </div>
            <div class="w-3/12 flex">
              <unsubscribe-icon class="inline-block m-auto"></unsubscribe-icon>
            </div>
          </div>
        </main-card>
      </div>
      <!-- start pagination code -->
      <div class="md:col-span-10 col-span-12 mt-16 pb-16 m-auto w-full">
        <paginate-pagination
          :pageCount="2"
          :page-range="2"
          :clickHandler="handlerPaginate"
          :prevText="'< Vorherige'"
          :nextText="'Nächste >'"
          :containerClass="'que-pagination'"
        />
      </div>
    </div>
  </page-wrapper>
</template>

<script>
import UnsuscribeIcon from "../../icons/Anfragen/UnsubscribeIcon.vue";
// imorting pagination Library
import Paginate from "vuejs-paginate-next";

export default {
  data() {
    return {
      // dummy data for pagination
      ques: [
        {
          id: 1,
          heading: "Abmelden vom Krankenstand",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 2,
          heading: "Abmelden vom Krankenstand",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 3,
          heading: "Abmelden vom Krankenstand",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 4,
          heading: "Abmelden vom Krankenstand",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 5,
          heading: "Abmelden vom Krankenstand",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
        {
          id: 6,
          heading: "Abmelden vom Krankenstand",
          para: "Mit der folgenden Option können Sie sich einem bestehenden Krankenstand abmelden",
        },
      ],
    };
  },
  components: {
    "unsubscribe-icon": UnsuscribeIcon,
    "paginate-pagination": Paginate,
  },
  methods: {
    handlerPaginate(page) {
      console.log(page);
    },
  },
};
</script>
