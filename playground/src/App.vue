<template>
  <div class="app">
    <ems-editor class="demo-editor" @exit="handleExit" :services="editorServices" :width="1500"
      :height="800"></ems-editor>
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
const getMenus = () => {
  const tempMenus = [
    {
      name: '运行监控',
      children: [
        { name: '站点一次图' },
        { name: '首页概览' },
        { name: '储能监测' },
        { name: 'PCS监测' },
        { name: 'BMS监测' },
        { name: '箱变监测' },
        { name: '协控监测' },
        { name: '光伏设备监测' }
      ]
    },
    {
      name: '能量管理',
      children: [
        { name: 'AGC' },
        { name: 'AVC' },
        { name: '调峰' },
        { name: '调频' },
        { name: '计划曲线跟踪' },
        { name: '用户侧能量管理' }
      ]
    },
    {
      name: '告警管理', children: [{ name: '实时告警' }]
    }]

  tempMenus.forEach(item => {
    item.code = crypto.randomUUID()
    item.children.forEach(child => {
      child.code = crypto.randomUUID()
      child.sytle = {}
      child.value = {}
    })
  });
  Storage.setItem('menus', tempMenus)
  return tempMenus;
}

let menus = Storage.getItem('menus') || getMenus()
console.log(JSON.stringify(menus));
const editorServices = {
  getAllMenus() {
    return JSON.parse(JSON.stringify(menus))
  },
  getMenu(code) {
    let m = null
    top: for (let menuItem of menus) {
      if (menuItem.children) {
        for (let child of menuItem.children) {
          if (child.code === code) {
            m = child;
            break top;
          }
        }
      }
    }
    return m;
  },
  getMenuJson(code) {
    return Storage.getItem(code) || this.getMenu(code) || {};
  },
  addMenu({ parent, parentNameNew, name }) {
    let code = crypto.randomUUID()
    let parentCode = ''
    if (parent === '-1') {
      parentCode = crypto.randomUUID()
      menus.push({ name: parentNameNew, code: parentCode, children: [{ name, code, sytle: {}, value: {} }] })
    } else {
      const parentItem = menus.find(item => item.code === parent);
      if (parentItem) {
        parentCode = parentItem.code
        parentItem.children.push({ name, code, sytle: {}, value: {} });
      }
    }
    Storage.setItem(code, this.getMenu(code))
    Storage.setItem('menus', menus)
    return [parentCode, code];
  },
  saveMenus(menu) {
    const m = this.getMenu(menu.code);
    if (m) {
      m.name = menu.name;
      m.style = menu.style;
      m.value = menu.value;
    }
    Storage.setItem(m.code, m)
  },
  removeMenus(code) {
    const menu = this.getMenu(code);
    if (menu) {
      const parent = menus.find(item => item.children?.some(child => child.code === code));
      if (parent) {
        parent.children = parent.children.filter(child => child.code !== code);
      }
    }
    Storage.removeItem(code)
  },
  clearMenus(code) {
    const menu = this.getMenu(code);
    if (menu) {
      menu.sytle = {};
      menu.value = {};
    }
    Storage.setItem(code, menu || {});
  }
}


const handleExit = () => {

}
</script>
