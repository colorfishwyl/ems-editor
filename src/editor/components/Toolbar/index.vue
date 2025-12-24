<template>
    <div class="toolBox">
        <a @click="handleAdd">
            <el-tooltip effect="light" content="新增" placement="bottom" popper-class="tooltipcolor">
                <i class="iconfont icon-jia"></i>
            </el-tooltip>
        </a>
        <a @click="handleSave">
            <el-tooltip effect="light" content="保存" placement="bottom" popper-class="tooltipcolor">
                <i class="iconfont icon-baocun"></i>
            </el-tooltip>
        </a>
        <div style="flex: 1"></div>
        <div style="line-height: 40px; margin-left: 8px; width: 34px">{{ zoom }}%</div>
        <div style="flex: 1"></div>
        <a>
            <el-tooltip effect="light" content="导出" placement="bottom" popper-class="tooltipcolor">
                <i class="iconfont icon-daochu"></i>
            </el-tooltip>
        </a>
        <a>
            <el-tooltip effect="light" content="导入" placement="bottom" popper-class="tooltipcolor">
                <i class="iconfont icon-daoru"></i>
            </el-tooltip>
        </a>
    </div>
    <addMenu v-model="addMenuVis"></addMenu>
</template>
<script setup>
import { ElTooltip } from 'element-plus'
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'
import { storeToRefs } from 'pinia'
import addMenu from './addMenu.vue'
import { useGraphStore } from "../../stores/graph";

const graphStore = useGraphStore()
const { graph, zoom } = storeToRefs(graphStore)
const services = inject('topoApi')

const addMenuVis = ref(false)
const handleAdd = () => {
    addMenuVis.value = true
    // services.addMenus({ name: 'node1', label: 'hello', json: JSON.stringify(data) })
}

const handleSave = () => {
    services.saveMenus('node1', graph.toJSON())
}
</script>
<style scoped lang="scss">
.toolBox {
    height: 40px;
    display: flex;
    font-size: 12px;
    background-color: var(--color-background);
    flex-shrink: 0;
    padding: 0 12px;
    border-bottom: 1px solid #080b0f;

    a {
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 6px;
        margin: 4px;
        border-radius: 4px;
        color: #bdc7db;
        text-decoration: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    a:hover {
        color: #4583ff;
        cursor: pointer;
        text-decoration: none;
    }
}
</style>