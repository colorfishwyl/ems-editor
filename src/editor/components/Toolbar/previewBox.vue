<template>
    <div class="previewBox" @click="close">
        <div ref="container" class="ems-preview"></div>
        <TeleportContainer />
    </div>
</template>
<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import { getTeleport } from '@antv/x6-vue-shape'
import { Graph } from '@antv/x6'
import registerInit from '../../nodes/register'
import { useGraphStore } from "../../stores/graph";

const graphStore = useGraphStore()
const container = ref(null)
const TeleportContainer = getTeleport()
const emits = defineEmits(["close"]);

function close() {
    emits("close");
}

let graph = null
onMounted(() => {
    const { width, height } = graphStore.style
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
    graph.fromJSON(graphStore.graph.toJSON())
    graph.drawBackground({
        color: graphStore.style.backgroundColor,
        image: graphStore.style.backgroundImage,
        size: 'cover'
    })
})

onBeforeUnmount(() => {
    if (graph) graph.dispose();
});
</script>
<style scoped lang="scss">
.previewBox {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(134, 134, 134);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>