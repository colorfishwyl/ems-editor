<template>
    <el-dialog v-model="dialogVisible" title="新增目录" width="500">
        <el-form ref="formRef" :model="form" label-width="auto" style="padding: 10px 20px" :rules="rules">
            <el-form-item label="上级目录" prop="parent">
                <el-select v-model="form.parent" placeholder="请选择上级目录">
                    <el-option value="0" label="根目录"></el-option>
                    <el-option v-for="item in menus" :key="item.id" :label="item.name" :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <template v-if="form.parent == '0'">
                <el-form-item label="一级目录名称" prop="parentNameNew">
                    <el-input v-model="form.parentNameNew"></el-input>
                </el-form-item>
            </template>
            <el-form-item label="二级目录名称" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="close">取消</el-button>
                <el-button type="primary" @click="submit">确定</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script setup>
import { ref, watch, nextTick, onMounted } from "vue";
import { useMenusStore } from "../../stores/menus";
import { storeToRefs } from "pinia";
const menusStore = useMenusStore();

const { menus } = storeToRefs(menusStore);

const emits = defineEmits(["close"]);

const dialogVisible = ref(false);

function close() {
    dialogVisible.value = false;
    emits("close");
}

const formRef = ref(null);
const form = ref({
    parent: null,
    parentNameNew: "",
    name: "",
});

const rules = ref({
    parent: [{
        required: true,
        message: "请选择上级目录",
        trigger: "change",
    }],
    parentNameNew: {
        required: true,
        message: '请输入一级目录名称',
        trigger: 'blur',
    },
    name: [{
        required: true,
        message: '请输入二级目录名称',
        trigger: 'blur',
    }]
});

const submitLoading = ref(false)
const submit = async () => {
    if (!formRef.value) return;

    submitLoading.value = true;
    try {
        await formRef.value.validate((valid, fields) => {
            if (valid) {
                console.log('submit!')
                menusStore.addMenu(form.value, () => {
                    close()
                })
            } else {
                console.log('error submit!', fields)
            }
        })
    } catch (error) {
        console.log('表单验证失败:', error);
    } finally {
        submitLoading.value = false;
    }
}

onMounted(() => {
    dialogVisible.value = true;
})
</script>
<style scoped lang="scss"></style>
