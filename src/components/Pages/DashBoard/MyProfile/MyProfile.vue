<template>
  <main-card>
    <div class="grid grid-cols-12">
      <div class="col-span-4">
        <div class="m-auto">
          <div class="m-auto">
            <span
              ><img
                src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                class="w-20 h-20 rounded-full border-2 border-solid border-black m-auto"
              />
              <div
                class="h-8 w-8 edit-btn absolute top-[55%] left-[70%] rounded-full bg-white"
              ></div>
            </span>
          </div>
          <div class="mt-2">
            <span
              class="font-oxygenBold text-2xl block whitespace-nowrap text-black text-center"
              >John Doe</span
            ><span
              class="font-oxygenLight block text-light-grey text-sm text-center"
              >johndoe@gmail.com
            </span>

            <h4 class="font-oxygenBold text-blue pt-2 text-center">
              {{ $t("Termine") }}
            </h4>
          </div>
          <div class="w-3/4 m-auto"></div>
        </div>
      </div>
      <div class="col-span-8"></div>
    </div>
  </main-card>
</template>

<script></script>
