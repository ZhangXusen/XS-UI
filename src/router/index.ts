import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Container from "../components/container/src/index.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "container",
    component: Container,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../view/Home.vue"),
      },
      {
        path: "/icon",
        name: "icon",
        component: () => import("../view/ChooseIcon/index.vue"),
      },
      {
        path: "/area",
        name: "area",
        component: () => import("../view/ChooseArea/index.vue"),
      },
      {
        path: "/trend",
        name: "trend",
        component: () => import("../view/Trend/index.vue"),
      },
      {
        path: "/notification",
        name: "notification",
        component: () => import("../view/Notification/index.vue"),
      },
      {
        path: "/menus",
        name: "menus",
        component: () => import("../view/Menus/index.vue"),
      },
      {
        path: "/progress",
        name: "progress",
        component: () => import("../view/Progress/index.vue"),
      },
      {
        path: "/timepicker",
        name: "timepicker",
        component: () => import("../view/TimePicker/index.vue"),
      },
      {
        path: "/citypicker",
        name: "citypicker",
        component: () => import("../view/CityPicker/index.vue"),
      },
      {
        path: "/form",
        name: "form",
        component: () => import("../view/Form/index.vue"),
      },
      {
        path: "/modalform",
        name: "modalform",
        component: () => import("../view/ModalForm/index.vue"),
      },
      {
        path: "/table",
        name: "table",
        component: () => import("../view/Table/index.vue"),
      },
      {
        path: "/calendar",
        name: "calendar",
        component: () => import("../view/Calendar/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
