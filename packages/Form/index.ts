import { App } from "vue";
import Form from "./index.vue";

export default {
	install(app: App) {
		app.component("xs-form", Form);
	},
};
