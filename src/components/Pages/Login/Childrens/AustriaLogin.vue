<template>
  <form @submit.prevent="ausLoginSubmit">
    <div class="content-area">
      <div class="m-auto w-full">
        <div class="mb-5">
          <p
            class="text-[22px] leading-[22px] font-bold m-auto grid justify-center mb-5"
          >
            {{ $t("authenticate-with-id-austria") }}
          </p>
          <div>
            <img :src="AusLoginImg" class="m-auto" width="60" height="42" />
          </div>
        </div>

        <div class="mb-5">
          <label
            class="text-center block text-[16px] leading-[20px] font-bold"
            for="username"
          >
            {{ $t("Username-Phone") }}
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username/Phone"
            class="input-login"
            v-model="username"
          />
        </div>
        <div class="mb-5">
          <label
            class="text-center block text-[16px] leading-[20px] font-bold"
            for="password"
          >
            {{ $t("Signature-Password") }}
          </label>
          <input
            type="password"
            id="password"
            placeholder="4332 010197"
            class="input-login"
            v-model="password"
          />
        </div>
      </div>
    </div>
    <div class="btn-area">
      <div class="m-auto mt-1 w-[300px]">
        <button class="main-button">{{ $t("Identity") }}</button>
      </div>

      <back-button></back-button>
    </div>
  </form>
</template>

<script>
import AusLoginImg from "../../../../assets/images/auslogin.svg";

export default {
  data() {
    return {
      AusLoginImg, // adding image as datapropery
      username: "",
      password: "",
    };
  },
  methods: {
    ausLoginSubmit() {
      this.$store.commit("login/setLogin");
      this.$router.push("/dashboard");
    },
  },
};
</script>
<i18n>
  {
    "en":{
      "authenticate-with-id-austria":"Authenticate with ID Austria",
      "Username-Phone":"Username/Phone",
      "Signature-Password":"Signature Password",
      "Identity":"Identity"
    },
    "gr":{
      "authenticate-with-id-austria":"Authentifizieren Sie sich mit ID Austria",
      "Username-Phone":"Benutzername/Telefon",
      "Signature-Password":"Signatur-Passwort",
      "Identity":"Identität"
    }
  }
</i18n>
