<template>
  <div class="container m-auto font-oxygen">
    <div class="flex items-center justify-center h-screen mx-2">
      <div class="login-container">
        <div class="m-auto flex w-[40%]">
          <div class="w-2/6">
            <div
              class="w-[25px] h-[25px] bg-[#666AC5] rounded-[50%] m-auto"
            ></div>
          </div>
          <div class="w-4/6">
            <p class="text-[22px] leading-[22px] font-bold">LOGO</p>
          </div>
        </div>
        <div class="m-auto mt-[50px] w-full">
          <form>
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
            <div class="m-auto mt-[124px] w-[300px]">
              <router-link to="/enter-tpn" class="main-button"
                >Request SMS TAN</router-link
              >
            </div>

            <div class="m-auto w-[300px] mt-6 items-center">
              <router-link to="/" class="main-button">Back</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
