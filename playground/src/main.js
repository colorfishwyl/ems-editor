import { createApp } from "vue";
import App from "./App.vue";
import EmsEditor from "@colorfishwyl/ems-editor";
import "../src/style.css";
import "./style.css";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

const app = createApp(App);
app.use(EmsEditor);
app.mount("#app");
