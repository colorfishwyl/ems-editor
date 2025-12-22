<template>
  <div class="editorArea">
    <div class="toolBox">
      <a>
        <el-tooltip effect="light" content="新增" placement="bottom" popper-class="tooltipcolor">
          <i class="iconfont icon-jia"></i>
        </el-tooltip>
      </a>
      <a>
        <el-tooltip effect="light" content="保存" placement="bottom" popper-class="tooltipcolor">
          <i class="iconfont icon-baocun"></i>
        </el-tooltip>
      </a>
      <div style="flex: 1"></div>
      <div style="line-height: 40px; margin-left: 8px; width: 34px">65%</div>
      <a>
        <el-tooltip effect="light" content="还原100%" placement="bottom" popper-class="tooltipcolor">
          <i class="iconfont icon-icon-huanyuan"></i>
        </el-tooltip>
      </a>
      <div style="flex: 1"></div>
      <a>
        <el-tooltip effect="light" content="导出" placement="bottom" popper-class="tooltipcolor">
          <i class="iconfont icon-daochu"></i>
        </el-tooltip>
      </a>
      <a>
        <el-tooltip effect="light" content="导入" placement="bottom" popper-class="tooltipcolor">
          <i class="iconfont icon-daoru"></i>
        </el-tooltip>
      </a>
    </div>
    <div class="drawBox">
      <div style="width: 100%; height: 100%">
        <div ref="container" class="editor-container"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ElTooltip } from 'element-plus'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Graph, Scroller, Snapline } from '@antv/x6'

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
      // size: 10,
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
  graph.fromJSON(data) // 渲染元素
  graph.zoomTo(0.65, { center: true }) // 缩放
  setTimeout(() => {
    graph.center()
  }, 100)
  graph.on('scale', ({ sx, sy }) => {
    // zoom.value = Number((sx * 100).toFixed(0)) // 转成百分比
  })

  window.addEventListener('resize', () => {
    // graph.resize(1920, 1080)
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

.toolBox {
  height: 40px;
  display: flex;
  font-size: 12px;
  background-color: var(--color-background);
  flex-shrink: 0;
  padding: 0 12px;
  border-bottom: 1px solid #080b0f;

  a {
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 6px;
    margin: 4px;
    border-radius: 4px;
    color: #bdc7db;
    text-decoration: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  a:hover {
    color: #4583ff;
    cursor: pointer;
    text-decoration: none;
  }
}


.drawBox {
  height: calc(100% - 40px);
  min-height: 0;

  .editor-container {
    border: 1px solid #1f5ce0;
    background-color: #c1c9d4;
    /* 暗蓝背景 */
  }
}

.tooltipcolor {
  color: #ffffff;
}
</style>
