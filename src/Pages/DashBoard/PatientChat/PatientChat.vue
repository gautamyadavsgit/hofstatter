<template>
  <!-- The main container that houses the chat interface -->
  <div class="lg:container lg:px-0 mx-auto md:mt-6 chat-shadow-double ">
    <!-- A container that sets the height of the chat interface -->
    <div class="h-[77vh]">
      <!-- A container that houses the left and right sides of the chat interface -->
      <div class="md:flex rounded h-full">
        <!-- The left side of the chat interface which contains the patient chat filters and contact list -->
        <div
          class="md:w-40% lg:w-[30%] w-full flex flex-col chat-shadow z-20"
          :class="isChatRoute ? 'hidden md:flex' : ''"
        >
          <PatientChatFilter @apply-filter="applyFilter" />
          <!-- Display the patient chat contacts based on the filter applied -->
          <PatientChatContact :filter="filter" />
        </div>
        <!-- The right side of the chat interface which displays the chat messages -->
        <router-view
          v-if="isChatRoute"
          mode="out-in"
          v-slot="{ Component, route }"
        >
          <!-- Apply a custom transition effect to the chat messages -->
          <transition :name="route.meta.transition || 'fade'">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import PatientChatFilter from "./Children/PatientChatFilter.vue";
import PatientChatContact from "./Children/PatientChatContact.vue";
export default {
  components: {
    PatientChatFilter,
    PatientChatContact,
  },
  data() {
    return {
      // A boolean value that determines whether to show the chat messages or the patient contacts
      isChatRoute: true,
      // A string that represents the filter to apply to the patient contacts
      filter: "",
    };
  },
  methods: {
    // A method that hides the patient contacts when the user navigates to the chat messages
    hideContact() {
      if (this.$route.name === "chatMessages") {
        this.isChatRoute = true;
      } else {
        this.isChatRoute = false;
      }
    },
    // A method that applies a filter to the patient contacts based on the user's input
    applyFilter(filter) {
      this.filter = filter;
    },
  },
  watch: {
    // A watcher that hides the patient contacts when the user navigates to a new route
    $route() {
      this.hideContact();
    },
  },
  created() {
    // Hide the patient contacts when the component is created
    this.hideContact();
  },
  updated() {
    // Hide the patient contacts when the component is updated
    this.hideContact();
  },
};
</script>

<style>
.chat-shadow-double {
   /* Set the background and box shadow of the chat interface */
  background: #ffffff;
  box-shadow: 4px -4px 10px rgba(46, 49, 146, 0.1),
    -4px 4px 10px rgba(46, 49, 146, 0.1);
}
.chat-shadow {
  /* // Set the box shadow of the patient chat contacts */
  background: #ffffff;
  box-shadow: 4px -4px 10px rgba(46, 49, 146, 0.1);
}
.chat-msg {
  box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 6px 13px;
}
.chat-msg.snd {
  box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 6px 13px;
  background-color: #181ff4;
  color: white;
}
</style>
