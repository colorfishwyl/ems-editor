import { defineStore } from 'pinia'

export const useGraphStore = defineStore('editor-graph', {
  state: () => ({
    graph: null,
    scrollerStyle: {
      backgroundColor: '#1e1e1e',
      borderColor: '#1f5ce0',
      borderWidth: 1,
      borderStyle: 'solid',
      backgroundImage: 'none'
    },
    zoom: 100,
    cursor: {
      x: 0,
      y: 0
    },
    ready: false
  }),

  getters: {
    hasGraph: (state) => !!state.graph
  },

  actions: {
    setGraph(graph) {
      if (this.graph) {
        return
      }
      this.graph = graph
      this.ready = true
    },

    setZoom(scale) {
      this.zoom = Number(scale)
    },

    setCursor(x, y) {
      this.cursor.x = x
      this.cursor.y = y
    },

    reset() {
      if (this.graph) {
        this.graph.dispose()
      }
      this.graph = null
      this.zoom = 1
      this.cursor = { x: 0, y: 0 }
      this.ready = false
    }
  }
})
