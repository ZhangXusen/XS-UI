import { App } from "vue";
import TimePicker from "./index.vue";

export default {
	install(app: App) {
		app.component("xs-timePicker", TimePicker);
	},
};
