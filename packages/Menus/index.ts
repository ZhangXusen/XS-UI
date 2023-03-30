import { App } from "vue";
import Menus from "./index.vue";
import infiniteMenu from "./menu.tsx";
export default {
	install(app: App) {
		app.component("xs-menus", Menus);
		app.component("xs-infinite-menu", infiniteMenu);
	},
};
