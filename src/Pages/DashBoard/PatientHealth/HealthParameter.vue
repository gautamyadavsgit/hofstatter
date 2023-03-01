<template>
  <!-- template for different health parameter boxes on PatientHealth page -->

 <div class="col-span-6 md:col-span-4 lg:col-span-3">
  <main-card>
    <div class="flex justify-between">
      <main-icon
        :bgStyle="bgStyle"
        :icoStyle="icoStyle"
        :icon="icon"
      ></main-icon>

      <main-heading class="text-black"
        >{{ healthParameterValue
        }}<sub class="ml-1"
          ><small class="text-xs text-light-grey font-thin">{{
            healthParameterUnit
          }}</small></sub
        ></main-heading
      >
    </div>
    <p class="font-bold text-blue text-lg py-5 px-1 capitalize">{{ label }}</p>
    <small-text icon="uiw:reload" icoStyles="text-xs">{{
      updatedTime
    }}</small-text>
  </main-card>
 </div>
</template>
<script>
export default {
  props: {
    //background style for icon bg style
    bgStyle: {
      type: String,
      required: false,
      default: "bg-[#E7EEF6]",
    },
    // icon name
    icon: {
      type: String,
      required: true,
    },
    // value for different health condition
    healthParameterValue: {
      type: String,
      required: true,
    },
    // measuring units
    healthParameterUnit: {
      type: String,
      required: true,
    },
    // name for which condition we are tracking
    label: {
      type: String,
      required: true,
    },
    // time for showing which time its updated
    updatedTime: {
      type: String,
      required: true,
    },
    // icon style classes
    icoStyle: {
      type: String,
    },
  },
};
</script>
