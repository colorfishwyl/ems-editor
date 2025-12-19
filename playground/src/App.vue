<template>
  <div class="app">
    <ems-editor class="demo-editor" @ready="handleReady"></ems-editor>
  </div>
</template>

<script setup>
import { ref } from "vue";

const graphRef = ref(null);

const handleReady = (graph) => {
  graphRef.value = graph;
  graph.addNode({
    x: 80,
    y: 80,
    width: 160,
    height: 48,
    label: "Hello EMS",
  });
};
</script>
