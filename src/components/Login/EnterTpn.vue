<template>
  <div class="container m-auto font-oxygen">
    <login-card>
      <div class="logo-area">
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
      </div>
      <form>
        <div class="content-area">
          <div class="m-auto w-full">
            <div class="mb-5">
              <label
                class="text-center block text-[16px] leading-[20px] font-normal"
                for="phone"
              >
                Please enter SMS TAN sent to 0664 555 1333 323
              </label>
              <input
                type="number"
                id="phone"
                placeholder="0664555"
                class="input-login"
              />
            </div>
          </div>
        </div>
        <div class="btn-area">
          <div class="m-auto w-[300px]">
            <a href="/dashboard" class="main-button">Login</a>
          </div>

          <div class="m-auto w-[300px] mt-6 items-center">
            <router-link to="/sms-login" class="main-button">Back</router-link>
          </div>
        </div>
      </form>
    </login-card>
  </div>
</template>
