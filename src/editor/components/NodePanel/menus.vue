<template>
    <div class="groups-menus">
        <el-menu :default-active="current[1]" @select="handleSelect" background-color="transparent">
            <el-sub-menu v-for="menu in menus" :key="menu.code" :index="menu.code" :popper-offset="100">
                <template #title>
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ menu.name }}</span>
                </template>
                <el-menu-item v-for="item in menu.children" :key="item.code" :index="item.code">
                    <el-icon>
                        <document />
                    </el-icon>
                    <template #title>{{ item.name }}</template>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script setup>
import { ref, onMounted, inject, watch } from 'vue'
import { Document, Menu as IconMenu, Picture as IconPicture } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useMenusStore } from "../../stores/menus";

const menusStore = useMenusStore()
const { menus, current } = storeToRefs(menusStore)

const handleSelect = (key, keyPath) => {
    menusStore.setCurrentMenu(keyPath)
}

onMounted(() => {
    console.log(menus, current)
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