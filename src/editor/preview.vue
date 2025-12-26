<template>
    <div ref="container" class="ems-preview"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { Graph } from '@antv/x6'
import registerInit from './nodes/register'

const props = defineProps({
    menu: {
        type: Object,
        required: true
    }
})

const container = ref(null)
let graph = null

onMounted(() => {
    const { width, height } = props.menu.style
    graph = new Graph({
        container: container.value,
        width,
        height,
        interacting: false,
        selecting: false,
        keyboard: false,
        mousewheel: false,
        panning: false
    })
    registerInit()
    graph.fromJSON(props.json)
})

watch(
    () => props.json,
    (json) => {
        if (!graph) return
        graph.clearCells()
        graph.resize(json.width, json.height)
        graph.fromJSON(json)
    },
    { deep: true }
)
</script>

<style scoped>
.ems-preview {
    background: #1e1e1e;
}
</style>
