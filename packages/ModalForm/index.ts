import { App } from "vue";
import ModalForm from "./index.vue";

export default {
	install(app: App) {
		app.component("xs-modalForm", ModalForm);
	},
};
