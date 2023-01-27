<template>
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

      <back-button></back-button>
    </div>
  </form>
</template>

<script></script>
