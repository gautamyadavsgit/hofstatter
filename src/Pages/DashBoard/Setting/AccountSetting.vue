<template>
  <div>
    <div class="py-2 px-4">
<<<<<<< HEAD:src/components/Pages/DashBoard/Setting/AccountSetting.vue
      <form
        class="account-setting"
        @submit.prevent="changeAccountSetting"
        ref="accountForm"
      >
        <h4 class="text-lg font-oxygenBold text-black">Change Phone Number-</h4>
        <div class="md:flex justify-between w-11/12">
          <div>
            <label for="ppn"> Private Phone Number: </label>
=======
      <form class="account-setting" @submit.prevent="">
        <h4 class="text-lg font-oxygenBold text-black">
          {{ $t("Change") + " " + $t("Phone Number") }}-
        </h4>
        <div class="md:flex md:space-x-11">
          <div class="w-full">
            <label for="ppn">
              {{ $t("Private") }} {{ $t("Phone Number") }}:
            </label>
>>>>>>> main:src/Pages/DashBoard/Setting/AccountSetting.vue
            <input
              placeholder="Enter your private phone number"
              id="ppn"
              type="number"
              v-model="privatePhone"
            />
          </div>
<<<<<<< HEAD:src/components/Pages/DashBoard/Setting/AccountSetting.vue
          <div>
            <label for="ppn"> Work Phone Number: </label>
=======
          <div class="w-full">
            <label for="wpn">
              {{ $t("Work") }} {{ $t("Phone Number") }}:
            </label>
>>>>>>> main:src/Pages/DashBoard/Setting/AccountSetting.vue
            <input
              placeholder="Enter your Work Phone Number"
              id="ppn"
              type="number"
              v-model="workPhone"
            />
          </div>
<<<<<<< HEAD:src/components/Pages/DashBoard/Setting/AccountSetting.vue
          <div>
            <label for="ppn"> Fix Phone Number: </label>
=======
          <div class="w-full">
            <label for="fpn">
              {{ $t("Fix") + " " + $t("Phone Number") }}
            </label>
>>>>>>> main:src/Pages/DashBoard/Setting/AccountSetting.vue
            <input
              placeholder="Enter your Fix Phone Number"
              id="ppn"
              type="number"
              v-model="fixPhone"
            />
          </div>
        </div>
<<<<<<< HEAD:src/components/Pages/DashBoard/Setting/AccountSetting.vue
        <div class="md:flex justify-between w-full md:w-11/12 mt-5">
          <div>
            <h4 class="text-lg font-oxygenBold text-black">Change Email-</h4>
            <label for="ppn"> Private E-mail: </label>
=======
        <div class="md:flex mt-5 md:space-x-11">
          <div class="w-full">
            <h4 class="text-lg font-oxygenBold text-black">
              {{ $t("Change") }} {{ $t("Email") }}-
            </h4>
            <label for="p-email">
              {{ $t("Private") }} {{ $t("Email") }}:
            </label>
>>>>>>> main:src/Pages/DashBoard/Setting/AccountSetting.vue
            <input
              placeholder="Enter your private phone number"
              id="ppn"
              type="email"
              v-model="privateEmail"
            />
          </div>
          <div class="w-full">
            <h4 class="hidden md:block text-lg font-oxygenBold text-white">
              -
            </h4>
            <label for="ppn"> Work E-mail: </label>
            <input
              placeholder="Enter your private phone number"
              id="ppn"
              type="email"
              v-model="workEmail"
            />
          </div>
<<<<<<< HEAD:src/components/Pages/DashBoard/Setting/AccountSetting.vue
          <div>
            <h4 class="text-lg font-oxygenBold text-black">Change Address-</h4>
            <label for="ppn" class="flex">
=======
          <div class="w-full">
            <h4 class="text-lg font-oxygenBold text-black">
              {{ $t("Change Address") }}-
            </h4>
            <label for="change-address" class="flex">
>>>>>>> main:src/Pages/DashBoard/Setting/AccountSetting.vue
              <span class="flex justify-between"
                >Address Type:<input
                  type="radio"
                  id="home"
                  name="a-type"
                  class="mt-1"
                  v-model="addressType"
                  value="home"
                />
                <label for="home" class="!py-0 px-2">Home</label
                ><input
                  type="radio"
                  id="work"
                  name="a-type"
                  v-model="addressType"
                  class="mt-1"
                  value="work"
                />
                <label for="work" class="!py-0 px-2">work</label></span
              >
            </label>
            <input
              placeholder="Enter your private phone number"
              id="ppn"
              type="text"
              v-model="Address"
            />
          </div>
        </div>
<<<<<<< HEAD:src/components/Pages/DashBoard/Setting/AccountSetting.vue
        <div class="flex mt-5 justify-around md:justify-end">
          <main-button :link="false">Aktualisieren</main-button>
          <main-button class="!bg-white !text-blue mx-2">Absagen</main-button>
        </div>
      </form>
      <div
        class="col-span-10 px-2 md:px-0 md:flex justify-between my-5 border-y py-4"
