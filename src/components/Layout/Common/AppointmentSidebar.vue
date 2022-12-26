<template>
  <div class="py-4 pl-2">
    <main-card class="">
      <div class="flex pb-2">
        <div>
          <main-heading class="py-2">Termine</main-heading>

          <p class="text-base text-[#82837E]">
            Du hast 6 Termine in deine Kalender
          </p>
        </div>
        <div></div>
      </div>
      <v-date-picker
        class=""
        v-model="date"
        :min-date="date"
        mode="dateTime"
        :timezone="timezone"
        color="green"
        title-position="left"
        is-expanded
        :masks="{ title: 'D MMM YYYY', weekdays: 'WWW' }"
      />
    </main-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      timezone: "",
      theme: {
        border: "none",
      },
    };
  },
};
</script>
