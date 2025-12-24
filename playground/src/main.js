import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import EmsEditor from "@colorfishwyl/ems-editor";
import "../src/style.css";
import "./style.css";

const app = createApp(App);
const pinia = createPinia()
app.use(pinia)
app.use(EmsEditor);
app.mount("#app");
