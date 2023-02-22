<template>
  <div class="py-5">
    <div class="flex justify-around">
      <div class="w-2/5">
        <slot></slot>
      </div>
      <div class="w-2/5">
        <p class="text-base font-bold">{{ organName }}</p>
        <small
          class="text-xs text-light-grey font-oxygen counter"
          :data-count="organHealthValue"
          >{{ organHealthValue + " %" }}</small
        >
      </div>
      <div class="w-1/5">
        <svg
          v-if="organHealth <= 25"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill="#E7EEF6" />
          <path
            d="M9.79492 12.9307L9.21387 8.05664V6.0332H10.8613V8.05664L10.2461 12.9307H9.79492ZM10.0068 16.123C9.71061 16.123 9.45996 16.0205 9.25488 15.8154C9.0498 15.6104 8.94727 15.3665 8.94727 15.084C8.94727 14.7969 9.0498 14.5485 9.25488 14.3389C9.45996 14.1292 9.71061 14.0244 10.0068 14.0244C10.2985 14.0244 10.5446 14.1292 10.7451 14.3389C10.9502 14.5485 11.0527 14.7969 11.0527 15.084C11.0527 15.3665 10.9502 15.6104 10.7451 15.8154C10.5446 16.0205 10.2985 16.123 10.0068 16.123Z"
            fill="#FF7A00"
          />
        </svg>
      </div>
    </div>
    <div class="w-full bg-gray-200 h-[7px] mt-2 rounded-2xl">
      <div
        class="bg-blue h-[7px] rounded-2xl ease-in-out"
        :style="'width:' + organHealthValue + '%'"
        :class="barColor"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // prop value for organ name
    organName: {
      type: String,
      required: true,
    },
    // prop value for organ Health
    organHealth: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      organHealthValue: 0,
    };
  },
  computed: {
    // computed propery for applying the progress bar color according to the organHealth
    barColor() {
      if (this.organHealth <= 25) {
        return "!bg-[#FD5957]";
      } else if (this.organHealth <= 50) {
        return "!bg-[#FEB500]";
      } else {
        return "!bg-[#00958F]";
      }
    },
  },
  mounted() {
    setInterval(() => {
      // this.organHealthValue = this.organHealth;
      if (this.organHealthValue < this.organHealth) {
        this.organHealthValue++;
      } else {
        return;
      }
    }, 50);
  },
};
</script>
