<template>
  <li class="my-6">
    <main-card class="grid grid-cols-5">
      <div class="col-span-4">
        <span class="font-bold">{{ number }} </span>
        <span class="ml-4 inline-block">{{ title }}</span>

        <p class="mt-1">
          <iconify-icon
            icon="fa-solid:tablets"
            class="text-lg text-cyan inline-block"
          />
          <iconify-icon
            icon="mdi:silverware-fork-knife"
            class="text-2xl text-orange inline-block ml-2"
          />
        </p>
      </div>
      <div class="col-span-1 flex justify-between items-center">
        <button class="border-2 p-1 border-site-grey rounded-full inline-block">
          <iconify-icon icon="mdi:tick" class="text-xl" />
        </button>
        <button class="border-2 p-1 border-site-grey rounded-full inline-block">
          <iconify-icon icon="radix-icons:cross-2" class="text-xl" />
        </button>
      </div>
    </main-card>
  </li>
</template>
<script>
export default {
  props: ["number", "title"],
};
</script>
