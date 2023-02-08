// setting up store for managing global state with vuex
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      PatientMedicationDate: new Date(),
    };
  },
});

export default store;
