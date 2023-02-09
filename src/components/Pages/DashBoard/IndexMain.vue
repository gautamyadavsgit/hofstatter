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
          <div class="w-full" :class="sidebar ? 'md:flex' : ''">
            <!-- set the div width of 70% if page has sidebar -->
            <div :class="sidebar ? 'md:w-[70%]' : 'col-span-12'">
              <!-- adding top navigation bar -->
              <top-nav></top-nav>
              <!-- mobile menu -->
              <mobile-menu class="md:hidden"></mobile-menu>

              <!-- main page content -->
              <router-view />
            </div>
            <!-- if condition for checking if page has sidebar -->

            <div v-if="sidebar" class="md:w-[30%]">
              <div class="top-[0] sticky">
                <AppointmentSidebar />
              </div>
            </div>
          </div>
          <div class="clear-both"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
const SideNav = defineAsyncComponent(() =>
  import("../../Layout/Common/Menus/SideNav.vue")
);
const TopNav = defineAsyncComponent(() =>
  import("../../Layout/Common/Menus/TopNav.vue")
);
const MobileMenu = defineAsyncComponent(() =>
  import("../../Layout/Common/Menus/MobileMenu.vue")
);
const AppointmentSidebar = defineAsyncComponent(() =>
  import("@/components/Layout/Common/AppointmentSidebar.vue")
);

export default {
  data() {
    return {
      conditionalClasses: "",
      sidebar: false,
    };
  },
  components: {
    SideNav,
    TopNav,
    MobileMenu,
    AppointmentSidebar,
  },
  watch: {
    $route() {
      // calling the setSidebar function every time when routhe changes
      this.setSideBar();
    },
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
    // function for setting the side bar value true or false according to setup in the route
    setSideBar() {
      this.sidebar = this.$route.matched[1].props.default;
    },
  },
  updated() {
    // call the addchat classes when component is updated
    this.addChatClasses();
  },
  mounted() {
    // call the addchat classes when component is created or mounted
    this.addChatClasses();
    // calling the this.setSideBar function when the reload or component created
    this.setSideBar();
  },
};
</script>
