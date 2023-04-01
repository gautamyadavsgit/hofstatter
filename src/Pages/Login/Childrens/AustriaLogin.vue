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
    async ausLoginSubmit() {
      if (this.username === "" || this.password === "") {
        this.$swal({
          title: this.$t("error"),
          text: this.$t("error-text"),
          icon: "warning",
        });
        return;
      }
      const loginData = {
        username: this.username,
        password: this.password,
      };
      let loader = this.$loading.show();
      try {
        await this.$store.dispatch("login/login", loginData);
        this.$router.push("/dashboard");
      } catch (error) {
        this.$swal({
          title: error,
          icon: "error",
        });
      }
      loader.hide();
      // if (
      //   this.username !== this.$store.state.login.dummyLoginData.username &&
      //   this.password !== this.$store.state.login.dummyLoginData.password
      // ) {
      //   this.$swal({
      //     title: this.$t("error"),
      //     text: this.$t("global-error"),
      //   });
      //   return;
      // }
      // this.$store.commit("login/setLogin");
      // this.$router.push("/dashboard");
    },
  },
};
      
