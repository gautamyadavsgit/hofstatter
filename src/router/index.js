import { createRouter, createWebHistory } from "vue-router";
// importing Dashboard routes
import DashboardRoutes from "./Dashboard/index.js";
import store from "@/store/store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      // redirecting the root to the login welcome page
      redirect: { name: "login" },
    },
    {
      // creating a group path for all the login pages
      path: "/login",
      name: "login",
      redirect: { name: "welcome" },
      component: () => import("../components/Pages/Login/LoginMain.vue"),
      //checking the condition if user is logged in or not and redirecting
      beforeEnter: (_, _2, next) => {
        if (store.state.login.isLoggedIn) {
          next("/dashboard");
        } else {
          next();
        }
      },
      children: [
        {
          path: "/welcome",
          name: "welcome",
          component: () =>
            import("../components/Pages/Login/Childrens/WelCome.vue"),
        },
        {
          path: "/austria-login",
          name: "austria-login",
          component: () =>
            import("../components/Pages/Login/Childrens/AustriaLogin.vue"),
        },
        {
          path: "/sms-login",
          name: "sms-login",
          component: () =>
            import("../components/Pages/Login/Childrens/SmsLogin.vue"),
        },
        {
          path: "/enter-tpn",
          name: "enter-tpn",
          component: () =>
            import("../components/Pages/Login/Childrens/EnterTpn.vue"),
            //chcking the condition of phone and social security token is entered
          beforeEnter: (_, _2, next) => {
            if (!store.state.login.phoneVerified) {
              next("/sms-login");
            } else {
              next();
            }
          },
        },
      ],
    },
    // using Dashboard Routes
    ...DashboardRoutes,
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      window.scrollTo(savedPosition);
    } else {
      window.scrollTo(0, 0);
    }
  },
});

export default router;
