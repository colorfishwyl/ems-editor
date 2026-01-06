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
        <div style="line-height: 40px;">
            <el-dropdown @command="handleCommand" split-button type="primary" plain size="small"
                style="margin-top: 8px;">
                {{ zoom }}%
                <template #dropdown>
                    <el-dropdown-menu>
                        <template v-for="i in 20">
                            <el-dropdown-item :command="i" v-if="i >= 5 && i <= 20">{{ i }}0%</el-dropdown-item>
                        </template>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>

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
    <addMenu v-if="addMenuVis" @close="addMenuVis = false"></addMenu>
    <previewBox v-if="preVis" @close="preVis = false"></previewBox>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
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

function onKeydown(e) {
    const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform)

    if (
        (isMac && e.metaKey && e.key === 's') ||
        (!isMac && e.ctrlKey && e.key === 's')
    ) {
        e.preventDefault()
        handleSave()
    }
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
        menusStore.removeMenu(() => {
            ElMessage.success("删除成功！")
        })
    })
}

const preVis = ref(false)
const handlePre = () => {
    preVis.value = true
}

const handleCommand = (command) => {
    graphStore.setZoom((+command) * 0.1)
}

const graph = graphStore.graph
let isDrawing = false
let nodes = []
let previewEdge = null

// 激活绘制模式
const handleDraw = () => {
    isDrawing = true
    nodes = []
    previewEdge = null
    graph.container.style.cursor = 'crosshair'
}

// 左键点击：生成节点并连接到上一个节点
graph.on('blank:click', ({ x, y }) => {
    if (!isDrawing) return

    const node = graph.addNode({
        x,
        y,
        width: 20,
        height: 20,
        attrs: { body: { fill: '#1890ff', stroke: '#000' } },
        selectable: true,
        movable: true,
    })

    if (nodes.length > 0) {
        // 上一个节点到当前节点的边
        graph.addEdge({
            source: nodes[nodes.length - 1],
            target: node,
            attrs: { line: { stroke: '#1890ff', strokeWidth: 2 } },
        })
    }

    nodes.push(node)

    // 创建或更新预览边
    previewEdge = null
})

// 鼠标移动：动态预览最后边
graph.on('mousemove', ({ x, y }) => {
    if (!isDrawing || nodes.length === 0) return

    // 移除之前预览边
    if (previewEdge) previewEdge.remove()

    // 新建一条从最后节点到鼠标的预览边
    previewEdge = graph.addEdge({
        source: nodes[nodes.length - 1],
        target: { x, y },
        attrs: { line: { stroke: '#aaa', strokeWidth: 1, strokeDasharray: '4 2' } },
    })
})

// 右键点击：结束绘制
graph.on('blank:contextmenu', ({ e }) => {
    if (!isDrawing) return
    e.preventDefault()
    isDrawing = false
    graph.container.style.cursor = 'default'

    // 删除最后预览边
    if (previewEdge) previewEdge.remove()
    previewEdge = null

    // 可选：把所有节点和边组成 Group
    graph.addNode({
        shape: 'group',
        nodes,
        selectable: true,
        movable: true,
        attrs: { body: { fill: 'rgba(0,0,0,0.05)', stroke: '#666', strokeDasharray: '4 2' } },
    })
})

onMounted(() => {
    window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
})

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