=======
        <div class="flex mt-5 justify-between md:justify-end">
          <main-button :link="false">{{ $t("update") }}</main-button>
          <main-button class="!bg-white !text-blue mx-2">{{
            $t("cancel")
          }}</main-button>
        </div>
      </form>
      <div
        class="col-span-10 md:px-0 lg:flex justify-between my-5 border-y py-4"
>>>>>>> main:src/Pages/DashBoard/Setting/AccountSetting.vue
      >
        <div>
          <h2
            class="font-oxygenBold font-bold whitespace-nowrap text-black md:text-xl text-md"
          >
            Request Representation-
          </h2>
        </div>
        <div>
          <!-- search form -->
          <div>
            <form class="flex justify-between mt-4 md:mt-2">
              <label class="hidden text-sm m-auto mr-2 font-bold md:inline"
                >Filter</label
              >
              <select
                class="w-36 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2"
              >
                <option value="all" class="font-oxygen">All</option>
                <option value="dr" class="font-oxygen">Doctor</option>
              </select>
              <input
                type="text"
<<<<<<< HEAD:src/components/Pages/DashBoard/Setting/AccountSetting.vue
                class="md:w-64 w-36 rounded-full h-9 border-none mr-2 px-4 bg-[#80808026]"
                placeholder="suche"
=======
                class="md:w-full w-full rounded-full h-9 border-none mr-2 px-4 bg-[#80808026]"
                :placeholder="$t('search')"
>>>>>>> main:src/Pages/DashBoard/Setting/AccountSetting.vue
              />
              <main-button :link="false" mode="!py-1 !px-3">Apply</main-button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 w-full">
      <main-card
        customStyle="flex justify-between items-center !py-2"
        v-for="dummyData in dummyDatas"
        :key="dummyData.id"
      >
        <h2 class="text-blue font-oxygenBold">{{ dummyData.name }}</h2>
        <div class="flex justify-between">
          <button
            class="hidden md:inline-block bg-cyan mx-2 text-white px-2 py-1 border-cyan border-2 hover:text-cyan font-oxygenBold hover:bg-transparent transition-all delay-150"
          >
            Request
          </button>
          <button
            class="hidden md:inline-block bg-[#FF2C29] mx-2 text-white px-2 py-1 border-[#FF2C29] border-2 hover:text-[#FF2C29] font-oxygenBold hover:bg-transparent transition-all delay-150"
          >
            Delete
          </button>
          <div class="md:hidden">
            <router-link
              to="/"
              class="text-cyan font-oxygenBold inline-block mr-2"
            >
              {{ $t("Request") }}</router-link
            >
            <router-link to="/" class="text-red font-oxygenBold">
              {{ $t("Delete") }}</router-link
            >
          </div>
        </div>
      </main-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      privatePhone: null,
      workPhone: null,
      fixPhone: null,
      privateEmail: "",
      workEmail: "",
      addressType: "",
      Address: "",
      userDataPresent: false,
      method: "POST",
      dummyDatas: [
        {
          id: 1,
          name: "Hitesh (Son)",
        },
        {
          id: 2,
          name: "Martina(wife)",
        },
        {
          id: 1,
          name: "Jenny(daughter)",
        },
      ],
    };
  },
  methods: {
    async changeAccountSetting(e) {
      const response = await fetch(
        "https://hofstatter-cf012-default-rtdb.asia-southeast1.firebasedatabase.app/users/" +
          this.$store.state.login.userId +
          ".json?auth=" +
          this.$store.state.login.token,
        {
          method: "PUT",
          body: JSON.stringify({
            privatePhone: this.privatePhone,
            workPhone: this.workPhone,
            fixPhone: this.fixPhone,
            privateEmail: this.privateEmail,
            workEmail: this.workEmail,
            addressType: this.addressType,
            Address: this.Address,
          }),
        }
      );
      // if (response.ok) {
      //   this.$refs.accountForm.reset();
      //   const responseData = response.json;
      //   console.log(responseData);
      // }
      console.log(response);
    },
  },
  async created() {
    const response = await fetch(
      "https://hofstatter-cf012-default-rtdb.asia-southeast1.firebasedatabase.app/users/" +
        this.$store.state.login.userId +
        ".json?auth=" +
        this.$store.state.login.token
    );
    const responseJson = await response.json();
    this.Address = responseJson.Address;
    this.privatePhone = responseJson.privatePhone;
    this.workPhone = responseJson.workPhone;
    this.fixPhone = responseJson.fixPhone;
    this.privateEmail = responseJson.privateEmail;
    this.workEmail = responseJson.workEmail;
    this.addressType = responseJson.addressType;
  },
};
</script>
