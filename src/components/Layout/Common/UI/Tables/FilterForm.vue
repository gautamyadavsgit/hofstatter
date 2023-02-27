<template>
  <form class="flex justify-between mt-4 md:mt-0">
    <label class="text-sm m-auto mr-2 font-bold">Filter</label>
    <select
      class="w-64 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2"
    >
      <option selected value="all" class="font-oxygen">All</option>
    </select>
    <input
      Name="text"
      class="w-64 rounded-full h-9 border-none mr-2 px-4"
      :placeholder="$t('search')"
    />
    <main-button :link="false" mode="!py-1 !px-3">{{
      $t("Apply")
    }}</main-button>
  </form>
</template>
