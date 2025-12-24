<template>
  <div class="editorArea">
    <Toolbar></Toolbar>
    <div class="drawBox">
      <div style="width: 100%; height: 100%">
        <div ref="container" class="editor-container"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'
import { Graph, Scroller, Snapline } from '@antv/x6'
import Toolbar from './Toolbar/index.vue'
import { useGraphStore } from "../stores/graph";

const graphStore = useGraphStore()
const services = inject('topoApi')

const container = ref(null)
let graph = null
const data = {
  // 表示节点
  nodes: [
    {
      id: 'node1',
      shape: 'rect',
      x: 40,
      y: 160,
      width: 100,
      height: 40,
      label: 'hello',
      attrs: {
        // body 是选择器名称，选中的是 rect 元素
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6
        }
      }
    },
    {
      id: 'node2',
      shape: 'rect',
      x: 160,
      y: 180,
      width: 100,
      height: 40,
      label: 'world',
      attrs: {
        body: {
          stroke: '#8f8f8f',
          strokeWidth: 1,
          fill: '#fff',
          rx: 6,
          ry: 6
        }
      }
    }
  ]
}

onMounted(() => {
  graph = new Graph({
    container: container.value,
    autoResize: true,
    mousewheel: true,
    panning: false,
    scaling: { min: 0.5, max: 2 },
    background: { color: '#000000' },
    grid: {
      size: 10,
      visible: true,
      type: 'doubleMesh',
      args: [
        {
          color: '#4b4b4b', // 主网格线颜色
          thickness: 1 // 主网格线宽度
        },
        {
          color: '#313131', // 次网格线颜色
          thickness: 1, // 次网格线宽度
          factor: 4 // 主次网格线间隔
        }
      ]
    },
    translating: {
      restrict: true
    }
  })

  graph.use(
    new Snapline({
      enabled: true
    })
  )
  // Scroller 插件可以使画布支持滚动
  const s = new Scroller({
    pageWidth: 1920,
    pageHeight: 1080,
    enabled: true,
    pannable: true
  })
  graph.use(s)
  graphStore.setGraph(graph)

  graph.on('scale', ({ sx, sy }) => {
    console.log(sx, sy)
    graphStore.zoom = Number((sx * 100).toFixed(0)) // 转成百分比
  })
})

onBeforeUnmount(() => {
  if (graph) graph.dispose()
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
  background-color: #c1c9d4;
  /* 暗蓝背景 */
}

.tooltipcolor {
  color: #ffffff;
}
</style>
