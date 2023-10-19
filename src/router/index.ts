/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-03-30 22:09:16
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-19 20:43:17
 */
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
				path: "/button",
				name: "button",
				component: () => import("../view/Button/index.vue"),
			},
			{
				path: "/collapse",
				name: "collapse",
				component: () => import("../view/Collapse/index.vue"),
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
