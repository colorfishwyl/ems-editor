<template>
    <div class="toolBox">
        <div class="left">
            <a @click="handleAdd">
                <el-tooltip effect="light" content="新增" placement="bottom" popper-class="tooltipcolor">
                    <i class="iconfont icon-xinjian"></i>
                </el-tooltip>
            </a>
            <a @click="handleSave">
                <el-tooltip effect="light" content="保存" placement="bottom" popper-class="tooltipcolor">
                    <i class="iconfont icon-baocun"></i>
                </el-tooltip>
            </a>
            <a @click="handleClear">
                <el-tooltip effect="light" content="清空" placement="bottom" popper-class="tooltipcolor">
                    <i class="iconfont icon-qingkong"></i>
                </el-tooltip>
            </a>
            <a @click="handleDelete">
                <el-tooltip effect="light" content="删除" placement="bottom" popper-class="tooltipcolor">
                    <i class="iconfont icon-shanchu"></i>
                </el-tooltip>
            </a>
        </div>

        <div style="flex: 1"></div>
        <div style="line-height: 40px; margin-left: 8px; width: 34px">{{ zoom }}%</div>
        <div style="flex: 1"></div>
        <div class="right">
            <a @click="handlePre">
                <el-tooltip effect="light" content="预览" placement="bottom" popper-class="tooltipcolor">
                    <i class="iconfont icon-yulan"></i>
                </el-tooltip>
            </a>
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
    </div>
    <addMenu v-model="addMenuVis"></addMenu>
    <previewBox v-if="preVis" @close="preVis = false"></previewBox>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'
import { storeToRefs } from 'pinia'
import addMenu from './addMenu.vue'
import previewBox from './previewBox.vue'
import { useGraphStore } from "../../stores/graph";
import { useMenusStore } from "../../stores/menus";

const menusStore = useMenusStore();
const graphStore = useGraphStore()
const { zoom } = storeToRefs(graphStore)

const addMenuVis = ref(false)
const handleAdd = () => {
    addMenuVis.value = true
}

const handleSave = () => {
    menusStore.saveMenu(() => {
        ElMessage.success("保存成功！")
    })
}

const handleClear = () => {
    ElMessageBox.confirm('确认清空画布吗?', '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' }).then(() => {
        menusStore.clearMenu(() => {
            ElMessage.success("清空成功！")
        })
    })
}

const handleDelete = () => {
    ElMessageBox.confirm('确认删除画布吗?', '提示', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' }).then(() => {
        menusStore.deleteMenu(() => {
            ElMessage.success("删除成功！")
        })
    })
}

const preVis = ref(false)
const handlePre = () => {
    preVis.value = true
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

    .left {
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    .right {
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: right;
    }

    a {
        font-size: 20px;
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

        .iconfont {
            font-size: 18px !important
        }
    }

    a:hover {
        color: #4583ff;
        cursor: pointer;
        text-decoration: none;
    }
}
</style>