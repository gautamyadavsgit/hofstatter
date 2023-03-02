<template>
  <div class="md:px-1 lg:px-0">
    <main-card>
      <div class="grid grid-cols-12">
        <div class="md:col-span-4 col-span-12 border-r-2 border-gray-100">
          <div class="m-auto">
            <div class="m-auto">
              <span
                ><img
                  src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                  class="w-20 h-20 rounded-full border-2 border-solid border-black m-auto"
                />
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
                {{ $t("appointments") }}
              </h4>
            </div>
            <div class="grid grid-cols-12 text-center mt-2">
              <div
                class="col-span-6 text-[25px] font-bold text-black border-r-2 border-gray-200"
              >
                5
                <span
                  class="font-oxygenLight block text-light-grey text-sm text-center"
                  >{{ $t("MyProfile.Past") }}
                </span>
              </div>
              <div class="col-span-6 text-[25px] font-bold text-black">
                3
                <span
                  class="font-oxygenLight block text-light-grey text-sm text-center"
                  >{{ $t("MyProfile.forthcoming") }}
                </span>
              </div>
            </div>
            <div class="text-center mt-5">
              <main-button class="m-auto inline-block !px-1 md:!px-5"
                ><iconify-icon
                  icon="material-symbols:edit-square-outline"
                  class="inline-block text-lg md:text-2xl mt-[-8px]"
                />
                {{ $t("MyProfile.EditProfile") }}</main-button
              >
            </div>
          </div>
        </div>
        <div
          class="md:col-span-8 col-span-12 px-0 md:px-6 pt-6 text-center md:text-left"
        > 
          <div class="grid grid-cols-2 md:grid-cols-3">
            <div>
              <th>{{ $t("MyProfile.Gender") }}</th>
              <td class="pb-8 text-[#82837e] text-[14px]">männlich</td>

              <div>
                <th>{{ $t("MyProfile.Height") }}</th>
                <td class="pb-8 text-[#82837e] text-[14px]">150 Cm</td>
              </div>
              <div>
                <th>{{ $t("MyProfile.MembershipStatus") }}</th>
                <td class="pb-8 text-[#82837e] text-[14px]">25, Lorem Ipsum</td>
              </div>
              <div>
                <th>{{ $t("MyProfile.HouseNumber") }}</th>

                <td class="pb-8 text-[#82837e] text-[14px]">25, Lorem Ipsum</td>
              </div>
            </div>
            <div>
              <th>{{ $t("MyProfile.Birthday") }}</th>
              <td class="pb-8 text-[#82837e] text-[14px]">June 01, 1995</td>

              <th>{{ $t("MyProfile.Weight") }}</th>
              <td class="pb-8 text-[#82837e] text-[14px]">60 Kg</td>
              <th>{{ $t("MyProfile.RegisteredDate") }}</th>
              <td class="pb-8 text-[#82837e] text-[14px]">24.06.2019</td>
              <th>{{ $t("MyProfile.City") }}</th>
              <td class="pb-8 text-[#82837e] text-[14px]">Indore</td>
            </div>
            <div>
              <th>{{ $t("MyProfile.Old") }}</th>
              <td class="pb-8 text-[#82837e] text-[14px]">48</td>
              <th>{{ $t("MyProfile.BloodType") }}</th>
              <td class="pb-8 text-[#82837e] text-[14px]">O+</td>
              <th>{{ $t("MyProfile.PhoneNumber") }}</th>
              <td class="pb-8 text-[#82837e] text-[14px]">452056</td>
              <th>{{ $t("MyProfile.Postcode") }}</th>
              <td class="pb-8 text-[#82837e] text-[14px]">452056</td>
            </div>
          </div>
        </div>
      </div>
    </main-card>
    <div class="grid grid-cols-12">
      <div class="md:col-span-6 col-span-12">
        <main-card customStyle="!py-4 !px-4">
          <div class="flex">
            <div>
              <main-heading>{{ $t("MyProfile.Notes") }}</main-heading>
            </div>
            <div class="w-full">
              <div class="flex float-right">
                <router-link to="/" class="text-blue font-bold"
                  >{{ $t("Show-all") }}
                  <iconify-icon
                    class="inline m-auto"
                    icon="material-symbols:chevron-right-rounded"
                  ></iconify-icon>
                </router-link>
              </div>
            </div>
          </div>
          <div class="my-6">
            <ul class="text-[15px] leading-7">
              <li>- Röntgenüberweisung, Nachfragen</li>
              <li>- Fragen zum Rehaantrag, wann macht diese Sinn</li>
              <li>- Medikamentenliste besprechen</li>
            </ul>
          </div>
          <div class="flex mt-5 justify-around md:justify-end">
            <main-button :link="false">{{
              $t("MyProfile.NoteSave")
            }}</main-button>
          </div>
          <p class="px-2 mt-6 font-medium text-black">
            {{ $t("MyProfile.NoteOne") }}
          </p>
          <div class="p-2 flex rounded-lg w-full justify-between">
            <div class="flex">
              <span
                ><img
                  src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                  class="inline-block rounded-full h-[34px] w-[34px] border border-black"
                />
              </span>
              <h4
                class="font-bold font-oxygen text-black text-[14px] pl-3 pt-1"
              >
                Dr. Julia Saleta
              </h4>
            </div>
            <div class="flex float-right">
              <p class="text-gray flex pl-3 pt-1 text-[12px]">Sep 01, 2022</p>
            </div>
          </div>
        </main-card>
      </div>
      <div class="md:col-span-6 col-span-12">
        <main-card customStyle="!py-4 !px-4">
          <div class="flex">
            <div>
              <main-heading>{{ $t("MyProfile.Documents") }}</main-heading>
            </div>
            <div class="w-full">
              <div class="flex float-right">
                <router-link to="/" class="text-blue font-bold"
                  >{{ $t("Show-all") }}
                  <iconify-icon
                    class="inline m-auto"
                    icon="material-symbols:chevron-right-rounded"
                  ></iconify-icon>
                </router-link>
              </div>
            </div>
          </div>
          <div class="my-6" customStyle="!py-0 !px-0">
            <ul class="list-none md:mt-4">
              <li class="mb-6">
                <div
                  class="p-2 flex rounded-lg w-full justify-between main-card"
                >
                  <div class="flex">
                    <iconify-icon
                      icon="fa-solid:file-pdf"
                      class="text-[25px] text-blue mt-1 opacity-50"
                    ></iconify-icon>
                    <h4
                      class="font-bold font-oxygen text-blue text-[16px] pl-3 pt-1"
                    >
                      {{ $t("MyProfile.Pcr") }}
                    </h4>
                  </div>
                  <div class="flex float-right">
                    <p class="text-gray flex pl-3 pt-1 text-sm">27 kb</p>
                  </div>
                </div>
              </li>
              <li class="mb-6">
                <div
                  class="p-2 flex rounded-lg w-full justify-between main-card"
                >
                  <div class="flex">
                    <iconify-icon
                      icon="fa-solid:file-pdf"
                      class="text-[25px] text-blue mt-1 opacity-50"
                    ></iconify-icon>
                    <h4
                      class="font-bold font-oxygen text-blue text-[16px] pl-3 pt-1"
                    >
                      {{ $t("MyProfile.Xray") }}
                    </h4>
                  </div>
                  <div class="flex float-right">
                    <p class="text-gray flex pl-3 pt-1 text-sm">9 kb</p>
                  </div>
                </div>
              </li>
              <li class="mg-6">
                <div
                  class="p-2 flex rounded-lg w-full justify-between main-card"
                >
                  <div class="flex">
                    <iconify-icon
                      icon="fa-solid:file-pdf"
                      class="text-[25px] text-blue mt-1 opacity-50"
                    ></iconify-icon>
                    <h4
                      class="font-bold font-oxygen text-blue text-[16px] pl-3 pt-1"
                    >
                      {{ $t("MyProfile.BloodReport") }}
                    </h4>
                  </div>
                  <div class="flex float-right">
                    <iconify-icon
                      icon="material-symbols:download"
                      class="text-[25px] text-blue mt-1"
                    ></iconify-icon>
                    <iconify-icon
                      icon="tabler:trash"
                      class="text-[25px] text-black mt-1"
                    ></iconify-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </main-card>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
th,
td {
  display: block;
}
</style>
