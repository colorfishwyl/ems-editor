<template>
  <div class="ems-editor">
    <!-- <EditorHeader /> -->
    <div class="ems-editor__workspace">
      <NodePanel />
      <EditorArea :width="props.width" :height="props.height" />
      <PropertiesPanel />
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, provide } from "vue";
import EditorArea from "./components/editorArea.vue";
import NodePanel from "./components/NodePanel/index.vue";
import PropertiesPanel from "./components/PropertyPanel/index.vue";
import { useMenusStore } from "./stores/menus";

defineOptions({ name: "EmsEditor" });
const emit = defineEmits(["ready", "exit"]);
const props = defineProps({
  services: {
    type: Object,
    required: true
  },
  width: {
    type: Number,
  },
  height: {
    type: Number
  }
})
provide('topoApi', props.services)
const menusStore = useMenusStore()
menusStore.services = props.services
menusStore.loadAllMenus()

onMounted(() => {
  // requestAnimationFrame(initGraph);
});

onBeforeUnmount(() => {
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
  --color-background: #1e2430;
  --color-border: #000000;
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
  /* height: calc(100% - 40px); */
  height: 100%;
  display: flex;
}
</style>
