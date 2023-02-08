<template>
  <main-card
    class="!my-6"
    :class="{
      '!bg-[#f1f1f1]': expired,
    }"
  >
    <h2 :id="'accordion-collapse-heading-' + id">
      <button
        type="button"
        :data-accordion-target="'#accordion-collapse-body-' + id"
        aria-expanded="true"
        :aria-controls="'accordion-collapse-body-' + id"
        class="flex justify-between items-center w-full text-left"
      >
        <iconify-icon :icon="icon" class="text-2xl w-1/6" />
        <p class="w-4/6">{{ title }}</p>
        <span class="w-1/6">{{ refill }} Refils</span>
      </button>
    </h2>
    <div
      :id="'accordion-collapse-body-' + id"
      class="hidden border-t mt-4 py-3"
      aria-labelledby="accordion-collapse-heading-2"
    >
      <div class="flex rounded-lg w-full justify-between">
        <div class="flex justify-between">
          <img
            src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
            class="inline-block rounded-full h-[40px] w-[40px] border border-black"
          />
          <div class="pl-3">
            <p class="text-sm text-light-grey">Verschrieben von:</p>
            <h4 class="font-bold font-oxygen text-sm">Dr. Christoph Weiser</h4>
          </div>
        </div>
        <div class="flex items-center justify-end">
          <main-icon
            icon="mdi:chat"
            bgStyle="bg-white"
            icoStyle="!text-2xl text-skyblue"
            class="border rounded-lg !py-1 !px-1"
          ></main-icon>
        </div>
      </div>
      <p class="text-sm text-light-grey pt-3">
        Take one tablet daily in the morning, with food for two weeks, avoid
        direct sun explosure.
      </p>
      <div class="flex justify-around pt-2">
        <div>
          <p class="my-1">
            <span class="w-10 inline-block">
              <iconify-icon
                icon="line-md:sun-rising-filled-loop"
                class="text-yellow text-2xl mr-2 inline-block"
              />
            </span>
            <span class="w-10 inl">Morgens</span>
          </p>
          <p class="my-1">
            <span class="w-10 inline-block">
              <iconify-icon
                icon="fa-solid:tablets"
                class="text-cyan text-lg mr-2 inline-block"
              />
            </span>
            <span class="w-10 inl">Morgens</span>
          </p>
        </div>
        <div>
          <p class="my-1">
            <span class="w-10 inline-block">
              <iconify-icon
                icon="mdi:silverware-fork-knife"
                class="text-orange text-2xl mr-2 inline-block"
              />
            </span>
            <span class="w-10 inl">Zum Essen</span>
          </p>
          <p class="my-1">
            <span class="w-10 inline-block">
              <iconify-icon
                icon="quill:paper"
                class="text-grey mr-2 text-2xl inline-block"
              />
            </span>
            <span class="w-10 inl">2 Refils left</span>
          </p>
        </div>
      </div>
    </div>
  </main-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    refill: {
      type: Number,
      required: true,
    },
    expired: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
