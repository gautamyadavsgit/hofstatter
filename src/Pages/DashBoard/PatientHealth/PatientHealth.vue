<template>
  <div class="grid grid-cols-12 mt-4 lg:mt-12 gap-2 p-2 lg:p-0">
    <div class="col-span-12 lg:col-span-4">
      <main-card>
        <div class="flex justify-between">
          <main-heading> {{ $t("health status") }} </main-heading>
          <small-text
            styles="text-base"
            post
            icon="ph:caret-down"
            icoStyles="text-xl"
            >{{ $t("Today") }}</small-text
          >
        </div>
        <div class="grid grid-cols-12">
          <div class="col-span-8">
            <humanbody-img />
          </div>
          <div class="col-span-4">
            <organ-area :organName="$t('Heart')" :organHealth="54">
              <HeartIcon
            /></organ-area>
            <organ-area :organName="$t('lung')" :organHealth="73">
              <LungsIcon
            /></organ-area>
            <organ-area :organName="$t('liver')" :organHealth="26">
              <LiverIcon
            /></organ-area>
            <organ-area :organName="$t('kidney')" :organHealth="11">
              <KidneysIcon
            /></organ-area>
          </div>
        </div>
      </main-card>
    </div>
    <div class="col-span-12 lg:col-span-8">
      <div
        class="grid grid-cols-12 gap-1 lg:gap-2"
      >
        <health-parameter
          bgStyle="bg-[#E7EEF6]"
          icon="noto:drop-of-blood"
          healthParameterValue="135/85"
          healthParameterUnit="mm/Hg"
          :label="$t('blood pressure')"
          updatedTime="16 min ago"
        />
        <health-parameter
          bgStyle="bg-[#009FF926]"
          icon="bi:lungs-fill"
          healthParameterValue="97"
          healthParameterUnit="%"
          :label="$t('oxygen')"
          updatedTime="1 hour ago"
          icoStyle="text-[#009FF9]"
        />
        <health-parameter
          bgStyle="bg-[#FFF3D7]"
          icon="game-icons:dripping-tube"
          healthParameterValue="100"
          healthParameterUnit="mg/dl"
          :label="$t('blood sugar')"
          updatedTime="16 min ago"
          icoStyle="text-[#FD5957]"
        />
        <health-parameter
          bgStyle="bg-[#F8CBC8]"
          icon="ri:heart-pulse-fill"
          healthParameterValue="84"
          healthParameterUnit="bpm"
          :label="$t('heart rate')"
          updatedTime="16 min ago"
          icoStyle="text-[#FD5957]"
        />
        <health-parameter
          bgStyle="bg-[#A9E2DC]"
          icon="fluent-emoji-high-contrast:sleeping-face"
          healthParameterValue="7:32"
          healthParameterUnit="hours"
          :label="$t('Sleep')"
          updatedTime="4 hours ago"
          icoStyle="text-[#00958F]"
        />
        <health-parameter
          icon="healthicons:thermometer"
          healthParameterValue="36"
          healthParameterUnit="&#8451;"
          :label="$t('temperature')"
          updatedTime="16 min ago"
        />

        <div class="col-span-12 lg:col-span-6">
          <router-link :to="{ name: 'PatientAppoinetments' }">
            <main-card customStyle="!bg-[#6068A9]">
              <div class="flex justify-end">
                <iconify-icon
                  icon="ph:caret-right-bold"
                  class="text-white font-extrabold text-2xl"
                ></iconify-icon>
              </div>
              <div class="grid grid-cols-6">
                <div class="col-span-4">
                  <main-heading
                    customStyle="!text-white text-2xl !whitespace-normal"
                    >{{ $t("Book your vaccination appointment") }}</main-heading
                  >
                </div>
                <div class="col-span-2">
                  <CoronaImg class="float-right" />
                </div>
              </div>
            </main-card>
          </router-link>
        </div>

        <div class="md:col-span-12 lg:col-span-6 col-span-12">
          <main-card>
            <div class="flex justify-between">
              <div class="flex justify-between">
                <main-icon
                  bgStyle="bg-[#E7EEF6]"
                  icon="healthicons:thermometer"
                ></main-icon>

                <main-heading customStyle="ml-4 mt-1 text-lg text-blue">{{
                  $t("temperature")
                }}</main-heading>
              </div>
              <iconify-icon
                icon="ph:caret-right-bold"
                class="font-extrabold text-2xl"
              ></iconify-icon>
            </div>
            <main-heading
              class="mt-2 ml-1"
              customStyle="text-[22px] leading-7 text-black"
              >36.6 &#8451;</main-heading
            >
            <temperature-chart></temperature-chart>
            <small-text icon="uiw:reload" class="mt-2" icoStyles="text-xs"
              >4 hours ago</small-text
            >
          </main-card>
        </div>
        <div class="md:col-span-12 lg:col-span-6 col-span-12">
          <main-card>
            <div class="flex justify-between">
              <div class="flex justify-between">
                <main-icon
                  bgStyle="bg-[#E7EEF6]"
                  icon="noto:drop-of-blood"
                ></main-icon>

                <main-heading customStyle="ml-4 mt-1 text-lg text-blue">{{
                  $t("blood pressure")
                }}</main-heading>
              </div>
              <iconify-icon
                icon="ph:caret-right-bold"
                class="font-extrabold text-2xl"
              ></iconify-icon>
            </div>
            <main-heading
              class="mt-2 ml-1"
              customStyle="text-[22px] leading-7 text-black"
              >135/85<sub class="ml-2"
                ><small class="text-xs text-light-grey font-thin"
                  >mm/Hg</small
                ></sub
              ></main-heading
            >
            <bloodpressure-chart></bloodpressure-chart>
            <small-text icon="uiw:reload" class="mt-2" icoStyles="text-xs"
              >4 hours ago</small-text
            >
          </main-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// importing images
import HumanBodyImg from "@/components/icons/PatientHealth/HumanBody.vue";
import CoronaImg from "@/components/icons/PatientHealth/CoronaImg.vue";
// importing components
import OrgansAreaVue from "./OrgansArea.vue";
import TemperatureChart from "./Charts/TemperatureChart.vue";
import BloodPressureChart from "./Charts/BloodPressureChart.vue";
import HealthParameter from "./HealthParameter.vue"; // different health condition boxes
//importing organ icons
import HeartIcon from "@/components/icons/PatientHealth/HeartIcon.vue";
import KidneysIcon from "@/components/icons/PatientHealth/KidneysIcon.vue";
import LiverIcon from "@/components/icons/PatientHealth/LiverIcon.vue";
import LungsIcon from "@/components/icons/PatientHealth/LungsIcon.vue";

export default {
  components: {
    "humanbody-img": HumanBodyImg,
    "organ-area": OrgansAreaVue,
    "temperature-chart": TemperatureChart,
    "bloodpressure-chart": BloodPressureChart,
    "health-parameter": HealthParameter,
    HeartIcon,
    KidneysIcon,
    LiverIcon,
    LungsIcon,
    CoronaImg,
  },
};
</script>
