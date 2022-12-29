<template>
  <!-- component for backbutton present in the login screens -->
  <div class="m-auto w-[300px] mt-6 items-center">
    <a class="main-button cursor-pointer" @click="$router.go(-1)">
      <span
        ><iconify-icon
          icon="
material-symbols:arrow-back-ios"
          class="inline-block"
        ></iconify-icon
      ></span>
      Back</a
    >
  </div>
</template>
<script></script>
