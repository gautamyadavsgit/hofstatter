<template>
  <div class="md:w-[60$] lg:w-[70%] w-full hidden md:flex flex-col">
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
    <div class="flex-1 overflow-auto mt-3">
      <div class="py-2 px-3">
        <div class="flex mb-2">
          <div>
            <p class="text-sm mt-1 chat-msg">
              Hi everyone! Glad you could join! I am making a new movie.
            </p>
            <p class="text-sm text-[#82837E] mt-1">12:45 pm</p>
          </div>
        </div>

        <div class="flex justify-end mb-2">
          <div>
            <p class="text-sm mt-1 chat-msg snd">
              hello friend is everything working fine.
            </p>
            <p class="text-right text-sm text-[#82837E] mt-1">12:45 pm</p>
          </div>
        </div>
        <div class="flex mb-2">
          <div>
            <p class="text-sm mt-1 chat-msg">
              Hi everyone! Glad you could join! I am making a new movie.
            </p>
            <p class="text-sm text-[#82837E] mt-1">12:45 pm</p>
          </div>
        </div>

        <div class="flex justify-end mb-2">
          <div>
            <p class="text-sm mt-1 chat-msg snd">
              hello friend is everything working fine.
            </p>
            <p class="text-right text-sm text-[#82837E] mt-1">12:45 pm</p>
          </div>
        </div>
        <div class="flex mb-2">
          <div>
            <p class="text-sm mt-1 chat-msg">
              Hi everyone! Glad you could join! I am making a new movie.
            </p>
            <p class="text-sm text-[#82837E] mt-1">12:45 pm</p>
          </div>
        </div>

        <div class="flex justify-end mb-2">
          <div>
            <p class="text-sm mt-1 chat-msg snd">
              hello friend is everything working fine.
            </p>
            <p class="text-right text-sm text-[#82837E] mt-1">12:45 pm</p>
          </div>
        </div>
        <div class="flex mb-2">
          <div>
            <p class="text-sm mt-1 chat-msg">
              Hi everyone! Glad you could join! I am making a new movie.
            </p>
            <p class="text-sm text-[#82837E] mt-1">12:45 pm</p>
          </div>
        </div>

        <div class="flex justify-end mb-2">
          <div>
            <p class="text-sm mt-1 chat-msg snd">
              hello friend is everything working fine.
            </p>
            <p class="text-right text-sm text-[#82837E] mt-1">12:45 pm</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Input -->
    <div class="border-t flex">
      <div class="py-2 flex items-center w-[94%]">
        <div class="flex-1 mx-4">
          <form>
            <input
              type="text"
              class="w-full border-none focus:outline-none"
              placeholder="Write Your reply here"
            />
          </form>
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
      <div class="py-4 px-3 bg-[#181FF4] w-[6%]">
        <iconify-icon
          class="text-2xl mx-1 inline-block text-white"
          icon="typcn:microphone"
        />
      </div>
    </div>
  </div>
</template>

<script></script>
