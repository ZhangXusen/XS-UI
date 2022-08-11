import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import { toLine } from "./utils";
import './mock'
const app = createApp(App);
//全局注册图标 牺牲性能
for (let i in Icons) {
	app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
	// console.log((Icons as any) [i]);
}

app.use(router);
app.use(ElementPlus);
app.mount("#app");
