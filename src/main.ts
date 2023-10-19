/*
 * @Description:
 * @Version: 1.0
 * @Author: 小国际
 * @Date: 2023-03-30 22:09:16
 * @LastEditors: 小国际
 * @LastEditTime: 2023-10-15 12:40:34
 */
import * as Icons from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./mock";
import router from "./router";
import "./style.css";
import { toLine } from "./utils";
const app = createApp(App);
//全局注册图标 牺牲性能
for (let i in Icons) {
	app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
	// console.log((Icons as any) [i]);
}
// import "../lib/style.css";
// import XSChooseIcon from "../packages";
// import uiIcon from "../lib/ChooseIcon/index";
// import XSModalForm from "../lib/ModalForm/index";
// import XSCityPicker from "../lib/CityPicker/index";
// import XSArea from "../lib/ChooseArea/index";
// import "../lib/ChooseIcon/style.css";
// import "../lib/CityPicker/style.css";
// import "../lib/ChooseArea/style.css";

app.use(router);
app.use(ElementPlus);
// app.use(XSChooseIcon);
// app.use(xsUI);
// app.use(uiIcon);
// app.use(XSModalForm);
// app.use(XSCityPicker);
// app.use(XSArea);
app.mount("#app");
