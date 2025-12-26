<template>
    <div :style="{ width: width + 'px', height: height + 'px' }" class="testNode">
        <el-progress type="circle" :percentage="percentage" :width="wid">
        </el-progress>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject, computed } from 'vue'

const getNode = inject('getNode')
const percentage = ref(80)

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
    const { progress } = current
    percentage.value = progress
}

let node = null

onMounted(() => {
    node = getNode()
    width.value = node.size().width
    height.value = node.size().height
    node.on('change:data', updateData)
    node.on('change:size', updateSize)
    setInterval(() => {
        const { progress } = node.getData()
        node.setData({
            progress: (progress + 10) % 100,
        })
    }, 500)

})

onBeforeUnmount(() => {
    node.off('change:data', updateData)
    node.off('change:size', updateSize)
})

</script>
<style scoped lang="scss">
.testNode {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
}
</style>