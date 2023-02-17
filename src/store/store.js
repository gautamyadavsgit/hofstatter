// setting up store for managing global state with vuex
import { createStore } from "vuex";
// importing login module
import login from "./Login";
import user from "./User";

const store = createStore({
  modules: {
    login,
    user,
  },
  state() {
    return {
      PatientMedicationDate: new Date(),
    };
  },
});

export default store;
