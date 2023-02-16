<template>
  <form @submit.prevent="tpnSubmitHandler">
    <div class="content-area">
      <div class="m-auto w-full">
        <div class="mb-5">
          <label
            class="text-center block text-[16px] leading-[20px] font-normal"
            for="tpn"
          >
            {{ $t("enter-tpn") }} {{ phoneNumber }}
          </label>
          <input
            type="number"
            id="tpn"
            placeholder="0664555"
            class="input-login"
            v-model="tpn"
          />
        </div>
      </div>
    </div>
    <div class="btn-area">
      <div class="m-auto w-[300px]">
        <button class="main-button">Login</button>
      </div>
      <back-button></back-button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      tpn: null,
    };
  },
  computed: {
    phoneNumber() {
      return this.$store.state.login.loginData.phone;
    },
  },
  methods: {
    tpnSubmitHandler() {
      if (this.tpn == null) {
        this.$swal({
          title: this.$t("error"),
          text: this.$t("error-text"),
          icon: "warning",
        });
        return;
      }
      if (this.tpn != this.$store.state.login.dummyLoginData.tpn) {
        this.$swal({
          title: this.$t("error"),
          text: this.$t("global-error"),
          icon: "error",
        });
        return;
      }

      this.$store.commit("login/setLogin");
      console.log();
      if (this.$store.state.login.isLoggedIn) {
        this.$router.push("/dashboard");
      } else {
        // eslint-disable-next-line no-self-assign
        window.location.href = window.location.href;
      }
    },
  },
};
</script>
<i18n>
{
  "en":{
    "enter-tpn":"Please enter SMS TAN sent to ",
    "error":'Error',
    "error-text":'Field cannot be empty',
    "global-error":"Invalid TPN",
  },
  "gr":{
    "enter-tpn":"Bitte geben Sie SMS TAN gesendet an ein",
    "error":'Fehler',
    "error-text":'Feld darf nicht leer sein',
    "global-error":"Ungültige TPN"
  }
}
</i18n>
