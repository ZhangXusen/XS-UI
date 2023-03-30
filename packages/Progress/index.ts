import { App } from "vue";
import Progress from "./index.vue";

export default {
	install(app: App) {
		app.component("xs-progress", Progress);
	},
};
