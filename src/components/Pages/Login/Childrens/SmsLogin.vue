<template>
  <form @submit.prevent="smsloginSubmit">
    <div class="content-area">
      <div class="m-auto w-full">
        <div class="mb-5">
          <label
            class="text-center block text-[16px] leading-[20px] font-bold"
            for="phone"
          >
            {{ $t("Enter-Phone-Number") }}
          </label>
          <input
            type="number"
            id="phone"
            placeholder="0664 555 1333 323"
            class="input-login"
            v-model="input.phone"
          />
        </div>
        <div class="mb-5">
          <label
            class="text-center block text-[16px] leading-[20px] font-bold"
            for="ssn"
          >
            {{ $t("Enter-Social-Security-Number") }}
          </label>
          <input
            type="number"
            id="ssn"
            placeholder="4332 010197"
            class="input-login"
            v-model="input.ssn"
          />
        </div>
      </div>
    </div>
    <div class="btn-area">
      <div class="m-auto w-[300px]">
        <button class="main-button">{{ $t("Request-SMS-TAN") }}</button>
      </div>

      <back-button />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      input: {
        phone: null,
        ssn: null,
      },
    };
  },
  methods: {
    smsloginSubmit() {
      if (this.input.phone == null || this.input.ssn == null) {
        this.$swal({
          title: this.$t("error"),
          text: this.$t("error-text"),
          icon: "warning",
        });
        return;
      }
      console.log(this.$store.state.login.dummyLoginData.phone);
      if (
        this.input.phone != this.$store.state.login.dummyLoginData.phone ||
        this.input.ssn != this.$store.state.login.dummyLoginData.ssn
      ) {
        this.$swal({
          title: this.$t("error"),
          text: this.$t("global-error"),
          icon: "warning",
        });
        return;
      }
      //setting the global phone and ssn data
      this.$store
        .dispatch("login/setSmsLoginData", {
          phone: this.input.phone,
          ssn: this.input.ssn,
        })
        .then((res) => {
          if (res == true) {
            this.$store.commit("login/phoneVerified", { phoneVerified: true });
            this.$router.push("/enter-tpn");
          }
        });
    },
  },
};
</script>

<i18n>
{
  "en":{
    "Enter-Phone-Number":"Enter Phone Number",
    "Enter-Social-Security-Number":"Enter Social Security Number",
    "Request-SMS-TAN":"Request SMS TAN",
    "error":'Error',
    "error-text":'Field cannot be empty',
    "global-error":"Phone number or Security token didn`t match"
  },
  "gr":{
    "Enter-Phone-Number":"Telefonnummer eingeben",
    "Enter-Social-Security-Number":"Geben Sie die Sozialversicherungsnummer ein",
    "Request-SMS-TAN":"SMS-TAN anfordern",
    "error":"Fehler",
    "error-text":"Feld darf nicht leer sein",
    "global-error":"Telefonnummer oder Sicherheitstoken stimmten nicht überein"
  }
}
</i18n>
