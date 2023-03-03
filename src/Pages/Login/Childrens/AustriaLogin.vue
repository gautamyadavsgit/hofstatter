<template>
  <!-- The login form -->
  <form @submit.prevent="ausLoginSubmit">
    <div class="content-area">
      <div class="m-auto w-full">
        <div class="mb-5">
          <!-- Title of the login form -->
          <p
            class="text-[22px] leading-[22px] font-bold m-auto grid justify-center mb-5"
          >
            {{ $t("authenticate-with-id-austria") }}
          </p>
          <!-- Image displayed on the login form -->
          <div>
            <img :src="AusLoginImg" class="m-auto" width="60" height="42" />
          </div>
        </div>

        <!-- Input field for the username or phone number -->
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
            v-model.trim="username"
          />
        </div>

        <!-- Input field for the signature password -->
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
            v-model.trim="password"
          />
        </div>
      </div>
    </div>

    <!-- Button to submit the form -->
    <div class="btn-area">
      <div class="m-auto mt-1 w-[300px]">
        <button class="main-button">{{ $t("Identity") }}</button>
      </div>

      <!-- Back button to navigate back to the previous page -->
      <back-button></back-button>
    </div>
  </form>
</template>

<script>
import AusLoginImg from "@/assets/images/auslogin.svg";

export default {
  data() {
    return {
      // The image displayed on the login form
      AusLoginImg,

      // The username and password entered by the user
      username: "",
      password: "",
    };
  },

  methods: {
    // Function to submit the login form
    ausLoginSubmit() {
      // Validate that the username and password fields are not empty
      if (this.username === "" || this.password === "") {
        this.$swal({
          title: this.$t("error"),
          text: this.$t("error-text"),
          icon: "warning",
        });
        return;
      }

      // Validate that the entered username and password are correct
      if (
        this.username !== this.$store.state.login.dummyLoginData.username &&
        this.password !== this.$store.state.login.dummyLoginData.password
      ) {
        this.$swal({
          title: this.$t("error"),
          text: this.$t("global-error"),
          icon: "error",
        });
        return;
      }

      // If the entered username and password are correct, set the login state and navigate to the dashboard page
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
      "Identity":"Identity",
      "error": "Error",
      "error-text": "Field cannot be empty",
      "global-error": "Username and password didn't match"
    },
    "gr":{
      "authenticate-with-id-austria":"Authentifizieren Sie sich mit ID Austria",
      "Username-Phone":"Benutzername/Telefon",
      "Signature-Password":"Signatur-Passwort",
      "Identity":"Identität",
      "error": "Fehler",
      "error-text": "Feld darf nicht leer sein",
      "global-error": "Benutzername und Passwort stimmen nicht überein"
    }
  }
</i18n>
