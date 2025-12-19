<template>
  <div class="ems-editor">
    <EditorHeader />
    <div class="ems-editor__workspace">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
      <!-- <IconLibrary />
      <CanvasArea ref="canvasAreaRef" />
      <PropertiesPanel /> -->
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue";
import { Graph } from "@antv/x6";
import CanvasArea from "./editor/layout/CanvasArea.vue";
import IconLibrary from "./editor/layout/IconLibrary.vue";
import EditorHeader from "./components/editorHeader.vue";
import PropertiesPanel from "./editor/layout/PropertiesPanel.vue";

defineOptions({ name: "EmsEditor" });

// 生成一个随机数

const emit = defineEmits(["ready"]);

const props = defineProps({
  grid: {
    type: [Boolean, Object],
    default: () => ({ size: 10, visible: true }),
  },
  background: {
    type: [Boolean, String, Object],
    default: () => ({ color: "#f8f9fc" }),
  },
  autoCenter: {
    type: Boolean,
    default: true,
  },
});

const canvasAreaRef = ref(null);
const graphRef = shallowRef(null);

const initGraph = () => {
  const canvasElement = canvasAreaRef.value?.canvasRef;
  if (!canvasElement || graphRef.value) return;

  const { clientWidth, clientHeight } = canvasElement;
  graphRef.value = new Graph({
    container: canvasElement,
    width: clientWidth || 800,
    height: clientHeight || 600,
    grid: props.grid,
    background: props.background,
  });

  if (props.autoCenter) {
    graphRef.value.centerContent();
  }

  emit("ready", graphRef.value);
};

onMounted(() => {
  // requestAnimationFrame(initGraph);
});

onBeforeUnmount(() => {
  if (graphRef.value) {
    graphRef.value.dispose();
    graphRef.value = null;
  }
});
</script>
<style lang="css">
:root {
  --ems-header-bg: #1e2430;
  --ems-border: #e4e7f1;
  --ems-muted: #7a7f95;
  --ems-bg: #f4f6fb;
  --ems-panel-bg: #fff;
  --ems-primary: #3e6df2;
  --ems-radius: 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.ems-editor {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  color: #bdc7db;
}

.ems-editor__workspace {
  height: calc(100% - 40px);
  display: grid;
  grid-template-columns: 300px calc(100% - 601px) 300px;
  gap: 0;
  background-color: var(--ems-bg);
  height: 100%;
  min-height: 420px;
}
.right {
  border-left: 1px solid var(--color-border);
}
</style>
