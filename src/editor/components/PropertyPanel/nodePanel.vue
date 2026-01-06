<template>
    <el-form size="small" label-width="80px" label-position="left">
        <el-form-item label="元素名称">
            <el-input v-model="baseForm.name"></el-input>
        </el-form-item>
        <el-form-item label="位置">
            <el-input-number v-model="baseForm.x" controls-position="right" :min="0" :step="5"
                style="width: 80px; margin-right: 10px;"></el-input-number>
            <el-input-number v-model="baseForm.y" controls-position="right" :min="0" :step="5"
                style="width: 80px;"></el-input-number>
        </el-form-item>
        <el-form-item label="长宽">
            <el-input-number v-model="baseForm.width" controls-position="right" :min="0" :step="5"
                style="width: 80px; margin-right: 10px;"></el-input-number>
            <el-input-number v-model="baseForm.height" controls-position="right" :min="0" :step="5"
                style="width: 80px"></el-input-number>
        </el-form-item>
        <el-form-item label="层级">
            <el-input-number v-model="baseForm.zIndex" :min="0" :max="10000" :step="1"
                style="width: 160px"></el-input-number>
        </el-form-item>
        <el-form-item label="透明度">
            <el-slider v-model="baseForm.opacity" :min="0" :max="1" :step="0.01" style="width: 160px" />
        </el-form-item>
        <el-form-item label="边框">
            <el-select v-model="baseForm.borderStyle" style="width: 60px; margin-right: 10px;" placeholder="样式">
                <el-option label="无" value="none"></el-option>
                <el-option label="实线" value="solid"></el-option>
                <el-option label="虚线" value="dashed"></el-option>
                <el-option label="点线" value="dotted"></el-option>
                <el-option label="双实线" value="double"></el-option>
            </el-select>
            <el-input-number v-model="baseForm.borderWidth" controls-position="right" :min="0" :step="1"
                style="width: 60px; margin-right: 10px;" placeholder="宽度"></el-input-number>
            <el-color-picker v-model="baseForm.borderColor" show-alpha placeholder="颜色" />
        </el-form-item>
        <el-form-item label="背景颜色">
            <el-color-picker v-model="baseForm.backgroundColor" show-alpha placeholder="颜色"
                style="width: 100%; height: 30px;" />
        </el-form-item>
        <div>{{ JSON.stringify(cell.getData(), null, 2) }}</div>
    </el-form>
</template>
<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, inject } from 'vue'
import { storeToRefs } from 'pinia'
import { useGraphStore } from "../../stores/graph";

const graphStore = useGraphStore()
const cellId = inject('cellId')
const cell = inject('getCurCell')()
const nodeData = cell.getData()
const baseForm = ref({
    name: cell.getData()?.name || '',
    x: cell.position().x,
    y: cell.position().y,
    width: cell.size().width,
    height: cell.size().height,
    zIndex: cell.prop('zIndex'),
    opacity: cell.prop('opacity') || 1,
    borderStyle: nodeData.borderStyle,
    borderRadius: nodeData.borderRadius,
    borderWidth: nodeData.borderWidth,
    borderColor: nodeData.borderColor,
    backgroundColor: nodeData.backgroundColor,
})

watch(baseForm.value, () => {
    cell.prop('position', { x: baseForm.value.x, y: baseForm.value.y })
    cell.prop('size', { width: baseForm.value.width, height: baseForm.value.height })
    cell.prop('zIndex', baseForm.value.zIndex)
    const { opacity, borderStyle, borderRadius, borderWidth, borderColor, backgroundColor } = baseForm.value
    cell.setData({
        opacity,
        borderStyle,
        borderRadius,
        borderWidth,
        borderColor,
        backgroundColor
    })
})


onMounted(() => {
    graphStore.graph.on('node:resized', ({ node }) => {
        if (node.id === cellId.value) {
            baseForm.value.width = node.size().width
            baseForm.value.height = node.size().height
        }
    })
    graphStore.graph.on('node:change:position', ({ node }) => {
        console.log(node.position())
        if (node.id === cellId.value) {
            baseForm.value.x = +node.position().x.toFixed(0)
            baseForm.value.y = +node.position().y.toFixed(0)
        }
    })
})

onBeforeUnmount(() => {
    graphStore.graph.off('node:resized')
    graphStore.graph.off('node:change:position')
})
</script>