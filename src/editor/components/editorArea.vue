<template>
  <div class="editorArea">
    <Toolbar></Toolbar>
    <div class="drawBox">
      <div style="width: 100%; height: 100%">
        <div ref="container" class="editor-container"
          :style="{ backgroundColor: style.backgroundColor, backgroundImage: style.backgroundImage ? `url(${style.backgroundImage})` : 'none' }">
        </div>
        <TeleportContainer />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'
import Toolbar from './Toolbar/index.vue'
import { getTeleport } from '@antv/x6-vue-shape'
import { storeToRefs } from 'pinia'
import { useGraphStore } from "../stores/graph";
import { useMenusStore } from "../stores/menus";

const menusStore = useMenusStore()
const graphStore = useGraphStore()
const { style } = storeToRefs(graphStore)
const props = defineProps(['width', 'height'])
const container = ref(null)
const TeleportContainer = getTeleport()

onMounted(() => {
  graphStore.el = container.value
  graphStore.style.height = props.height || 1080
  graphStore.style.width = props.width || 1920
  graphStore.init()
  if (menusStore.menus[0] && menusStore.menus[0].children[0]) {
    menusStore.setCurrentMenu([menusStore.menus[0].code, menusStore.menus[0].children[0].code])
  }
})

onBeforeUnmount(() => {
  if (graphStore.graph) graphStore.graph.dispose()
})
</script>
<style scoped lang="scss">
.editorArea {
  width: calc(100% - 600px);
  box-sizing: border-box;
  background-color: #080b0f;
}

.drawBox {
  height: calc(100% - 40px);
  min-height: 0;
}

.editor-container {
  border: 1px solid #1f5ce0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.tooltipcolor {
  color: #ffffff;
}
</style>
