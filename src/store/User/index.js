import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      userData: {
        firstName: "John",
        lastName: "Doe",
        userType: "Patient",
        profilePic: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
      },
    };
  },
  getters: getters,
};
