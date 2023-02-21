<template>
  <!-- form-area -->
  <div class="py-2 px-4">
    <form class="account-setting" @submit.prevent="changeAccountSetting">
      <h4 class="text-lg font-oxygenBold text-black">Change Phone Number-</h4>
      <div class="md:flex justify-between w-11/12">
        <div>
          <label for="ppn"> Private Phone Number: </label>
          <input
            placeholder="Enter your private phone number"
            id="ppn"
            type="text"
            name="private-phone-number"
          />
        </div>
        <div>
          <label for="wpn"> Work Phone Number: </label>
          <input
            placeholder="Enter your Work Phone Number"
            id="wpn"
            type="text"
            name="work-phone"
          />
        </div>
        <div>
          <label for="fpn"> Fix Phone Number: </label>
          <input
            placeholder="Enter your Fix Phone Number"
            id="fpn"
            type="text"
            name="fix-phone"
          />
        </div>
      </div>
      <div class="md:flex justify-between w-full md:w-11/12 mt-5">
        <div>
          <h4 class="text-lg font-oxygenBold text-black">Change Email-</h4>
          <label for="p-email"> Private E-mail: </label>
          <input
            placeholder="Enter your private phone number"
            id="p-email"
            type="text"
            name="private-email"
          />
        </div>
        <div>
          <h4 class="hidden md:block text-lg font-oxygenBold text-white">-</h4>
          <label for="w-email"> Work E-mail: </label>
          <input
            placeholder="Enter your private phone number"
            id="w-email"
            type="text"
            name="work-email"
          />
        </div>
        <div>
          <h4 class="text-lg font-oxygenBold text-black">Change Address-</h4>
          <label for="adress" class="flex">
            <span class="flex justify-between"
              >Address Type:<input
                type="radio"
                id="at"
                name="a-type"
                class="mt-1"
              />
              <label for="home" class="!py-0 px-2">Home</label
              ><input type="radio" id="work" name="a-type" class="mt-1" />
              <label for="work" class="!py-0 px-2">work</label></span
            >
          </label>
          <input
            placeholder="Address"
            id="address"
            type="text"
            name="address"
          />
        </div>
      </div>
      <div class="flex mt-5 justify-around md:justify-end">
        <main-button :link="false">Aktualisieren</main-button>
        <main-button class="!bg-white !text-blue mx-2">Absagen</main-button>
      </div>
    </form>
    <div
      class="col-span-10 px-2 md:px-0 md:flex justify-between my-5 border-y py-4"
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
              class="md:w-64 w-36 rounded-full h-9 border-none mr-2 px-4 bg-[#80808026]"
              placeholder="suche"
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
          class="bg-cyan mx-2 text-white px-2 py-1 border-cyan border-2 hover:text-cyan font-oxygenBold hover:bg-transparent transition-all delay-150"
        >
          Request
        </button>
        <button
          class="bg-[#FF2C29] mx-2 text-white px-2 py-1 border-[#FF2C29] border-2 hover:text-[#FF2C29] font-oxygenBold hover:bg-transparent transition-all delay-150"
        >
          Delete
        </button>
      </div>
    </main-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    changeAccountSetting(e) {
     console.log(e)
    },
  },
};
</script>
