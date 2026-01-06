import { defineStore } from 'pinia'

const targetType = {
  Blank: 'blank',
  NODE: 'node',
  EDGE: 'edge',
}

export const usePropertyStore = defineStore('property', {
  state: () => ({
    targetType: targetType.Blank,
    cellId: null,
    tabs: ['画布'],
    activeTab: 0,
  }),
  getters: {
  },
  actions: {
    setTarget(type, id) {
      this.targetType = type
      if (type === targetType.Blank) {
        this.tabs = ['画布']
      } else {
        this.tabs = ['外观', '数据', '动画', '状态', '交互']
      }
      this.activeTab = 0
      this.cellId = id
    }
  },
})