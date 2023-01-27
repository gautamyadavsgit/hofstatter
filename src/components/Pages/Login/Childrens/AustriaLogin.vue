<template>
  <form>
    <div class="content-area">
      <div class="m-auto w-full">
        <div class="mb-5">
          <p
            class="text-[22px] leading-[22px] font-bold m-auto grid justify-center mb-5"
          >
            Authenticate with ID Austria
          </p>
          <div>
            <img :src="AusLoginImg" class="m-auto" width="60" height="42" />
          </div>
        </div>

        <div class="mb-5">
          <label
            class="text-center block text-[16px] leading-[20px] font-bold"
            for="phone"
          >
            Username/Phone
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Username/Phone"
            class="input-login"
          />
        </div>
        <div class="mb-5">
          <label
            class="text-center block text-[16px] leading-[20px] font-bold"
            for="phone"
          >
            Signature Password
          </label>
          <input
            type="password"
            id="phone"
            placeholder="4332 010197"
            class="input-login"
          />
        </div>
      </div>
      <div class="btn-area">
        <div class="m-auto mt-1 w-[300px]">
          <router-link to="/dashboard" class="main-button"
            >Identity</router-link
          >
        </div>

        <back-button></back-button>
      </div>
    </div>
  </form>
</template>

<script>
import AusLoginImg from "../../../../assets/images/auslogin.svg";

export default {
  data() {
    return {
      AusLoginImg, // adding image as datapropery
    };
  },
};
</script>
