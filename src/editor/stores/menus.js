import { defineStore } from 'pinia'

export const useMenusStore = defineStore('menus', {
  state: () => ({ menus: [], current: [] }),
  getters: {
    currentMenu: (state) => state.menus.find(item => item.name === state.current[0])?.children.find(item => item.name === state.current[1]),
  },
  actions: {
    setCurrentMenu(keyPath, graph, Json) {
      console.log(JSON.stringify(keyPath), JSON.stringify(this.current), JSON.stringify(keyPath) === JSON.stringify(this.current))
      if (JSON.stringify(keyPath) === JSON.stringify(this.current)) {
        return false
      }
      this.current = keyPath
      graph.fromJSON(Json)
      setTimeout(() => {
        graph.zoomTo(0.65)
        graph.center()
        console.log(graph)
      }, 100)
    }
  },
})