<template>
    <div class="nodes">
        <div class="groups">
            <template v-for="(item, index) in nav1" :key="item.index">
                <div class="group" :class="{ active: nav1Current === index }" @click="handleNavClick(index)">
                    <i :class="item.icon"></i>
                    <span>{{ item.name }}</span>
                </div>
            </template>
        </div>
        <div class="list">
            <div
                style="width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 10px 10px 10px">
                <el-input v-model="nav1Filter" style="width: 180px" placeholder="请输入过滤" :prefix-icon="Search"
                    clearable />
                <el-tooltip effect="light" content="展开/折叠" placement="top">
                    <div style="cursor: pointer; font-size: 20px" @click="handleExpend"><i
                            class="iconfont icon-menu-fold"></i>
                    </div>
                </el-tooltip>
            </div>
            <div style="padding: 10px">
                <el-collapse v-model="nav1[nav1Current].active" expand-icon-position="left"
                    style="border: none; background-color: transparent">
                    <template v-for="(cItem, cIndex) in nav1[nav1Current].children" :key="cIndex">
                        <el-collapse-item :title="cItem.name" :name="cIndex">
                            <div class="expand-content"
                                :style="{ gridTemplateColumns: cItem.layout ? cItem.layout : '1fr 1fr 1fr' }">
                                <template
                                    v-for="(iconItem, iconIndex) in cItem.list.filter(i => i.name.includes(nav1Filter))"
                                    :key="iconIndex">
                                    <div class="graphic" @mousedown="startDrag($event, iconItem)"
                                        :title="iconItem.name">
                                        <template v-if="iconItem.renderType === renderType.IMG">
                                            <el-image :src="iconItem.icon"
                                                style="width: 100px; height: 60px; margin: auto"></el-image>
                                        </template>
                                        <template v-if="iconItem.renderType === renderType.ICON">
                                            <i :class="iconItem.icon" style="font-size: 24px;"></i>
                                        </template>
                                        <template v-if="iconItem.renderType === renderType.SVG">
                                            <div class="svg-icon" v-html="iconItem.icon"></div>
                                        </template>
                                        <template v-if="iconItem.renderType === renderType.OTHER">
                                            <i :class="iconItem.icon" style="font-size: 24px;"></i>
                                        </template>
                                        <p>{{ iconItem.name }}</p>
                                    </div>
                                </template>

                            </div>
                        </el-collapse-item>
                    </template>
                </el-collapse>
            </div>
        </div>
    </div>
</template>
<script setup>
import layout_0 from '../../../assets/topoImg/layout_0.png'
import layout_1 from '../../../assets/topoImg/layout_1.png'
import layout_2 from '../../../assets/topoImg/layout_2.png'
import layout_3 from '../../../assets/topoImg/layout_3.png'
import layout_4 from '../../../assets/topoImg/layout_4.png'
import layout_5 from '../../../assets/topoImg/layout_5.png'
import layout_6 from '../../../assets/topoImg/layout_6.png'
import layout_7 from '../../../assets/topoImg/layout_7.png'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Document, Menu as IconMenu, Location, Search, Picture as IconPicture } from '@element-plus/icons-vue'
import { Shape } from '@antv/x6'
import { useGraphStore } from "../../stores/graph";
import { iconList } from './icons'
const graphStore = useGraphStore()
const renderType = {
    IMG: 'img',
    ICON: 'icon',
    SVG: 'svg',
    OTHER: 'other'
}

