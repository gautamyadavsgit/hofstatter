<template>
  <!-- form element with submit event listener calling tpnSubmitHandler method -->
  <form @submit.prevent="tpnSubmitHandler">
    <div class="content-area">
      <div class="m-auto w-full">
        <div class="mb-5">
          <!-- label for the input field with phone number and placeholder input field -->
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
            v-model.trim="tpn"
          />
        </div>
      </div>
    </div>
    <div class="btn-area">
      <div class="m-auto w-[300px]">
        <!-- button to submit the form -->
        <button class="main-button">Login</button>
      </div>
      <!-- back button component -->
      <back-button></back-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      tpn: null, // data property to store the input field value
    };
  },
  computed: {
    phoneNumber() {
      // computed property to get the phone number from the store
      return this.$store.state.login.loginData.phone;
    },
  },
  methods: {
    tpnSubmitHandler() {
      // method to handle form submission
      if (this.tpn == null) {
        // checking if the input field value is null
        this.$swal({
          title: this.$t("error"),
          text: this.$t("error-text"),
          icon: "warning",
        });
        return;
      }
      if (this.tpn != this.$store.state.login.dummyLoginData.tpn) {
        // checking if the input field value matches the dummy data value
        this.$swal({
          title: this.$t("error"),
          text: this.$t("global-error"),
          icon: "error",
        });
        return;
      }

      this.$store.commit("login/setLogin"); // setting the login status in the store
      console.log();
      if (this.$store.state.login.isLoggedIn) {
        // checking if the user is logged in
        this.$router.push("/dashboard"); // redirecting to the dashboard page
      } else {
        // eslint-disable-next-line no-self-assign
        window.location.href = window.location.href; // refreshing the page if the user is not logged in
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
