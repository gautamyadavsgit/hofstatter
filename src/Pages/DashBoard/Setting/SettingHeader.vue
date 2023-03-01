<template>
  <div class="flex justify-between mt-4 border-b py-2">
    <div class="md:flex justify-between items-center">
      <div class="md:mr-5">
        <span v-if="this.$route.name === 'AccountSetting'"
          ><img
            src="https://randomuser.me/api/portraits/women/56.jpg"
            class="w-20 h-20 rounded-full border-2 border-solid border-black"
        /></span>
        <input
          type="file"
          accept="image/png,image/jpg,image/jpeg"
          class="hidden"
          id="profileImg"
          @change="imgChange"
        />
        <label for="profileImg">
          <span v-if="this.$route.name === 'ProfileSetting'" class="relative"
            ><img
              :src="imgPath"
              class="w-20 h-20 rounded-full border-2 border-solid border-black"
            />
            <div
              class="h-8 w-8 edit-btn absolute top-[55%] left-[70%] rounded-full bg-white"
            >
              <iconify-icon
                icon="material-symbols:edit"
                class="box-border text-3xl block text-blue m-auto p-1"
              />
            </div>
          </span>
        </label>
      </div>
      <div class="">
        <span
          class="font-oxygenBold text-2xl block whitespace-nowrap text-black"
          >John Doe</span
        ><span
          class="font-oxygenLight inline-block float-right text-light-grey text-xl"
          >johndoe@gmail.com
          <iconify-icon
            icon="mdi:tick-decagram"
            color="#10c98d"
            class="inline-block text-2xl"
        /></span>
      </div>
    </div>
    <div>
      <main-button
        :to="{ name: 'ProfileSetting' }"
        class="m-auto inline-block !px-1 md:!px-5"
        v-if="this.$route.name === 'AccountSetting'"
        ><iconify-icon
          icon="material-symbols:edit-square-outline"
          class="inline-block text-lg md:text-2xl mt-[-8px]"
        />
       {{$t("Profile.Edit profile")}}</main-button
      >
      <router-link
        v-if="this.$route.name === 'ProfileSetting'"
        class="font-bold text-sm text-blue"
        :to="{ name: 'AccountSetting' }"
        ><iconify-icon icon="ion:chevron-back" class="inline-block" />
        {{ $t("Back") }}</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgPath: "https://randomuser.me/api/portraits/women/56.jpg",
    };
  },
  methods: {
    imgChange(event) {
      console.log(event.target.value);
      this.imgPath = "https://randomuser.me/api/portraits/women/57.jpg";
    },
  },
};
</script>
<style scoped>
.edit-btn {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}
</style>
