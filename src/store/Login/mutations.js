export default {
  changeSmsLoginData(state, payload) {
    state.loginData = payload;
    console.log(state.loginData);
  },
  phoneVerified(state, payload) {
    state.phoneVerified = payload.phoneVerified;
  },
  setLogin(state) {
    state.isLoggedIn = true;
  },
};
