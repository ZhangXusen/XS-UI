import { App } from "vue";
import Table from "./index.vue";

export default {
	install(app: App) {
		app.component("xs-table", Table);
	},
};
