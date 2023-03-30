import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "elements-plus-plus/style.css";
// import "plugin-that-access-window-on-import";
export default {
	...DefaultTheme,
	async enhanceApp({ app }) {
		app.use(ElementPlus);

		if (!import.meta.env.SSR) {
			const zxUI = await import("elements-plus-plus");
			app.use(zxUI.default);
		}
	},
};
