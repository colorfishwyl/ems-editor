import { defineStore } from 'pinia'

const targetType = {
  CANVAS: 'canvas',
  NODE: 'node',
  EDGE: 'edge',
}

export const usePropertyStore = defineStore('property', {
  state: () => ({
    targetType: targetType.CANVAS,
    tabs: ['画布'],
    activeTab: 0,
  }),
  getters: {
  },
  actions: {
    setTargetType(type) {
      this.targetType = type
      if (type === targetType.CANVAS) {
        this.tabs = ['画布']
      } else {
        this.tabs = ['外观', '数据', '动画', '状态', '交互']
      }
      this.activeTab = 0
    }
  },
})