export default {
  changeSmsLoginData(state, payload) {
    state.loginData = payload;
    console.log(state.loginData);
  },
  phoneVerified(state, payload) {
    state.phoneVerified = payload.phoneVerified;
  },
  setLogin(state, payload) {
    state.userId = payload.userId;
    state.isLoggedIn = true;
    console.log(payload);
    localStorage.setItem("userId", state.userId);
  },
  // add auto login when login value is present in localStorage
  autoLogin(state) {
    state.isLoggedIn = true;
  },
};
