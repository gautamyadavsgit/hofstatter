// importing necessary modules
import { createRouter, createWebHistory } from "vue-router";
import DashboardRoutes from "./Dashboard/index.js";
import store from "@/store/store.js";

// creating router instance
const router = createRouter({
  history: createWebHistory(),
  // defining routes for the application
  routes: [
    {
      // setting up the default route to redirect to login page
      path: "/",
      redirect: { name: "login" },
    },
    {
      // setting up the login page
      path: "/login",
      name: "login",
      redirect: { name: "welcome" },
      component: () => import("@/Pages/Login/LoginMain.vue"),
      // before entering login page, checking if user is logged in or not
      beforeEnter: (_, _2, next) => {
        if (store.state.login.isLoggedIn) {
          next("/dashboard");
        } else {
          next();
        }
      },
      // defining child routes for login page
      children: [
        {
          path: "/welcome",
          name: "welcome",
          component: () =>
            import("@/Pages/Login/Childrens/WelCome.vue"),
        },
        {
          path: "/austria-login",
          name: "austria-login",
          component: () =>
            import("@/Pages/Login/Childrens/AustriaLogin.vue"),
        },
        {
          path: "/sms-login",
          name: "sms-login",
          component: () =>
            import("@/Pages/Login/Childrens/SmsLogin.vue"),
        },
        {
          path: "/enter-tpn",
          name: "enter-tpn",
          component: () =>
            import("@/Pages/Login/Childrens/EnterTpn.vue"),
            // before entering enter-tpn page, checking if phone and social security token is entered
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
    // including the Dashboard Routes
    ...DashboardRoutes,
  ],
  // configuring the scroll behavior when navigating between pages
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      window.scrollTo(savedPosition);
    } else {
      window.scrollTo(0, 0);
    }
  },
});

// exporting the router instance
export default router;
