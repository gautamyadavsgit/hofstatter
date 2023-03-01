<template>
  <!-- component -->

  <div class="lg:container lg:px-0 mx-auto md:mt-6 chat-shadow-double ">
    <div class="h-[77vh]">
      <div class="md:flex rounded h-full">
        <div
          class="md:w-40% lg:w-[30%] w-full flex flex-col chat-shadow z-20"
          :class="isChatRoute ? 'hidden md:flex' : ''"
        >
          <PatientChatFilter @apply-filter="applyFilter" />
          <!-- Left -->
          <PatientChatContact :filter="filter" />
        </div>
        <router-view
          v-if="isChatRoute"
          mode="out-in"
          v-slot="{ Component, route }"
        >
          <!-- Use any custom transition and  to `fade` -->
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
      isChatRoute: true,
      filter: "",
    };
  },
  methods: {
    hideContact() {
      if (this.$route.name === "chatMessages") {
        this.isChatRoute = true;
      } else {
        this.isChatRoute = false;
      }
    },
    applyFilter(filter) {
      this.filter = filter;
    },
  },
  watch: {
    $route() {
      this.hideContact();
    },
  },
  created() {
    this.hideContact();
  },
  updated() {
    this.hideContact();
  },
};
</script>

<style>
.chat-shadow-double {
  background: #ffffff;
  box-shadow: 4px -4px 10px rgba(46, 49, 146, 0.1),
    -4px 4px 10px rgba(46, 49, 146, 0.1);
}
.chat-shadow {
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
