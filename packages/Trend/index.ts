import { App } from "vue";
import Trend from "./index.vue";

export default {
	install(app: App) {
		app.component("xs-trend", Trend);
	},
};
