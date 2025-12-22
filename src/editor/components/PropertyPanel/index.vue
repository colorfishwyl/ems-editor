<template>
    <div class="prop">
        <div class="tabContainer">
            <div v-for="(tab, index) in tabs" :key="index" class="tabItem" :class="{ active: active === index }"
                @click="handleActive(index)">
                {{ tab }}
                <div v-show="active === index" class="activeLine"></div>
            </div>
        </div>
        <div class="main"></div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const tabs = ref(['外观', '动画', '数据', '状态', '交互'])
const active = ref(0)
const handleActive = (index) => {
    active.value = index
}
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
            flex: 1;
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
        height: calc(100% - 40px);
        background-color: #1e2430;
    }
}
</style>
