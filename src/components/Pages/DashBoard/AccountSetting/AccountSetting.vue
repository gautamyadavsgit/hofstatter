<template>
  <div class="grid grid-cols-12 mt-12">
    <div class="col-span-11">
      <main-card>
        <main-heading>Account Setting</main-heading>
        <!-- main-profile-area -->
        <div class="flex justify-between mt-4 border-b py-2">
          <div class="flex justify-between items-center">
            <div class="mr-5">
              <span
                ><img
                  src="https://randomuser.me/api/portraits/women/56.jpg"
                  class="w-20 h-20 rounded-full border-2 border-solid border-black"
              /></span>
            </div>
            <div class="hidden md:block">
              <span
                class="font-oxygenBold text-2xl block whitespace-nowrap text-black"
                >John Doe</span
              ><span
                class="font-oxygenLight inline-block float-right text-light-grey text-xl"
                >johndoe@gmail.com
                <iconify-icon
                  icon="mdi:tick-decagram"
                  color="#10c98d"
                  class="inline-block text-2xl"
              /></span>
            </div>
          </div>
          <div>
            <main-button class="m-auto inline-block"
              ><iconify-icon
                icon="material-symbols:edit-square-outline"
                class="inline-block text-white text-2xl mt-[-8px]"
              />
              Profil Bearbeiten</main-button
            >
          </div>
        </div>
        <!-- form-area -->
        <div class="py-2 px-4">
          <form class="account-setting">
            <h4 class="text-lg font-oxygenBold text-black">
              Change Phone Number-
            </h4>
            <div class="flex justify-between w-11/12">
              <div>
                <label for="ppn"> Private Phone Number: </label>
                <input
                  placeholder="Enter your private phone number"
                  id="ppn"
                  type="text"
                />
              </div>
              <div>
                <label for="ppn"> Work Phone Number: </label>
                <input
                  placeholder="Enter your Work Phone Number"
                  id="ppn"
                  type="text"
                />
              </div>
              <div>
                <label for="ppn"> Fix Phone Number: </label>
                <input
                  placeholder="Enter your Fix Phone Number"
                  id="ppn"
                  type="text"
                />
              </div>
            </div>
            <div class="flex justify-between w-11/12 mt-5">
              <div>
                <h4 class="text-lg font-oxygenBold text-black">
                  Change Email-
                </h4>
                <label for="ppn"> Private E-mail: </label>
                <input
                  placeholder="Enter your private phone number"
                  id="ppn"
                  type="text"
                />
              </div>
              <div>
                <h4 class="text-lg font-oxygenBold text-white">-</h4>
                <label for="ppn"> Work E-mail: </label>
                <input
                  placeholder="Enter your private phone number"
                  id="ppn"
                  type="text"
                />
              </div>
              <div>
                <h4 class="text-lg font-oxygenBold text-black">
                  Change Address-
                </h4>
                <label for="ppn">Address Type: </label>
                <input
                  placeholder="Enter your private phone number"
                  id="ppn"
                  type="text"
                />
              </div>
            </div>
            <div class="flex mt-5 justify-end">
              <main-button :link="false">Aktualisieren</main-button>
              <main-button class="!bg-white !text-blue mx-2"
                >Absagen</main-button
              >
            </div>
          </form>
          <div class="col-span-10 px-2 md:px-0 md:flex justify-between my-5">
            <div>
              <h2
                class="font-oxygenBold font-bold whitespace-nowrap text-black md:text-xl text-md"
              >
                Request Representation-
              </h2>
            </div>
            <div>
              <!-- search form -->
              <div>
                <form class="flex justify-between mt-4 md:mt-2">
                  <label class="text-sm m-auto mr-2 font-bold block md:inline"
                    >Filter</label
                  >
                  <select
                    class="w-64 h-9 border-1 border-[#82837E26] rounded-md text-sm !font-oxygen mr-2"
                  >
                    <option value="all" class="font-oxygen">All</option>
                    <option value="dr" class="font-oxygen">Doctor</option>
                  </select>
                  <input
                    type="text"
                    class="md:w-64 w-36 rounded-full h-9 border-none mr-2 px-4"
                    placeholder="suche"
                  />
                  <main-button :link="false" mode="!py-1 !px-3"
                    >Apply</main-button
                  >
                </form>
              </div>
            </div>
          </div>
        </div>
      </main-card>
    </div>
  </div>
</template>

<script></script>
