<template>
    <el-form size="small" label-width="80px" label-position="left">
        <el-form-item label="元素名称">
            <el-input v-model="baseForm.name"></el-input>
        </el-form-item>
        <el-form-item label="透明度">
            <el-slider v-model="baseForm.opacity" :min="0" :max="1" :step="0.01" style="width: 160px" />
        </el-form-item>
    </el-form>
</template>
<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, inject } from 'vue'

const baseForm = ref({
    name: 'line'
})

</script>