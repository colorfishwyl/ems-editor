<template>
    <div :style="{ width: width + 'px', height: height + 'px' }" class="svgNode">
        <div class="svg-icon" v-html="svg" :style="{ color: color, width: wid + 'px', height: wid + 'px' }"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject, computed } from 'vue'

const getNode = inject('getNode')

const width = ref(50)
const height = ref(50)
const svg = ref("")
const color = ref("#ffffff")

const wid = computed(() => {
    return Math.min(width.value, height.value)
})

const updateSize = ({ current }) => {
    width.value = current.width
    height.value = current.height
}

let node = null

onMounted(() => {
    node = getNode()
    width.value = node.size().width
    height.value = node.size().height
    svg.value = node.getData().icon
    color.value = node.getData().value
    // node.on('change:data', updateData)
    node.on('change:size', updateSize)
})

onBeforeUnmount(() => {
    // node.off('change:data', updateData)
    node.off('change:size', updateSize)
})

</script>
<style scoped lang="scss">
.svgNode {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.svg-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    svg {
        display: block;
        fill: currentColor;
    }
}
</style>