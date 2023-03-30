import { defineConfig } from "vitepress";

export default defineConfig({
	title: "Element-plus-plus",
	description: "一个高扩展，便捷使用的二次封装化组件库",
	// head: [
	// 	"link",
	// 	{
	// 		rel: "icon",
	// 		type: "image/svg+xml",
	// 		href: "/public/element-plus-logo.svg",
	// 	},
	// ],
	// base: "/docs/",
	themeConfig: {
		siteTitle: false,
		logo: "/element-plus-logo.svg",
		description: "",
		nav: [
			{
				text: "指南",
				link: "/guild/installation",
			},
			{
				text: "组件",
				link: "/examples/ChooseArea/",
			},
		],
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/ZhangXusen/Elements-plus-plus",
			},
		],
		sidebar: {
			"/guild/": [
				{
					text: "基础",
					items: [
						{
							text: "安装",
							link: "/guild/installation",
						},
						{
							text: "快速开始",
							link: "/guild/quickstart",
						},
					],
				},
			],
			"/examples/": [
				{
					text: "基础组件",
					items: [
						{
							text: "图标选择器",
							link: "/examples/ChooseIcon/",
						},
						{
							text: "区域选择",
							link: "/examples/ChooseArea/",
						},
						{
							text: "城市选择",
							link: "/examples/CityPicker/",
						},
						{
							text: "趋势",
							link: "/examples/Trend/",
						},
						{
							text: "通知菜单",
							link: "/examples/Notification/",
						},
						{
							text: "导航栏",
							link: "/examples/Menus/",
						},
						{
							text: "表单",
							link: "/examples/Form/",
						},
						{
							text: "时间选择",
							link: "/examples/TimePicker/",
						},
						{
							text: "进度条",
							link: "/examples/Progress/",
						},
						{
							text: "弹出框表单",
							link: "/examples/ModalForm/",
						},
						{
							text: "表格",
							link: "/examples/Table/",
						},
						{
							text: "日历",
							link: "/examples/Calendar/",
						},
					],
				},
			],
		},
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2019-present Evan You",
		},
	},
});
