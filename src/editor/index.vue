<template>
  <div class="ems-editor">
    <!-- <EditorHeader /> -->
    <div class="ems-editor__workspace">
      <NodePanel />
      <EditorArea :width="props.width" :height="props.height" />
      <PropertiesPanel />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, provide } from "vue";
import EditorArea from "./components/editorArea.vue";
import NodePanel from "./components/NodePanel/index.vue";
import PropertiesPanel from "./components/PropertyPanel/index.vue";
import { useMenusStore } from "./stores/menus";

defineOptions({ name: "EmsEditor" });
const emit = defineEmits(["ready", "exit"]);
const props = defineProps({
  services: {
    type: Object,
    default: () => ({})
  },
  width: {
    type: Number,
    default: 1920
  },
  height: {
    type: Number,
    default: 1080
  }
})

const Storage = {
  setItem(key, value) {
    if (value === undefined) {
      return
    }
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  getItem(key) {
    let json = window.localStorage.getItem(key)
    return JSON.parse(json)
  },
  removeItem(key) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  }
}

const editorServices = {
  async getAllMenus() {
    let menus = []
    if (props.services?.getAllMenus) {
      menus = await props.services.getAllMenus() || []
    } else {
      menus = Storage.getItem('menus') || [
        {
          id: '1',
          parentId: '0',
          name: '首页',
          children: [
            {
              id: crypto.randomUUID(),
              parentId: '1',
              name: '首页概览',
              style: {},
              value: {}
            }
          ]
        }
      ]
    }
    Storage.setItem('menus', menus)
    return menus
  },
  async getMenu(id) {
    if (props.services?.getMenu) {
      return await props.services.getMenu(id) || {}
    } else {
      let menus = Storage.getItem('menus') || []
      top: for (let menuItem of menus) {
        if (menuItem.children) {
          for (let child of menuItem.children) {
            if (child.id === id) {
              return child;
            }
          }
        }
      }
      return {};
    }
  },
  async addMenu({ parent, parentNameNew, name }) {
    if (props.services?.addMenu) {
      return await props.services.addMenu({ parent, parentNameNew, name })
    } else {
      let menus = Storage.getItem('menus') || []
      let addItem = null
      let id = crypto.randomUUID()
      let parentId = ''
      if (parent === '0') {
        parentId = crypto.randomUUID()
        addItem = { name, id, parentId, style: {}, value: {} }
        menus.push({ name: parentNameNew, id: parentId, parentId: '0', children: [addItem] })
      } else {
        const parentItem = menus.find(item => item.id === parent);
        if (parentItem) {
          parentId = parentItem.id
          parentItem.children.push({ name, id, parentId, style: {}, value: {} });
          addItem = { name, id, parentId, style: {}, value: {} }
        }
      }
      Storage.setItem(id, addItem)
      Storage.setItem('menus', menus)
      return addItem;
    }
  },
  async saveMenus(menu) {
    const m = await this.getMenu(menu.id);
    if (m) {
      m.name = menu.name;
      m.style = menu.style;
      m.value = menu.value;
    }
    if (props.services?.saveMenus) {
      await props.services.saveMenus(menu)
    } else {
      let menus = Storage.getItem('menus') || []
      for (let p of menus) {
        const index = p.children.findIndex(c => c.id === menu.id)
        if (index > -1) {
          p.children[index] = menu
        }
      }
      Storage.setItem('menus', menus)
      Storage.setItem(menu.id, menu)
    }
  },
  async removeMenu(id) {
    if (props.services?.removeMenus) {
      await props.services.removeMenu(id)
    } else {
      let menus = Storage.getItem('menus') || []
      const m = this.getMenu(id);
      if (m) {
        const parent = menus.find(item => item.children?.some(child => child.id === id));
        if (parent) {
          parent.children = parent.children.filter(child => child.id !== id);
          if (parent.children.length === 0) {
            menus = menus.filter(item => item.id !== parent.id);
          }
        }
        Storage.setItem('menus', menus)
      }
      Storage.removeItem(id)
    }
  }
}

provide('topoApi', editorServices)


onMounted(() => {
  // requestAnimationFrame(initGraph);
});

onBeforeUnmount(() => {
});
</script>
<style lang="css">
:root {
  --ems-header-bg: #1e2430;
  --ems-border: #e4e7f1;
  --ems-muted: #7a7f95;
  --ems-bg: #f4f6fb;
  --ems-panel-bg: #fff;
  --ems-primary: #3e6df2;
  --ems-radius: 10px;
  --color-background: #1e2430;
  --color-border: #000000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.ems-editor {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  color: #bdc7db;
}

.ems-editor__workspace {
  /* height: calc(100% - 40px); */
  height: 100%;
  display: flex;
}
</style>
