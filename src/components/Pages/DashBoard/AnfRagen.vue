<template>
  <page-wrapper>
    <div class="grid grid-cols-12 mt-12">
      <div class="col-span-10 flex justify-between mb-5">
        <div>
          <main-heading>
            Anfragen
            <span
              class="bg-[#F8CBC8] font-bold ml-2 px-3 py-2 text-center rounded-full text-[#E20603]"
              >3</span
            >
          </main-heading>
        </div>
        <div>
          <form class="flex justify-between">
            <input
              type="text"
              class="w-64 rounded-full h-9 border-none mr-2 px-4"
              placeholder="suche"
            />
            <main-button :link="false" mode="!py-1 !px-3">Apply</main-button>
          </form>
        </div>
      </div>
      <div class="col-span-12 md:col-span-5">
        <main-card customStyle="!py-4 !px-4">
          <div class="flex">
            <div class="w-9/12">
              <main-heading customStyle="text-blue md:text-xl text-md"
                >Abmelden vom Krankenstand</main-heading
              >
              <p class="text-[#82837E] font-normal text-base mt-2">
                Mit der folgenden Option können Sie sich von einem bestehenden
                Krankenstand abmelden
              </p>
              <main-button class="mt-6 inline-block text-sm">
                Weiter
              </main-button>
            </div>
            <div class="w-3/12 flex">
              <unsubscribe-icon class="inline-block m-auto"></unsubscribe-icon>
            </div>
          </div>
        </main-card>
      </div>
      <div class="col-span-12 md:col-span-5">
        <main-card customStyle="!py-4 !px-4">
          <div class="flex">
            <div class="w-9/12">
              <main-heading customStyle="text-blue md:text-xl text-md"
                >Abmelden vom Krankenstand</main-heading
              >
              <p class="text-[#82837E] font-normal text-base mt-2">
                Mit der folgenden Option können Sie sich von einem bestehenden
                Krankenstand abmelden
              </p>
              <main-button class="mt-6 inline-block text-sm">
                Weiter
              </main-button>
            </div>
            <div class="w-3/12 flex">
              <unsubscribe-icon class="inline-block m-auto"></unsubscribe-icon>
            </div>
          </div>
        </main-card>
      </div>
      <div class="col-span-12 md:col-span-5">
        <main-card customStyle="!py-4 !px-4">
          <div class="flex">
            <div class="w-9/12">
              <main-heading customStyle="text-blue md:text-xl text-md"
                >Abmelden vom Krankenstand</main-heading
              >
              <p class="text-[#82837E] font-normal text-base mt-2">
                Mit der folgenden Option können Sie sich von einem bestehenden
                Krankenstand abmelden
              </p>
              <main-button class="mt-6 inline-block text-sm">
                Weiter
              </main-button>
            </div>
            <div class="w-3/12 flex">
              <unsubscribe-icon class="inline-block m-auto"></unsubscribe-icon>
            </div>
          </div>
        </main-card>
      </div>
      <div class="col-span-12 md:col-span-5">
        <main-card customStyle="!py-4 !px-4">
          <div class="flex">
            <div class="w-9/12">
              <main-heading customStyle="text-blue md:text-xl text-md"
                >Abmelden vom Krankenstand</main-heading
              >
              <p class="text-[#82837E] font-normal text-base mt-2">
                Mit der folgenden Option können Sie sich von einem bestehenden
                Krankenstand abmelden
              </p>
              <main-button class="mt-6 inline-block text-sm">
                Weiter
              </main-button>
            </div>
            <div class="w-3/12 flex">
              <unsubscribe-icon class="inline-block m-auto"></unsubscribe-icon>
            </div>
          </div>
        </main-card>
      </div>
      <div class="col-span-12 md:col-span-5">
        <main-card customStyle="!py-4 !px-4">
          <div class="flex">
            <div class="w-9/12">
              <main-heading customStyle="text-blue md:text-xl text-md"
                >Abmelden vom Krankenstand</main-heading
              >
              <p class="text-[#82837E] font-normal text-base mt-2">
                Mit der folgenden Option können Sie sich von einem bestehenden
                Krankenstand abmelden
              </p>
              <main-button class="mt-6 inline-block text-sm">
                Weiter
              </main-button>
            </div>
            <div class="w-3/12 flex">
              <unsubscribe-icon class="inline-block m-auto"></unsubscribe-icon>
            </div>
          </div>
        </main-card>
      </div>
      <div class="col-span-12 md:col-span-5">
        <main-card customStyle="!py-4 !px-4">
          <div class="flex">
            <div class="w-9/12">
              <main-heading customStyle="text-blue md:text-xl text-md"
                >Abmelden vom Krankenstand</main-heading
              >
              <p class="text-[#82837E] font-normal text-base mt-2">
                Mit der folgenden Option können Sie sich von einem bestehenden
                Krankenstand abmelden
              </p>
              <main-button class="mt-6 inline-block text-sm">
                Weiter
              </main-button>
            </div>
            <div class="w-3/12 flex">
              <unsubscribe-icon class="inline-block m-auto"></unsubscribe-icon>
            </div>
          </div>
        </main-card>
      </div>
    </div>
  </page-wrapper>
</template>

<script>
import UnsuscribeIcon from "../../icons/Anfragen/UnsubscribeIcon.vue";
export default {
  components: {
    "unsubscribe-icon": UnsuscribeIcon,
  },
};
</script>
