import { defineStore } from 'pinia'
import { useGraphStore } from "./graph";

export const useMenusStore = defineStore('menus', {
  state: () => ({ menus: [], current: [], services: {} }),
  getters: {
    currentMenu: (state) => state.menus.find(item => item.code === state.current[0])?.children.find(item => item.code === state.current[1]),
  },
  actions: {
    setCurrentMenu(keyPath, reload = false) {
      const graphStore = useGraphStore()
      if (JSON.stringify(keyPath) === JSON.stringify(this.current) && reload === false) {
        return false
      }
      this.current = keyPath
      graphStore.loadMenu(this.services.getMenuJson(keyPath[1]))
      console.log(this.services.getMenuJson(keyPath[1]))
    },
    loadAllMenus() {
      this.menus = this.services?.getAllMenus()
    },
    addMenu(form, callback) {
      const path = this.services?.addMenu(form)
      this.loadAllMenus()
      this.setCurrentMenu(path)
      if (callback) callback()
    },
    saveMenu(callback) {
      const graphStore = useGraphStore()
      const menusJson = {
        name: graphStore.name,
        code: this.current[1],
        style: graphStore.style,
        value: graphStore.graph.toJSON()
      }
      this.services.saveMenus(menusJson)
      if (callback) callback()
    },
    clearMenu(callback) {
      const graphStore = useGraphStore()
      const menusJson = {
        name: graphStore.name,
        code: this.current[1],
        style: graphStore.style,
        value: {}
      }
      this.services.saveMenus(menusJson)
      graphStore.graph.clearCells()
      if (callback) callback()
    },
    deleteMenu(callback) {

      if (callback) callback()
    }
  },
})