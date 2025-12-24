<template>
  <div class="app">
    <ems-editor class="demo-editor" @exit="handleExit" :services="editorServices"></ems-editor>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
const graphRef = ref(null);

let menus = [
  {
    name: 'home',
    label: '运行监控',
    children: [
      { name: 'map', label: '站点一次图' },
      { name: 'overview', label: '首页概览' },
      { name: 'energy', label: '储能监测' },
      { name: 'pcs', label: 'PCS监测' },
      { name: 'bms', label: 'BMS监测', },
      { name: 'box', label: '箱变监测', },
      { name: 'control', label: '协控监测', },
      { name: 'pv', label: '光伏设备监测', }
    ]
  },
  {
    name: 'ems',
    label: '能量管理',
    children: [
      { name: 'agc', label: 'AGC', },
      { name: 'avc', label: 'AVC', },
      { name: 'peak', label: '调峰', },
      { name: 'frequency', label: '调频' },
      { name: 'plan', label: '计划曲线跟踪' },
      { name: 'user', label: '用户侧能量管理' }
    ]
  },
  { name: 'alarm', label: '告警管理', children: [{ name: 'real', label: '实时告警' }] }
]

const editorServices = {
  getAllMenus: () => {
    return JSON.parse(JSON.stringify(menus))
  },
  getMenuJson: (name) => {
    // try {
    //   const Json = menus.find(item => item.name === name)?.json || "{}"
    //   return JSON.parse(Json)
    // } catch (e) {
    //   return {}
    // }
    return Storage.getItem(name) || {}
  },
  addMenus: ({ parentName, parentNameNew, parentLabelNew, name, label }) => {
    if (parentName == 0) {
      menus.push({ name: parentNameNew, label: parentLabelNew, children: [{ name, label }] })
    } else {
      menus.find(item => item.name === parentName)?.children.push({ name, label })
    }
    Storage.setItem(name, {})
  },
  saveMenus: (name, json) => {
    Storage.setItem(name, json)
  },
  removeMenus: (name) => {
    Storage.removeItem(name)
  },
  clearMenus: (name) => {
    Storage.setItem(name, {})
  }
}


const handleExit = () => {

}
</script>
