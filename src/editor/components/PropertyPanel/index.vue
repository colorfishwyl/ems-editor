<template>
    <div class="prop">
        <div class="tabContainer">
            <div v-for="(tab, index) in tabs" :key="index" class="tabItem" :class="{ active: activeTab === index }"
                @click="handleActive(index)">
                {{ tab }}
                <div v-show="activeTab === index" class="activeLine"></div>
            </div>
        </div>
        <div class="main" v-if="reload">
            <template v-if="targetType === 'blank'">
                <graphProperty v-if="activeTab === 0" />
            </template>
            <template v-else>
                <Base v-if="activeTab === 0" />
                <DataBind v-else-if="activeTab === 1" />
            </template>
        </div>
    </div>
</template>
<script setup>
import { ref, provide, inject, nextTick, watch } from 'vue'
import { storeToRefs } from 'pinia'
import graphProperty from './graphProperty.vue'
import Base from './base.vue'
import DataBind from './data.vue'
import { usePropertyStore } from '../../stores/property'
import { useGraphStore } from "../../stores/graph";

const graphStore = useGraphStore()
const propertyStore = usePropertyStore()
const { targetType, tabs, activeTab, cellId } = storeToRefs(propertyStore)
const handleActive = (index) => {
    activeTab.value = index
}

let cell = cellId.value ? graphStore.graph.getCellById(cellId.value) : null
provide('getCurCell', () => cell)
provide('cellId', cellId)

const reload = ref(true)
watch(cellId, () => {
    console.log("cellId", cellId.value)
    cell = graphStore.graph.getCellById(cellId.value)
    reload.value = false
    nextTick(() => {
        reload.value = true
    })
})
</script>
<style scoped lang="scss">
.prop {
    width: 300px;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    color: #e3e8f4;
    border-left: 1px solid var(--color-border);

    .tabContainer {
        display: flex;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        position: relative;
        background-color: rgb(30, 36, 48);
        font-size: 13px;

        .tabItem {
            width: 75px;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            position: relative;
            transition: color 0.24s cubic-bezier(0.38, 0, 0.24, 1);

            .activeLine {
                position: absolute;
                background-color: #4583ff;
                z-index: 1;
                border-radius: 2px;
                bottom: 0;
                left: 0;
                height: 3px;
                width: 100%;
            }
        }

        .active {
            font-size: 14px;
            color: #4583ff;
            text-shadow: 0 0 0.3px currentcolor;
        }

        &::after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            top: auto;
            right: auto;
            bottom: 0;
            left: 0;
            background-color: #303746;
        }
    }

    .main {
        box-sizing: border-box;
        width: 100%;
        padding: 0 10px;
        height: calc(100% - 40px);
        background-color: #1e2430;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 3px;
            height: 3px;
            background: transparent;
        }

        &::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #c5cddb !important;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-track {
            background-color: transparent !important;
        }
    }
}
</style>
