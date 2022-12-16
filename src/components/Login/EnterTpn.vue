<template>
  <div class="container m-auto font-oxygen">
    <login-card>
      <logo-area></logo-area>
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
