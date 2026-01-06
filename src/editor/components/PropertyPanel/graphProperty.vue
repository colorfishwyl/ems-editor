<template>
    <el-form class="graphProperty" size="small" label-width="auto" @submit.prevent>
        <el-form-item label="目录名称">
            <el-input v-model="name" />
        </el-form-item>
        <el-form-item label="画布尺寸" v-if="false">
            <el-input-number v-model="width" :min="1" :max="10000" controls-position="right"
                style="margin-bottom: 10px;">
                <template #prefix>
                    <span>宽</span>
                </template>
            </el-input-number>
            <el-input-number v-model="height" :min="1" :max="10000" controls-position="right">
                <template #prefix>
                    <span>高</span>
                </template>
            </el-input-number>
            <el-button @click="handleWH" style="margin-left: 10px;">确定</el-button>
        </el-form-item>
        <el-form-item label="背景颜色">
            <el-color-picker v-model="style.backgroundColor" show-alpha :predefine="predefineColors"
                style="width: 100%; height: 30px;" />
        </el-form-item>
        <el-form-item label="背景图片">
            <el-upload accept="image/*" :show-file-list="false" :before-upload="beforeAvatarUpload">
                <img v-if="style.backgroundImage" :src="style.backgroundImage" style="width: 100%; height: 100%;" />
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus />
                </el-icon>
            </el-upload>
        </el-form-item>
    </el-form>
</template>
<script setup>
import { ref, watch } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import { useGraphStore } from '../../stores/graph'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useMenusStore } from "../../stores/menus";

const menusStore = useMenusStore()
const graphStore = useGraphStore()
const { style, name } = storeToRefs(graphStore)
const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577',
])

function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(file)
    })
}

const beforeAvatarUpload = async (file) => {
    if (!file.type.startsWith('image/')) {
        ElMessage.error('只能上传图片文件')
        return false
    }

    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        ElMessage.error('图片大小不能超过 2MB')
        return false
    }

    try {
        const dataUrl = await fileToDataURL(file)
        style.value.backgroundImage = dataUrl
    } catch (e) {
        ElMessage.error('图片读取失败')
        return false
    }
    return false
}

const width = ref(1920)
const height = ref(1080)
const handleWH = () => {
    ElMessageBox.confirm(
        '修改画布尺寸需要重载画布内容，请确定保存内容后继续!',
        '提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            graphStore.updateSize(width.value, height.value, () => {
                menusStore.setCurrentMenu(menusStore.current, true)
            })
        })
        .catch(() => {

        })
}
</script>
<style scoped lang="scss">
.graphProperty {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    overflow-y: auto;

    :deep(.el-upload) {
        border: 1px dashed var(--el-border-color) !important;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
    }

    :deep(.el-upload:hover) {
        border-color: var(--el-color-primary);
    }
}


.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>