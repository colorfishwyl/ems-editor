import EmsEditor from "./editor/index.vue";

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
