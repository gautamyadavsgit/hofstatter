<template>
  <div>
    <div class="content-area">
      <div class="m-auto w-full">
        <h2
          class="text-center font-bold text-[30px] leading-[38px] text-[#2E3192] font-oxygen uppercase"
        >
          {{ $t("welcome") }}
        </h2>
      </div>
      <div class="m-auto w-full items-center">
        <img :src="WelComeImg" class="m-auto" />
      </div>
      <div class="m-auto mt-[10px] w-full">
        <h3
          class="text-center font-normal text-[18px] leading-[23px] font-oxygen"
        >
          {{ $t("welcomeLine") }}
        </h3>
      </div>
    </div>
    <div class="btn-area">
      <div class="m-auto w-[300px]">
        <router-link to="/sms-login" class="main-button">
          {{ $t("ssn") }}
        </router-link>
      </div>
      <div class="m-auto mt-6 w-[300px]">
        <router-link to="/austria-login" class="main-button group">
          <span>
            <img :src="KeyBlueImg" class="hidden group-hover:inline-block" />
            <img :src="KeyWhiteImg" class="inline-block group-hover:hidden" />
          </span>
          {{ $t("id_austria") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import WelComeImg from "@/assets/images/welcome.png";
import KeyBlueImg from "../../../../assets/images/keyblue.svg";
import KeyWhiteImg from "../../../../assets/images/keywhite.svg";
export default {
  data() {
    return {
      WelComeImg, // data property for welcome image
      KeyBlueImg,
      KeyWhiteImg,
    };
  },
};
</script>

<i18n>
  {
    "en":{
      "welcome":"welcome",
      "welcomeLine":"Please choose your preferred login method",
      "ssn":"Social Security Number / SMS TAN",
      "id_austria":"ID Austria"
    },
    "gr":{
      "welcome":"Willkommen",
      "welcomeLine":"Bitte wählen Sie Ihre bevorzugte Anmeldemethode",
      "ssn":"Sozialversicherungsnummer / SMS-TAN",
      "id_austria": "ID österreich"
    }
  }
</i18n>
