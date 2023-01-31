<template>
  <div class="h-full max-w-screen-2xl m-auto font-oxygen">
    <div class="flex flex-row bg-white">
      <!-- sidenav -->

      <div class="bg-white w-20 fixed hidden md:static md:block z-50">
        <div class="fixed z-50">
          <side-nav />
        </div>
      </div>

      <div class="w-full">
        <div
          class="md:px-4 md:pb-4 text-gray-700 bg-[#E7EEF680] w-full md:h-screen md:overflow-y-scroll md:rounded-l-[30px] hofstatter-dashboard-main"
          :class="conditionalClasses"
        >
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "../../Layout/Common/Menus/SideNav.vue";
export default {
  data() {
    return {
      conditionalClasses: "",
    };
  },
  components: {
    SideNav,
  },
  methods: {
    // when the route view is Patientchat this method is called each time the component is mounted or updated  for eliminating the padding from the dahsboard main content area.
    addChatClasses() {
      if (this.$route.name == "PatientChat") {
        this.conditionalClasses = "!pl-2 !pr-2  z-50";
      } else {
        this.conditionalClasses = "";
      }
    },
  },
  updated() {
    // call the addchat classes when component is updated
    this.addChatClasses();
  },
  mounted() {
    // call the addchat classes when component is created or mounted
    this.addChatClasses();
  },
};
</script>
