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
    localStorage.setItem("login", true);
  },
  // add auto login when login value is present in localStorage
  autoLogin(state) {
    state.isLoggedIn = true;
  },
  setLogout(state) {
    state.isLoggedIn = !state.isLoggedIn;
    localStorage.removeItem("login");
    window.location.href = "/";
  },
};
