<template>
  <div class="md:flex justify-between col-span-2">
    <div class="col-span-1 md:col-span-2 flex justify-between mt-2">
      <label class="text-sm my-auto md:my-2 md:mr-2 font-bold block md:inline"
        >Filter</label
      >
      <select
        class="h-9 border-1 max-sm:w-56 border-[#82837E26] rounded-md text-sm !font-oxygen"
      >
        <option value="all" class="font-oxygen">All</option>
        <option value="dr" class="font-oxygen">Doctor</option>
      </select>
    </div>
    <div class="col-span-1 md:col-span-2">
      <form class="flex justify-between mt-4 md:mt-2">
        <input
          type="text"
          class="w-56 rounded-full h-9 border-none mr-2 px-4"
          :placeholder="$t('search')"
        />
        <main-button :link="false" mode="!py-1 !px-3">{{
          $t("Apply")
        }}</main-button>
      </form>
    </div>
  </div>
</template>
