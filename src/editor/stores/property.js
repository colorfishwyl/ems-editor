import { defineStore } from 'pinia'

export const usePropertyStore = defineStore('property', {
  state: () => ({ tabs: ['画布'],  activeTab: 0,  }),
  getters: {
  },
  actions: {
    setCurrentNode(index) {
      this.activeTab = index
    }
  },
})