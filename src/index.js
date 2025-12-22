import EmsEditor from "./editor/index.vue";
import './assets/iconfont/local/iconfont.css'
import './assets/iconfont/国家电网/iconfont.css'
import './assets/iconfont/电器工程/iconfont.css'
import './assets/iconfont/通用图标/iconfont.css'
const components = [EmsEditor];

const install = (app) => {
  if (!app || install.installed) return;
  components.forEach((component) => {
    const name = component.name || component.__name;
    if (name) {
      app.component(name, component);
    }
  });
  install.installed = true;
};

export { EmsEditor, install };
export default { install, EmsEditor };
