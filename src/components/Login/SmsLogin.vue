<template>
  <div class="container m-auto font-oxygen">
    <login-card>
      <logo-area></logo-area>
      <form>
        <div class="content-area">
          <div class="m-auto w-full">
            <div class="mb-5">
              <label
                class="text-center block text-[16px] leading-[20px] font-bold"
                for="phone"
              >
                Enter Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="0664 555 1333 323"
                class="input-login"
              />
            </div>
            <div class="mb-5">
              <label
                class="text-center block text-[16px] leading-[20px] font-bold"
                for="phone"
              >
                Enter Social Security Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="4332 010197"
                class="input-login"
              />
            </div>
          </div>
        </div>
        <div class="btn-area">
          <div class="m-auto w-[300px]">
            <router-link to="/enter-tpn" class="main-button"
              >Request SMS TAN</router-link
            >
          </div>

          <div class="m-auto w-[300px] mt-6 items-center">
            <a class="main-button" @click="$router.go(-1)">
              <span
                ><font-awesome-icon icon="fas fa-long-arrow-alt-left"
              /></span>
              Back</a
            >
          </div>
        </div>
      </form>
    </login-card>
  </div>
</template>

<script></script>
