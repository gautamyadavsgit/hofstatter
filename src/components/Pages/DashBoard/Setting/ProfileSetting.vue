<template>
  <div class="py-2 px-4">
    <form class="account-setting">
      <h4 class="text-lg font-oxygenBold text-black">
        {{ $t("basic information") }}-
      </h4>
      <div class="md:flex md:space-x-11">
        <div class="w-full">
          <label for="firstname">{{ $t("firstname") }}: </label>
          <input
            :placeholder="$t('Enter your') + ' ' + $t('firstname')"
            id="firstname"
            type="text"
          />
        </div>
        <div class="w-full">
          <label for="lastname">{{ $t("lastname") }}: </label>
          <input
            :placeholder="$t('Enter your') + $t('lastname')"
            id="lastname"
            type="text"
          />
        </div>
        <div class="w-full">
          <label for="phone"> {{ $t("Phone Number") }}:</label>
          <input placeholder="(000)-000-00000" id="phone" type="text" />
        </div>
      </div>
      <div class="md:flex md:space-x-11 mt-5">
        <div class="w-full">
          <h5 class="text-black py-3">{{ $t("Profile.gender") }}:</h5>

          <input type="radio" id="male" class="!inline-block" name="gender" />
          <label for="male" class="!inline-block px-2 text-black !py-1">
            {{ $t("male") }}
          </label>
          <input id="female" type="radio" name="gender" class="!inline-block" />
          <label for="female" class="!inline-block px-2 text-black !py-0">
            {{ $t("female") }}
          </label>
        </div>
        <div class="w-full">
          <label for="dob"> D.O.B </label>
          <input placeholder="dd/mm/yyyy" id="dob" type="date" />
        </div>
        <div class="w-full">
          <label for="age">{{ $t("age") }}: </label>
          <input
            :placeholder="$t('Enter your') + ' ' + $t('age')"
            id="age"
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:space-x-11 mt-5">
        <div class="w-full">
          <label>{{ $t("Profile.height") }}</label>
          <input
            type="text"
            :placeholder="$t('Enter your') + ' ' + $t('Profile.height')"
          />
        </div>
        <div class="w-full">
          <label for="weight"> {{ $t("Profile.weight") }}: </label>
          <input
            :placeholder="$t('Enter your') + ' ' + $t('Profile.weight')"
            id="weight"
            type="text"
          />
        </div>
        <div class="w-full">
          <label for="bloodgroup">{{ $t("Profile.blood group") }}: </label>
          <input
            :placeholder="$t('Enter your') + ' ' + $t('Profile.blood group')"
            id="bloodgroup"
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:space-x-11 mt-5">
        <div class="w-full">
          <h5 class="text-black py-3">
            {{ $t("Profile.membership status") }}:
          </h5>

          <input
            type="radio"
            id="active"
            class="!inline-block"
            name="member-status"
          />
          <label for="active" class="!inline-block px-4 text-black !py-1">
            {{ $t("Active") }}
          </label>
          <input
            id="inactive"
            type="radio"
            name="member-status"
            class="!inline-block"
          />
          <label for="inactive" class="!inline-block px-4 text-black !py-0">
            {{ $t("Inactive") }}
          </label>
        </div>
        <div class="w-full">
          <label for="ppn"> {{ $t("Registered date") }}: </label>
          <input placeholder="dd/mm/yyyy" id="ppn" type="date" />
        </div>
        <div class="w-full">
          <label for="has">{{ $t("Profile.house number and street") }}: </label>
          <input
            :placeholder="
              $t('Enter') + ' ' + $t('Profile.house number and street')
            "
            id="has"
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:space-x-11 mt-5">
        <div class="w-full">
          <label for="city">{{ $t("city") }}: </label>
          <input
            :placeholder="$t('enter') + ' ' + $t('city')"
            id="city"
            type="text"
          />
        </div>
        <div class="w-full">
          <label for="postcode">{{ $t("Profile.postcode") }}: </label>
          <input
            :placeholder="$t('Enter') + ' ' + $t('Profile.postcode')"
            id="postcode"
            type="text"
          />
        </div>
        <div class="w-full"></div>
        <!-- <div class="w-72"></div> -->
      </div>

      <div class="flex mt-5 justify-around md:justify-end">
        <main-button :link="false">{{ $t("update") }}</main-button>
        <main-button class="!bg-white !text-blue mx-2">{{
          $t("cancel")
        }}</main-button>
      </div>
    </form>
  </div>
</template>
