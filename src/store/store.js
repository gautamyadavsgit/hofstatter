// setting up store for managing global state with vuex
import { createStore } from "vuex";
// importing login module
import Login from "./Login";

const store = createStore({
  modules: {
    login: Login,
  },
  state() {
    return {
      PatientMedicationDate: new Date(),
    };
  },
});

export default store;
