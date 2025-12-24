<template>
    <div class="groups-menus">
        <el-menu default-active="map" @open="handleOpen" @close="handleClose" @select="handleSelect"
            background-color="transparent">
            <el-sub-menu v-for="menu in menus" :key="menu.name" :index="menu.name" :popper-offset="100">
                <template #title>
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ menu.label }}</span>
                </template>
                <el-menu-item v-for="item in menu.children" :key="item.name" :index="item.name">
                    <el-icon>
                        <document />
                    </el-icon>
                    <template #title>{{ item.label }}</template>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script setup>
import { ref, onMounted, inject, watch } from 'vue'
import { Document, Menu as IconMenu, Picture as IconPicture } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useGraphStore } from "../../stores/graph";
import { useMenusStore } from "../../stores/menus";

const menusStore = useMenusStore()
const graphStore = useGraphStore()
const { menus, current } = storeToRefs(menusStore)
const { graph } = storeToRefs(graphStore)
const services = inject('topoApi')
menus.value = services.getAllMenus()
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleSelect = (key, keyPath) => {
    menusStore.setCurrentMenu(keyPath, graph.value, services.getMenuJson(key) || {})
}

watch(graph, (newVal, oldVal) => {
    if (oldVal === null && newVal) {
        handleSelect(menus.value[0].name, [menus.value[0].name, menus.value[0].children[0].name])
    }
})

onMounted(() => {
})
</script>
<style scoped lang="scss">
.groups-menus {
    min-height: 0;
    flex: 1;
    box-sizing: border-box;
    border-top: 1px solid #303746;
    overflow-y: auto;
    font-size: 12px;
    z-index: 20;
}
</style>