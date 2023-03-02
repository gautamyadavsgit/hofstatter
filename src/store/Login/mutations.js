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
    state.token = payload.token;
    state.isLoggedIn = true;
    console.log(payload);
    localStorage.setItem("userId", state.userId);
    localStorage.setItem("token", state.token);
  },
  // add auto login when login value is present in localStorage
  autoLogin(state) {
    state.token = localStorage.getItem("token");
    state.userId = localStorage.getItem("userId");
    state.isLoggedIn = true;
  },
};
