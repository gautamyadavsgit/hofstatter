const SettingRoutes = [
  {
    path: "/setting/account-setting",
    name: "AccountSetting",
    component: () =>
      import("@/components/Pages/DashBoard/Setting/AccountSetting.vue"),
  },
  {
    path: "/setting/profile-setting",
    name: "ProfileSetting",
    component: () =>
      import("@/components/Pages/DashBoard/Setting/ProfileSetting.vue"),
  },
];
export default SettingRoutes;
