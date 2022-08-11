import ChooseIcon from "./ChooseIcon";
import ChooseArea from "./ChooseArea";
import { App } from "vue";

const components = [ChooseIcon, ChooseArea];

export default {
	install(app: App) {
		components.map((item) => {
			app.use(item);
		});
	},
};
