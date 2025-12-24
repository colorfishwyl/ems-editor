<template>
    <el-dialog v-model="dialogVisible" title="新增目录" width="500" :before-close="handleClose">
        <el-form v-model="form">
            <el-form-item label="上级目录">
                <el-select v-model="form.parentName">
                    <el-option v-for="menu in menus" :key="menu.name" :label="menu.label" :value="menu.name">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <span>This is a message</span>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="close">Cancel</el-button>
                <el-button type="primary" @click="submit">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useMenusStore } from "../../stores/menus";

const menusStore = useMenusStore()

const props = defineProps({
    modelValue: String
})
const emits = defineEmits(['update:modelValue'])

const dialogVisible = ref(props.modelValue)

watch(() => props.modelValue, (v) => {
    dialogVisible.value = v
})

function close() {
    dialogVisible.value = false
    emits('update:modelValue', false)
}

function submit() {
    dialogVisible.value = false
    emits('update:modelValue', false)
}



const form = ref({
    parentName: null,
    parentNameNew: '',
    parentLabelNew: '',
    name: '',
    label: '',
})
</script>
<style scoped lang="scss"></style>