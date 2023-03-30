import { App } from "vue";
import * as Icons from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import ChooseIcon from "./ChooseIcon";
import ChooseArea from "./ChooseArea";
import Calendar from "./Calendar";
import CityPicker from "./CityPicker";
import Form from "./Form";
import Menu from "./Menus";
import ModalForm from "./ModalForm";
import NoticeList from "./NoticeList";
import Notification from "./Notification";
import Progress from "./Progress";
import Table from "./Table";
import TimePicker from "./TimePicker";
import Trend from "./Trend";
import { toLine } from "../src/utils";

const components = [
	ChooseIcon,
	ChooseArea,
	Calendar,
	CityPicker,
	Form,
	Menu,
	ModalForm,
	NoticeList,
	Notification,
	Progress,
	Table,
	TimePicker,
	Trend,
];

export default {
	install(app: App) {
		for (let i in Icons) {
			app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
			console.log((Icons as any)[i]);
		}
		components.map((item) => {
			return app.use(item);
		});
	},
};
