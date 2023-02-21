<template>
  <div class="h-full max-w-screen-2xl m-auto font-oxygen">
    <div class="flex flex-row bg-white">
      <!-- sidenav -->

      <div class="bg-white w-20 fixed hidden lg:static lg:block z-50">
        <div class="fixed z-50">
          <side-nav />
        </div>
      </div>

      <div class="w-full">
        <div
          class="lg:px-4 lg:pb-4 text-gray-700 bg-[#E7EEF680] w-full lg:h-screen lg:overflow-y-scroll lg:rounded-l-[30px] hofstatter-dashboard-main"
          :class="conditionalClasses"
        >
          <div class="w-full" :class="sidebar ? 'lg:flex' : ''">
            <!-- set the div width of 70% if page has sidebar -->
            <div :class="sidebar ? 'lg:w-[70%]' : 'col-span-12'">
              <!-- adding top navigation bar -->
              <top-nav></top-nav>
              <!-- mobile menu -->
              <mobile-menu class="lg:hidden"></mobile-menu>

              <!-- main page content -->
              <div id="main-page">
<<<<<<< HEAD
                <!-- <RouterView v-slot="slotProps">
                  <Transition name="route" mode="out-in">
                    <component :is="slotProps.Component" />
                  </Transition>
                </RouterView> -->
                <router-view />
=======
                <router-view mode="out-in" v-slot="{ Component, route }">
                  <!-- Use any custom transition and  to `fade` -->
                  <transition :name="route.meta.transition || 'fade'">
                    <component :is="Component" />
                  </transition>
                </router-view>

                <!-- <RouterView /> -->
>>>>>>> main
              </div>
            </div>
            <!-- if condition for checking if page has sidebar -->

            <transition name="fade" mode="out-in">
              <div v-if="sidebar" class="md:w-[50%] lg:w-[30%]" id="sidebar">
                <div class="top-[0] sticky">
                  <AppointmentSidebar />
                </div>
              </div>
            </transition>
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
      // calling the setSidebar function every time when route changes
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
    //function for setting the side bar value true or false according to setup in the route
    setSideBar() {
      this.sidebar = this.$route.meta.sidebar;
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

<style>
.route-enter-from {
  filter: blur(5px);
}
.route-enter-active {
  filter: blur(10px);
}
.route-enter-to {
  filter: blur(0px);
}
</style>
