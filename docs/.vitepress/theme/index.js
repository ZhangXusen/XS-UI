import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zxUI from "elements-plus-plus";
import "elements-plus-plus/style.css";

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.use(ElementPlus);
		app.use(zxUI);
	},
};
