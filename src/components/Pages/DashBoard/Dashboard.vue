<template>
  <page-wrapper sidebar>
    <template v-slot:main>
      <div class="grid grid-cols-12">
        <div class="col-span-12">
          <main-card customStyle="mt-14">
            <div class="grid grid-cols-2">
              <div>
                <div class="mb-5">
                  <main-heading customStyle="text-[24px] leading-[30px] pb-2">
                    Hallo, Gautam Yadav
                  </main-heading>
                  <p class="font-oxygen text-[#82837E] text-base"
                    >“Du hast 2 Anfragen in deinem Board”</p
                  >
                </div>
                <div class="pt-5 grid grid-cols-3 gap-4 m-auto">
                  <main-button>Impffragebogen</main-button>
                  <main-button>Lungentest</main-button>
                  <router-link to="/">Lungentest ></router-link>
                </div>
              </div>
              <div> </div>
            </div>
          </main-card>
        </div>
      </div>
    </template>
  </page-wrapper>
</template>

<script></script>
