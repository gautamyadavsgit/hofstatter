<template>
  <div class="h-[100%] md:w-[60$] lg:w-[70%] w-full flex flex-col">
    <!-- Header -->
    <div
      class="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center chat-shadow-double h-[70px]"
    >
      <div class="flex items-center">
        <div>
          <img
            class="w-9 h-9 rounded-full ml-3"
            src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
          />
        </div>
        <div class="ml-4">
          <p class="font-bold text-base font-oxygenBold">Annette Black</p>
        </div>
        <div class="w-2 h-2 rounded-full bg-[#2CC344] ml-6"></div>
        <div class="ml-4">
          <p class="text-sm text-[#82837E] font-oxygenLight">Online</p>
        </div>
      </div>
    </div>

    <!-- Messages -->
    <div class="flex-1 overflow-auto mt-3" ref="chatSection">
      <div class="py-2 px-3">
        <div
          class="flex mb-2"
          v-for="msg in msgArray"
          :key="msg.id"
          :class="msg.snd ? 'justify-end' : ''"
        >
          <div>
            <p class="text-sm mt-1 chat-msg" :class="msg.snd ? 'snd' : ''">
              {{ msg.msg }}
            </p>
            <p
              class="text-sm text-[#82837E] mt-1"
              :class="msg.snd ? 'text-right' : ''"
            >
              {{ msg.date }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Input -->
    <form @submit.prevent="sendMsg">
      <div class="border-t flex">
        <div class="py-2 flex items-center w-[80%] lg:w-[94%]">
          <div class="flex-1 px-4">
            <input
              type="text"
              class="w-full border-none focus:outline-none"
              :placeholder="$t('Write Your reply here')"
              v-model.trim="msg"
            />
          </div>
          <div>
            <iconify-icon
              class="text-2xl mx-1 inline-block"
              icon="ph:smiley-fill"
            />
            <iconify-icon
              class="text-2xl mx-1 inline-block"
              icon="heroicons:paper-clip-solid"
            />
            <iconify-icon
              class="text-2xl mx-1 inline-block"
              icon="ph:camera-fill"
            />
          </div>
        </div>

        <button class="py-4 px-3 bg-[#181FF4] lg:w-[6%] w-[20%] box-border">
          <iconify-icon
            class="text-2xl mx-1 inline-block text-white"
            icon="ion:send"
          />
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRoute: "",
      msg: "",
      msgArray: [
        {
          id: 1,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: false,
          date: "12:45",
        },
        {
          id: 2,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: true,
          date: "12:45",
        },
        {
          id: 3,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: false,
          date: "12:45",
        },
        {
          id: 4,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: true,
          date: "12:45",
        },
        {
          id: 5,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: false,
          date: "12:45",
        },
        {
          id: 6,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: true,
          date: "12:45",
        },
        {
          id: 7,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: false,
          date: "12:45",
        },
        {
          id: 8,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: true,
          date: "12:45",
        },
        {
          id: 9,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: false,
          date: "12:45",
        },
        {
          id: 10,
          msg: "Lorem Ipsum is simply dummy text of the",
          snd: true,
          date: "12:45",
        },
      ],
    };
  },
  computed: {
    date() {
      let date = new Date();
      let hours = date.getHours();
      if (hours.length == 1) {
        hours = "0" + hours;
      }
      let minute = date.getMinutes();
      if (minute.length == 1) {
        minute = "0" + minute;
      }
      var ampm = hours >= 12 ? "PM" : "AM";
      return hours + ":" + minute + " " + ampm;
    },
  },
  methods: {
    sendMsg() {
      if (this.msg != "") {
        let newMsg = {
          id: this.date.toISOString,
          msg: this.msg,
          snd: true,
          date: this.date,
        };
        this.msgArray.push(newMsg);
      }
      // use $nextTick for scroll the section after the dom is updated
      this.$nextTick(() => {
        this.$refs.chatSection.scrollTop = this.$refs.chatSection.scrollHeight;
      });
      this.msg = "";
    },
  },
};
</script>
