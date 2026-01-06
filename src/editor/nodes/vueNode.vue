<template>
    <div :style="{ width: width + 'px', height: height + 'px' }" class="vueNode">
        <el-progress type="circle" :percentage="nodeData.progress" :width="wid">
        </el-progress>
        <!-- <el-button @click.stop="handleButtonClick($event)">按钮</el-button> -->
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject, computed } from 'vue'

const getNode = inject('getNode')
const nodeData = ref({})

const width = ref(128)
const height = ref(128)

const wid = computed(() => {
    return Math.min(width.value, height.value)
})

const updateSize = ({ current }) => {
    width.value = current.width
    height.value = current.height
}

const updateData = ({ current }) => {
    console.log(current)
    nodeData.value = { ...nodeData.value, ...current }
}

const handleButtonClick = (e) => {
    e.stopPropagation();  // 确保事件不会继续传播
    console.log('按钮被点击');
    // 在这里添加你的按钮点击逻辑
}

let node = null
let timer = null

onMounted(() => {
    node = getNode()
    width.value = node.size().width
    height.value = node.size().height
    nodeData.value = node.getData()
    node.on('change:data', updateData)
    node.on('change:size', updateSize)
    timer = setInterval(() => {
        const { progress } = node.getData()
        node.setData({
            progress: (progress + 10) % 100,
        })
    }, 500)

})

onBeforeUnmount(() => {
    node.off('change:data', updateData)
    node.off('change:size', updateSize)
    if (timer) clearInterval(timer)
})

</script>
<style scoped lang="scss">
.vueNode {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    box-sizing: border-box;
    opacity: v-bind("nodeData.opacity");
    border-style: v-bind("nodeData.borderStyle");
    border-width: v-bind("nodeData.borderWidth + 'px'");
    border-color: v-bind("nodeData.borderColor");
    border-radius: v-bind("nodeData.borderRadius + 'px'");
    background-size: cover;
    background-repeat: no-repeat;
    background-color: v-bind("nodeData.backgroundColor");
    background-image: v-bind("nodeData.backgroundImage");
}
</style>