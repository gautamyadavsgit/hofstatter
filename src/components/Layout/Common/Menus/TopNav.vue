<!-- component for top navbar -->
<template>
  <header class="sticky z-50 top-0 bg-[#f3f7fa] pt-4">
    <div class="mx-auto px-2 py-4 flex justify-between">
      <div class="sm:flex">
        <!-- logo -->
        <div class="md:w-48 flex-shrink-0">
          <span class="text-blue text-[26px] font-oxygen font-bold">
            Medical Care
          </span>
        </div>
      </div>
      <div class="flex justify-between">
        <!-- translation -->
        <div class="flex md:w-48 m-auto">
          <div class="relative group cursor-pointer">
            <translate-icon> </translate-icon>
            <div
              class="absolute top-5 z-50 left-[-50px] hidden group-hover:block pt-6"
            >
              <div class="bg-white z-50 before:absolute before:bg-blue">
                <ul class="flex justify-center items-center">
                  <label for="english">
                    <li
                      class="font-oxygen text-[12px] cursor-pointer py-2 px-4 text-gray-500 border-b-2"
                      :class="this.$i18n.locale == 'en' ? 'border-blue' : ''"
                    >
                      English
                    </li>
                  </label>
                  <input
                    type="radio"
                    name="language"
                    key="en"
                    value="en"
                    id="english"
                    class="hidden"
                    v-model="$i18n.locale"
                  />
                  <label for="german">
                    <li
                      class="font-oxygen text-[12px] cursor-pointer py-2 px-4 text-gray-500 border-b-2"
                      :class="this.$i18n.locale == 'gr' ? 'border-blue' : ''"
                    >
                      German
                    </li>
                  </label>
                  <input
                    type="radio"
                    name="language"
                    key="gr"
                    value="gr"
                    id="german"
                    class="hidden"
                    v-model="$i18n.locale"
                  />
                </ul>
              </div>
            </div>
          </div>
          <!-- notification -->

          <div class="relative ml-[10px] m-auto">
            <span
              class="animate-ping absolute inline-flex h-[10px] w-[10px] top-[8%] left-[55%] rounded-full bg-blue"
            ></span>
            <iconify-icon
              icon="mdi:bell-notification"
              class="text-[26px] text-blue"
            ></iconify-icon>
          </div>
        </div>

        <!-- user profile -->
        <div class="relative group cursor-pointer">
          <div class="flex justify-between">
            <div class="hidden md:block">
              <span
                class="font-oxygen font-bold text-[18px] block whitespace-nowrap"
                >{{ this.$store.getters["user/fullName"] }}</span
              >
              <span
                class="font-oxygen font-normal text-[16px] inline-block float-right"
                >{{ this.$store.state.user.userData.userType }}</span
              >
            </div>
            <div class="ml-[20px]">
              <span>
                <img
                  :src="this.$store.state.user.userData.profilePic"
                  class="w-[50px] h-[50px] rounded-full border-2 border-solid border-black"
                />
              </span>
            </div>
          </div>
          <div
            class="absolute hidden group-hover:block z-50 w-full dropdown-box"
          >
            <div
              class="bg-white rounded-md border-blue border mt-4 font-oxygen"
            >
              <ul class="dropdown">
                <li>
                  <router-link :to="{ name: 'MyProfile' }">
                    <iconify-icon
                      icon="majesticons:logout-half-circle"
                      class="inline-block"
                    />
                    {{ $t("MyProfile.profile") }}</router-link
                  >
                </li>
                <li>
                  <a @click.prevent="logoutHandler">
                    <iconify-icon
                      icon="majesticons:logout-half-circle"
                      class="inline-block"
                    />
                    {{ $t("MyProfile.logout") }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TranslateIcon from "../../../icons/TranslateIcon.vue";
export default {
  components: {
    "translate-icon": TranslateIcon,
  },
  methods: {
    // ...mapActions(["login/logoutHandler"]),
    logoutHandler() {
      this.$store.dispatch("login/logoutHandler");
    },
  },
};
</script>

<style scoped>
.dropdown {
  border-bottom: 5px solid #2e3192;
}
.dropdown li:hover {
  background-color: #2e3192;
  color: white;
}
.dropdown li {
  padding: 10px;
}
.dropdown li:not(:last-child) {
  border-bottom: 1px solid;
}
.dropdown-box::before {
  position: absolute;
  left: 83%;
  top: 5px;
  content: "";
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid black;
  transform: translate(-50%, 0%);
}
</style>
