import { App } from "vue";
import chooseIcon from "./index.vue";

export default {
  install(app: App) {
    app.component("choose-icon", chooseIcon);
  },
};
