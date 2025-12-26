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
                                <div v-for="(iconItem, iconIndex) in cItem.list" :key="iconIndex" class="graphic"
                                    @mousedown="startDrag" :data-type="iconItem.type">
                                    <template v-if="iconItem.renderType === renderType.IMG">
                                        <el-image :src="iconItem.icon"
                                            style="width: 100px; height: 60px; margin: auto"></el-image>
                                    </template>
                                    <template v-if="iconItem.renderType === renderType.ICON">
                                        <i :class="iconItem.icon" style="font-size: 24px;"></i>
                                    </template>
                                    <p>{{ iconItem.name }}</p>
                                </div>
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
import { ref, onMounted } from 'vue'
import { Document, Menu as IconMenu, Location, Search, Picture as IconPicture } from '@element-plus/icons-vue'
import { useGraphStore } from "../../stores/graph";

const graphStore = useGraphStore()
const renderType = {
    IMG: 'img',
    ICON: 'icon',
    SVG: 'svg',
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
                    { name: '文字', renderType: 'icon', nodeType: 'text', icon: 'iconfont icon-wenzi' },
                    { name: '数值', renderType: 'icon', nodeType: 'data', icon: 'iconfont icon-juxingkuang' },
                    { name: '图标', renderType: 'icon', nodeType: 'icon', icon: 'iconfont icon-tubiao' },
                    { name: '图片', renderType: 'icon', nodeType: 'img', icon: 'iconfont icon-tupian' },
                ]
            },
            { name: '图形1', list: [] },
            { name: '图形2', list: [] }
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
                    { name: '布局1', renderType: 'img', nodeType: 'img', icon: layout_0 },
                    { name: '布局2', renderType: 'img', nodeType: 'img', icon: layout_1 },
                    { name: '布局3', renderType: 'img', nodeType: 'img', icon: layout_2 },
                    { name: '布局4', renderType: 'img', nodeType: 'img', icon: layout_3 },
                    { name: '布局5', renderType: 'img', nodeType: 'img', icon: layout_4 },
                    { name: '布局6', renderType: 'img', nodeType: 'img', icon: layout_5 },
                    { name: '布局7', renderType: 'img', nodeType: 'img', icon: layout_6 },
                    { name: '布局8', renderType: 'img', nodeType: 'img', icon: layout_7 }
                ]
            },
            // { name: '主题', list: [] }
        ]
    },
    { name: '设备', icon: 'iconfont icon-control-platform', children: [], active: [] },
    { name: '图表', icon: 'iconfont icon-icon_chart', children: [], active: [] },
    { name: '素材', icon: 'iconfont icon-icon_image', children: [], active: [] }
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

const startDrag = (e) => {
    const target = e.currentTarget;
    const type = target.getAttribute("data-type");
    let node = graphStore.graph.createNode({ shape: 'custom-vue-node' });
    graphStore.dnd.start(node, e);
};

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