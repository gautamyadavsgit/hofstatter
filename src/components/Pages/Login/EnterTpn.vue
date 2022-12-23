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
            <router-link to="/dashboard" class="main-button">Login</router-link>
          </div>
          <back-button></back-button>
        </div>
      </form>
    </login-card>
  </div>
</template>
