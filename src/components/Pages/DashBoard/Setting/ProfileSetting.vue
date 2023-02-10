<template>
  <div class="py-2 px-4">
    <form class="account-setting">
      <h4 class="text-lg font-oxygenBold text-black">Grundinformation-</h4>
      <div class="md:flex justify-between w-11/12">
        <div>
          <label for="ppn">Vorname: </label>
          <input placeholder="Enter your first name" id="ppn" type="text" />
        </div>
        <div>
          <label for="ppn">Nachname: </label>
          <input placeholder="Enter your last name" id="ppn" type="text" />
        </div>
        <div>
          <label for="ppn"> Telefonnummer:</label>
          <input placeholder="(000)-000-00000" id="ppn" type="text" />
        </div>
      </div>
      <div class="md:flex justify-between w-full md:w-11/12 mt-5">
        <div>
          <h5 class="text-black py-3">Geschlecht:</h5>

          <input type="radio" id="male" class="!inline-block" name="gender" />
          <label for="male" class="!inline-block px-2 text-black !py-1">
            Männlich
          </label>
          <input id="female" type="radio" name="gender" class="!inline-block" />
          <label for="female" class="!inline-block px-2 text-black !py-0">
            Weiblich
          </label>
        </div>
        <div>
          <label for="ppn"> D.O.B </label>
          <input placeholder="dd/mm/yyyy" id="ppn" type="date" />
        </div>
        <div>
          <label for="ppn">Alter: </label>
          <input placeholder="Enter your age" id="ppn" type="text" />
        </div>
      </div>
      <div class="md:flex justify-between w-full md:w-11/12 mt-5">
        <div>
          <label>Höhe:</label>
          <input type="text" placeholder="Enter your height" />
        </div>
        <div>
          <label for="ppn"> Gewicht: </label>
          <input placeholder="Enter your weight" id="ppn" type="text" />
        </div>
        <div>
          <label for="ppn">Blutgruppe: </label>
          <input placeholder="Enter your blood group" id="ppn" type="text" />
        </div>
      </div>
      <div class="md:flex justify-between w-full md:w-11/12 mt-5">
        <div>
          <h5 class="text-black py-3">Mitgliedsstatus:</h5>

          <input type="radio" id="active" class="!inline-block" name="gender" />
          <label for="active" class="!inline-block px-4 text-black !py-1">
            Active
          </label>
          <input
            id="inactive"
            type="radio"
            name="gender"
            class="!inline-block"
          />
          <label for="inactive" class="!inline-block px-4 text-black !py-0">
            Inactive
          </label>
        </div>
        <div>
          <label for="ppn"> Eingetragenes Datum: </label>
          <input placeholder="dd/mm/yyyy" id="ppn" type="date" />
        </div>
        <div>
          <label for="ppn">Hausnummer und Straße: </label>
          <input
            placeholder="Enter house number and street"
            id="ppn"
            type="text"
          />
        </div>
      </div>
      <div class="md:flex justify-between w-11/12">
        <div>
          <label for="ppn">Stadt: </label>
          <input placeholder="Enter city" id="ppn" type="text" />
        </div>
        <div>
          <label for="ppn">PLZ: </label>
          <input placeholder="Enter zip code" id="ppn" type="text" />
        </div>
        <div class="w-72"></div>
      </div>

      <div class="flex mt-5 justify-around md:justify-end">
        <main-button :link="false">Aktualisieren</main-button>
        <main-button class="!bg-white !text-blue mx-2">Absagen</main-button>
      </div>
    </form>
  </div>
</template>
