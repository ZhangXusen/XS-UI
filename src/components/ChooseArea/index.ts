import { App } from "vue";
import chooseArea from "./index.vue";

export default {
	install(app: App) {
		app.component("choose-area", chooseArea);
	},
};
