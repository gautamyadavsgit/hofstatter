import actions from "./actions";
import mutations from "./mutations";
export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      loginData: {
        phone: null,
        ssn: null,
      },
      dummyLoginData: {
        phone: 8435715363,
        ssn: 12345678,
        tpn: 123456,
      },
      phoneVerified: false,
    };
  },
  mutations: mutations,
  actions: actions,
};
