const SettingRoutes = [
  {
    path: "/setting/account-setting",
    name: "AccountSetting",
    component: () =>
      import("@/Pages/DashBoard/Setting/AccountSetting.vue"),
  },
  {
    path: "/setting/profile-setting",
    name: "ProfileSetting",
    component: () =>
      import("@/Pages/DashBoard/Setting/ProfileSetting.vue"),
  },
];
export default SettingRoutes;
