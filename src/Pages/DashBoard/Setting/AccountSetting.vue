<template>
  <!-- form-area -->
  <div>
    <div class="py-2 px-4">
      <form class="account-setting" @submit.prevent="">
        <h4 class="text-lg font-oxygenBold text-black">
          {{ $t("Change") + " " + $t("Phone Number") }}-
        </h4>
        <div class="md:flex md:space-x-11">
          <div class="w-full">
            <label for="ppn">
              {{ $t("Private") }} {{ $t("Phone Number") }}:
            </label>
            <input
              :placeholder="
                $t('Enter your') +
                ' ' +
                $t('Private') +
                ' ' +
                $t('Phone Number')
              "
              id="ppn"
              type="text"
            />
          </div>
          <div class="w-full">
            <label for="wpn">
              {{ $t("Work") }} {{ $t("Phone Number") }}:
            </label>
            <input
              :placeholder="
                $t('Enter your') + ' ' + $t('Work') + ' ' + $t('Phone Number')
              "
              id="wpn"
              type="text"
            />
          </div>
          <div class="w-full">
            <label for="fpn">
              {{ $t("Fix") + " " + $t("Phone Number") }}
            </label>
            <input
              :placeholder="
                $t('Enter your') + ' ' + $t('Fix') + ' ' + $t('Phone Number')
              "
              id="fpn"
              type="text"
            />
          </div>
        </div>
        <div class="md:flex mt-5 md:space-x-11">
          <div class="w-full">
            <h4 class="text-lg font-oxygenBold text-black">
              {{ $t("Change") }} {{ $t("Email") }}-
            </h4>
            <label for="p-email">
              {{ $t("Private") }} {{ $t("Email") }}:
            </label>
            <input
              :placeholder="$t('Enter your') + ' ' + $t('Email')"
              id="p-email"
              type="text"
            />
          </div>
          <div class="w-full">
            <h4 class="hidden md:block text-lg font-oxygenBold text-white">
              -
            </h4>
            <label for="w-email"> {{ $t("Work") + " " + $t("Email") }}: </label>
            <input
              :placeholder="
                $t('Enter your') + ' ' + $t('Work') + ' ' + $t('Email')
              "
              id="w-email"
              type="text"
            />
          </div>
          <div class="w-full">
            <h4 class="text-lg font-oxygenBold text-black">
              {{ $t("Change Address") }}-
            </h4>
            <label for="change-address" class="flex">
              <span class="flex justify-between"
                >{{ $t("Address Type") }}:<input
                  type="radio"
                  id="home"
                  name="a-type"
                  class="mt-1"
                />
                <label for="home" class="!py-0 px-2">{{ $t("Home") }}</label
                ><input type="radio" id="work" name="a-type" class="mt-1" />
                <label for="work" class="!py-0 px-2">{{
                  $t("work")
                }}</label></span
              >
            </label>
            <input
              :placeholder="$t('Enter your') + ' ' + $t('address')"
              id="change-address"
              type="text"
            />
          </div>
        </div>
        <div class="flex mt-5 justify-between md:justify-end">
          <main-button :link="false">{{ $t("update") }}</main-button>
          <main-button class="!bg-white !text-blue mx-2">{{
            $t("cancel")
          }}</main-button>
        </div>
      </form>
      <div
        class="col-span-10 md:px-0 lg:flex justify-between my-5 border-y py-4"
      >
        <div>
          <h2
            class="font-oxygenBold font-bold whitespace-nowrap text-black md:text-xl text-md"
          >
            {{ $t("Request Representation") }}-
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
                <option value="all" class="font-oxygen">{{ $t("All") }}</option>
                <option value="dr" class="font-oxygen">
                  {{ $t("Doctor") }}
                </option>
              </select>
              <input
                type="text"
                class="md:w-full w-full rounded-full h-9 border-none mr-2 px-4 bg-[#80808026]"
                :placeholder="$t('search')"
              />
              <main-button :link="false" mode="!py-1 !px-3">{{
                $t("Apply")
              }}</main-button>
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
            {{ $t("Request") }}
          </button>
          <button
            class="bg-[#FF2C29] mx-2 text-white px-2 py-1 border-[#FF2C29] border-2 hover:text-[#FF2C29] font-oxygenBold hover:bg-transparent transition-all delay-150"
          >
            {{ $t("Delete") }}
          </button>
        </div>
      </main-card>
    </div>
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
};
</script>
