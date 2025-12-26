<template>
    <div class="graphics">
        <div class="menus">
            <div class="menu" :class="{ active: groupCurrent === 0 }" @click="groupCurrent = 0">菜单目录</div>
            <div class="menu" :class="{ active: groupCurrent === 1 }" @click="groupCurrent = 1">系统资源</div>
            <div class="menu" :class="{ active: groupCurrent === 2 }" @click="groupCurrent = 2">我的资源</div>
            <div class="menu" :class="{ active: groupCurrent === 3 }" @click="groupCurrent = 3">数据模拟</div>
        </div>
        <menus v-if="groupCurrent === 0"></menus>
        <nodes v-if="groupCurrent === 1"></nodes>

    </div>
</template>
<script setup>

import { ref, onMounted } from 'vue'
import menus from './menus.vue'
import nodes from './nodes.vue'

const groupCurrent = ref(0)

</script>
<style scoped lang="scss">
.graphics {
    height: 100%;
    width: 300px;
    border-right: 1px solid var(--color-border);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: var(--color-background);

    .menus {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        display: flex;

        .menu {
            font-size: 13px;
            width: 72px;
            height: 28px;
            line-height: 28px;
            box-sizing: border-box;
            color: #bdc7db;
            cursor: pointer;
            position: relative;
            text-align: center;
            transition: all 0.2s cubic-bezier(0, 0, 0.15, 1);
            background-color: transparent;
        }

        .menu.active {
            border-radius: 3px;
            border-color: #535f79;
            background-color: #4583ff !important;
            color: #fff !important;
        }

        .menu:hover {
            color: #4583ff;
        }
    }
}

::-webkit-scrollbar {
    width: 3px;
    height: 3px;
    background: transparent;
}

::-webkit-scrollbar-corner {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: #535f79 !important;
    border-radius: 4px;
}

::-webkit-scrollbar-track {
    background-color: transparent !important;
}
</style>