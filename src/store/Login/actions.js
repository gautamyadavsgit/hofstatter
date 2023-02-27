export default {
  setSmsLoginData(context, payload) {
    context.commit("changeSmsLoginData", payload);
    return true;
  },
  // action for logout
  logoutHandler(context) {
    context.commit("setLogout");
  },
};