const nav1Current = ref(0)
const nav1 = ref([
    {
        name: '控件',
        icon: 'iconfont icon-icon-relativity',
        active: [],
        children: [
            {
                name: '基础',
                layout: '1fr 1fr 1fr',
                list: [
                    { name: '线段', renderType: 'icon', icon: 'iconfont icon-xianduan', data: { type: 'line' } },
                    { name: '文字', renderType: 'icon', icon: 'iconfont icon-wenzi', data: { type: 'text' } },
                    { name: '数值', renderType: 'icon', icon: 'iconfont icon-shuzhi', data: { type: 'data' } },
                    { name: '图标', renderType: 'icon', icon: 'iconfont icon-tubiao', data: { type: 'icon' } },
                    { name: '图片', renderType: 'icon', icon: 'iconfont icon-tupian', data: { type: 'img' } },
                    { name: '自定义', renderType: 'other', icon: 'iconfont icon-tupian', data: { type: 'other' } }
                ]
            },
            { name: '图形', list: [] },
            { name: '表格', list: [] },
            { name: '图表', list: [] },
            { name: '表单', list: [] }
        ]
    },
    {
        name: '模板',
        icon: 'iconfont icon-root-list',
        active: [],
        children: [
            {
                name: '布局',
                layout: '1fr 1fr',
                list: [
                    { name: '布局1', renderType: 'img', icon: layout_0, data: { type: 'layout' } },
                    { name: '布局2', renderType: 'img', icon: layout_1, data: { type: 'layout' } },
                    { name: '布局3', renderType: 'img', icon: layout_2, data: { type: 'layout' } },
                    { name: '布局4', renderType: 'img', icon: layout_3, data: { type: 'layout' } },
                    { name: '布局5', renderType: 'img', icon: layout_4, data: { type: 'layout' } },
                    { name: '布局6', renderType: 'img', icon: layout_5, data: { type: 'layout' } },
                    { name: '布局7', renderType: 'img', icon: layout_6, data: { type: 'layout' } },
                    { name: '布局8', renderType: 'img', icon: layout_7, data: { type: 'layout' } }
                ]
            },
            // { name: '主题', list: [] }
        ]
    },
    { name: '设备', icon: 'iconfont icon-control-platform', children: [], active: [] },
    { name: '图表', icon: 'iconfont icon-icon_chart', children: [], active: [] },
    {
        name: '素材', icon: 'iconfont icon-icon_image', children: [
            {
                name: '电器svg',
                layout: '1fr 1fr 1fr',
                list: iconList.map(i => {
                    return {
                        name: i.name,
                        renderType: 'svg',
                        icon: i.svg,
                        data: { type: 'svg' }
                    }
                })
            },
        ], active: []
    }
])
const nav1Filter = ref('')
const handleNavClick = (index) => {
    nav1Current.value = index
}
const handleExpend = () => {
    if (nav1.value[nav1Current.value].active.length > 0) {
        nav1.value[nav1Current.value].active = []
    } else {
        const temp = []
        nav1.value[nav1Current.value].children.forEach((item, index) => {
            temp.push(index)
        })
        nav1.value[nav1Current.value].active = temp
    }
}

const startDrag = (e, iconItem) => {
    // const type = iconItem.nodeType;
    console.log(iconItem)
    if (iconItem.renderType === 'other') {
        const tempNode = graphStore.graph.createNode({ shape: 'custom-vue-node' });
        tempNode.setData({ ...{ icon: iconItem.icon, name: iconItem.name }, ...iconItem.data })
        graphStore.dnd.start(tempNode, e);
    } else {
        const tempNode = graphStore.graph.createNode({ shape: iconItem.renderType + '-node' });
        tempNode.setData({ ...{ icon: iconItem.icon, name: iconItem.name }, ...iconItem.data })
        graphStore.dnd.start(tempNode, e);
    }

};


const nodeAdd = ({ node }) => {
    if (node.data?.type === 'line') {
        const pos = node.position();
        console.log(node, node.position())
        node.remove();
        // 创建Edge
        const edge = graphStore.graph.addEdge({
            source: { x: pos.x - 50, y: pos.y },
            target: { x: pos.x + 50, y: pos.y },
            router: 'normal',
            attrs: { line: { stroke: '#1890ff', strokeWidth: 2, sourceMarker: null, targetMarker: null } }
        });
        graphStore.graph.select(edge);
    }
}

onMounted(() => {
    graphStore.graph.on('node:added', nodeAdd)
})

onBeforeUnmount(() => {
    graphStore.graph.off('node:added', nodeAdd)
})

</script>
<style scoped lang="scss">
.nodes {
    display: grid;
    grid-template-columns: 50px 250px;
    border-top: 1px solid #303746;
    flex-grow: 1;
    font-size: 12px;
    z-index: 20;

    .groups {
        max-height: 100%;
        overflow-y: auto;
        background: #1e2430;

        .group {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px 4px;
            line-height: 1;
            cursor: pointer;

            i {
                font-size: 22px;
                margin-bottom: 8px;
            }

            span {
                width: 6ch;
                line-height: 15px;
                padding-left: 2px;
                text-align: center;
            }
        }

        .active {
            background-color: #121924;
            color: #4583ff;
            border-left: 2px solid #4583ff;
        }

        .group:hover {
            color: #4583ff;
        }
    }

    .list {
        overflow-y: auto;
        max-height: 100%;
        background-color: #121924;

        .expand-content {
            // background-color: #121924;
            padding: 4px 4px 10px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 12px;

            .graphic {
                position: relative;
                padding: 10px 0;
                border-radius: 2px;
                border: 1px solid transparent;
                text-align: center;

                .svg-icon {
                    width: 50px;
                    height: 50px;
                    margin: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    svg {
                        color: '#ff0000';
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }

                p {
                    margin-top: 10px;
                    padding: 0 8px;
                    text-align: center;
                    font-size: 12px;
                    height: 12px;
                    line-height: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    word-break: break-all;
                    -webkit-box-orient: vertical;
                }
            }

            .graphic:hover {
                cursor: pointer;
                border-color: #4583ff;
            }
        }

        :deep(.el-collapse-item__header) {
            border: none !important;
            background-color: transparent !important;
        }

        :deep(.el-collapse-item__wrap) {
            border: none !important;
            background-color: transparent !important;
        }
    }
}
</style>