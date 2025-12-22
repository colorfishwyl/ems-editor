<template>
    <div class="graphics">
        <div class="menus">
            <div class="menu" :class="{ active: groupCurrent === 0 }" @click="groupCurrent = 0">菜单目录</div>
            <div class="menu" :class="{ active: groupCurrent === 1 }" @click="groupCurrent = 1">系统资源</div>
            <div class="menu" :class="{ active: groupCurrent === 2 }" @click="groupCurrent = 2">我的资源</div>
            <div class="menu" :class="{ active: groupCurrent === 3 }" @click="groupCurrent = 3">数据模拟</div>
        </div>

        <div v-if="groupCurrent === 0" class="groups-menus">
            <el-menu default-active="1" @open="handleOpen" @close="handleClose" background-color="transparent">
                <el-sub-menu v-for="menu in menus" :key="menu.index" :index="menu.index" :popper-offset="100">
                    <template #title>
                        <el-icon><icon-menu /></el-icon>
                        <span>{{ menu.title }}</span>
                    </template>
                    <el-menu-item v-for="item in menu.children" :key="item.index" :index="item.index">
                        <el-icon>
                            <document />
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
        <div v-else-if="groupCurrent === 1" class="groups-panel">
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
                                class="iconfont icon-menu-fold"></i></div>
                    </el-tooltip>
                </div>
                <div style="padding: 10px">
                    <el-collapse v-model="nav1[nav1Current].active" expand-icon-position="left"
                        style="border: none; background-color: transparent">
                        <template v-for="(cItem, cIndex) in nav1[nav1Current].children" :key="cIndex">
                            <el-collapse-item :title="cItem.name" :name="cIndex">
                                <div class="expand-content">
                                    <div v-for="(iconItem, iconIndex) in cItem.list" :key="iconIndex" class="graphic">
                                        <el-image :src="iconItem.icon"
                                            style="width: 100px; height: 60px; margin: auto"></el-image>
                                        <p>{{ iconItem.name }}</p>
                                    </div>
                                </div>
                            </el-collapse-item>
                        </template>
                    </el-collapse>
                </div>
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
import { ElCollapse, ElTooltip, ElCollapseItem, ElMenuItem, ElImage, ElInput, ElMenu, ElSubMenu, ElIcon } from 'element-plus'
const nav1Current = ref(0)
const nav1 = ref([
    {
        name: '模板',
        icon: 'iconfont icon-root-list',
        active: [],
        children: [
            {
                name: '布局',
                list: [
                    { name: '布局1', icon: layout_0 },
                    { name: '布局2', icon: layout_1 },
                    { name: '布局3', icon: layout_2 },
                    { name: '布局4', icon: layout_3 },
                    { name: '布局5', icon: layout_4 },
                    { name: '布局6', icon: layout_5 },
                    { name: '布局7', icon: layout_6 },
                    { name: '布局8', icon: layout_7 }
                ]
            },
            { name: '主题', list: [] }
        ]
    },
    {
        name: '控件',
        icon: 'iconfont icon-icon-relativity',
        active: [],
        children: [
            { name: '基础', list: [] },
            { name: '图形1', list: [] },
            { name: '图形2', list: [] }
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

const groupCurrent = ref(0)
const menus = ref([])
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}

onMounted(() => {
    menus.value = [
        {
            index: '1',
            title: '运行监控',
            children: [
                {
                    index: '1-1',
                    title: '一次图'
                },
                {
                    index: '1-2',
                    title: '首页'
                },
                {
                    index: '1-3',
                    title: '储能列表'
                },
                {
                    index: '1-4',
                    title: 'PCS列表'
                },
                {
                    index: '1-5',
                    title: 'BMS列表'
                },
                {
                    index: '1-6',
                    title: '箱变列表'
                },
                {
                    index: '1-7',
                    title: '协控'
                },
                {
                    index: '1-8',
                    title: 'AGC'
                },
                {
                    index: '1-9',
                    title: 'AVC'
                },
                {
                    index: '1-10',
                    title: '调峰'
                },
                {
                    index: '1-11',
                    title: '调频'
                },
                {
                    index: '1-12',
                    title: '调压'
                },
                {
                    index: '1-13',
                    title: '调温'
                },
                {
                    index: '1-14',
                    title: '计划曲线跟踪'
                }
            ]
        },
        {
            index: '2',
            title: '告警管理',
            children: [
                {
                    index: '2-1',
                    title: '告警列表'
                }
            ]
        }
    ]
})
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

    .groups-panel {
        display: grid;
        grid-template-columns: 50px 250px;
        border-top: 1px solid #303746;
        flex-grow: 1;
        overflow-y: auto;
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

    .groups-menus {
        min-height: 0;
        flex: 1;
        box-sizing: border-box;
        border-top: 1px solid #303746;
        overflow-y: auto;
        font-size: 12px;
        z-index: 20;
    }
}
</style>