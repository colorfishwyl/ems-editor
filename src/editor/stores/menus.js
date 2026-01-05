import { defineStore } from 'pinia'
import { useGraphStore } from "./graph";

export const useMenusStore = defineStore('menus', {
  state: () => ({ menus: [], current: [], services: {} }),
  getters: {
    currentMenu: (state) => state.menus.find(item => item.id === state.current[0])?.children.find(item => item.id === state.current[1]),
  },
  actions: {
    async setCurrentMenu(keyPath, reload = false) {
      const graphStore = useGraphStore()
      if (JSON.stringify(keyPath) === JSON.stringify(this.current) && reload === false) {
        return false
      }
      this.current = keyPath
      graphStore.loadMenu(await this.services.getMenu(keyPath[1]))
    },
    async loadAllMenus(reload = false) {
      this.menus = await this.services?.getAllMenus()
      if (reload && this.menus[0] && this.menus[0].children[0]) {
        this.setCurrentMenu([this.menus[0].id, this.menus[0].children[0].id])
      }
    },
    async addMenu(form, callback) {
      const menusItem = await this.services?.addMenu(form)
      this.loadAllMenus()
      this.setCurrentMenu([menusItem.parentId, menusItem.id])
      if (callback) callback()
    },
    async saveMenu(callback) {
      const graphStore = useGraphStore()
      const menusJson = {
        name: graphStore.name,
        id: this.current[1],
        parentId: this.current[0],
        style: graphStore.style,
        value: graphStore.graph.toJSON()
      }
      await this.services.saveMenus(menusJson)
      if (callback) callback()
    },
    clearMenu(callback) {
      const graphStore = useGraphStore()
      const menusJson = {
        name: graphStore.name,
        id: this.current[1],
        parentId: this.current[0],
        style: graphStore.style,
        value: {}
      }
      this.services.saveMenus(menusJson)
      graphStore.graph.clearCells()
      if (callback) callback()
    },
    async removeMenu(callback) {
      await this.services.removeMenu(this.current[1])
      await this.loadAllMenus()
      if (this.menus[0] && this.menus[0].children[0]) {
        this.setCurrentMenu([this.menus[0].id, this.menus[0].children[0].id])
      } else {
        const graphStore = useGraphStore()
        graphStore.graph.clearCells()
        graphStore.name = ''
        graphStore.id = ''
      }
      if (callback) callback()
    }
  },
})