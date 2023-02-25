export default {
  setSmsLoginData(context, payload) {
    context.commit("changeSmsLoginData", payload);
    return true;
  },
  async login(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhKldGfoU5f6scKWVkut2-4fxRXWrRegk",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.username,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.error.message);
      throw error;
    } else {
      console.log(responseData);
      const data = {
        userId: responseData.localId,
        token: responseData.idToken,
      };
      context.commit("setLogin", data);
    }
  },
};
