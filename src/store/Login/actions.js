export default {
  setSmsLoginData(context, payload) {
    context.commit("changeSmsLoginData", payload);
    return true;
  },
};
