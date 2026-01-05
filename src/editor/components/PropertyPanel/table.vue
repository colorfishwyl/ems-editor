<template>
    <div class="table-node-editor space-y-6">
        <!-- 表格数据编辑 -->
        <div>
            <h3 class="text-md font-medium mb-2">表格数据</h3>

            <!-- 列管理 -->
            <div class="mb-4">
                <div class="flex justify-between items-center mb-2">
                    <label class="text-sm font-medium">列配置</label>
                    <el-button size="small" @click="addColumn">添加列</el-button>
                </div>
                <div v-for="(col, index) in nodeData.columns" :key="index" class="flex items-center mb-2">
                    <el-input v-model="nodeData.columns[index]" size="small" placeholder="列名" class="flex-1 mr-2" />
                    <el-button size="small" type="danger" plain @click="removeColumn(index)">
                        删除
                    </el-button>
                </div>
            </div>

            <!-- 行管理 -->
            <div>
                <div class="flex justify-between items-center mb-2">
                    <label class="text-sm font-medium">行数据</label>
                    <el-button size="small" @click="addRow">添加行</el-button>
                </div>
                <div v-for="(row, rowIndex) in nodeData.rows" :key="rowIndex" class="border rounded p-3 mb-2">
                    <div v-for="col in nodeData.columns" :key="col" class="mb-2 last:mb-0">
                        <label class="text-xs text-gray-500 block mb-1">{{ col }}</label>
                        <el-input v-model="row[col]" size="small" placeholder="单元格内容" />
                    </div>
                    <div class="flex justify-end mt-2">
                        <el-button size="small" type="danger" plain @click="removeRow(rowIndex)">
                            删除行
                        </el-button>
                    </div>
                </div>
                <div v-if="!nodeData.rows || nodeData.rows.length === 0" class="text-center py-4 text-gray-500">
                    暂无数据，请添加行
                </div>
            </div>
        </div>

        <!-- 样式配置 -->
        <div>
            <h3 class="text-md font-medium mb-2">样式配置</h3>
            <div class="space-y-3">
                <div>
                    <label class="text-sm font-medium block mb-1">表头背景色</label>
                    <el-color-picker v-model="nodeData.style.headerBg" @change="handleStyleChange" show-alpha />
                    <span class="ml-2 text-sm text-gray-600">{{ nodeData.style.headerBg || '#f0f0f0' }}</span>
                </div>
                <div>
                    <label class="text-sm font-medium block mb-1">单元格背景色</label>
                    <el-color-picker v-model="nodeData.style.cellBg" @change="handleStyleChange" show-alpha />
                    <span class="ml-2 text-sm text-gray-600">{{ nodeData.style.cellBg || '#ffffff' }}</span>
                </div>
                <div>
                    <label class="text-sm font-medium block mb-1">交替行背景色</label>
                    <el-color-picker v-model="nodeData.style.altCellBg" @change="handleStyleChange" show-alpha />
                    <span class="ml-2 text-sm text-gray-600">{{ nodeData.style.altCellBg || '#f9f9f9' }}</span>
                </div>
                <div>
                    <label class="text-sm font-medium block mb-1">边框颜色</label>
                    <el-color-picker v-model="nodeData.style.borderColor" @change="handleStyleChange" show-alpha />
                    <span class="ml-2 text-sm text-gray-600">{{ nodeData.style.borderColor || '#d0d0d0' }}</span>
                </div>
            </div>
        </div>

        <!-- 数据导入导出 -->
        <div>
            <h3 class="text-md font-medium mb-2">数据导入导出</h3>
            <div class="flex flex-wrap gap-2">
                <el-button size="small" @click="exportData('json')">
                    导出JSON
                </el-button>
                <el-button size="small" @click="exportData('csv')">
                    导出CSV
                </el-button>
                <el-button size="small" @click="importData">
                    导入数据
                </el-button>
                <el-button size="small" type="primary" plain @click="previewTable">
                    实时预览
                </el-button>
            </div>

            <!-- 隐藏的文件输入用于导入 -->
            <input ref="fileInput" type="file" accept=".json,.csv" class="hidden" @change="handleFileImport" />
        </div>

        <!-- 模板选择 -->
        <div>
            <h3 class="text-md font-medium mb-2">模板选择</h3>
            <div class="grid grid-cols-2 gap-2">
                <div v-for="(template, index) in templates" :key="index"
                    class="border rounded p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                    @click="applyTemplate(template)">
                    <div class="font-medium text-sm mb-1">{{ template.name }}</div>
                    <div class="text-xs text-gray-500">{{ template.description }}</div>
                </div>
            </div>
        </div>

        <!-- 实时预览对话框 -->
        <el-dialog v-model="previewVisible" title="实时预览" width="80%" top="50px">
            <div class="border rounded overflow-auto max-h-[70vh]">
                <table class="min-w-full">
                    <thead>
                        <tr class="text-left" :style="{
                            backgroundColor: nodeData.style?.headerBg || '#f0f0f0'
                        }">
                            <th v-for="col in nodeData.columns" :key="col"
                                class="px-2 py-1 font-medium border-r border-b" :style="{
                                    borderColor: nodeData.style?.borderColor || '#d0d0d0'
                                }">
                                {{ col }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, rowIndex) in nodeData.rows" :key="rowIndex"
                            class="border-t hover:bg-opacity-10" :style="{
                                borderColor: nodeData.style?.borderColor || '#d0d0d0',
                                backgroundColor: rowIndex % 2 === 0 ? (nodeData.style?.altCellBg || nodeData.style?.cellBg || '#ffffff') : nodeData.style?.cellBg || '#ffffff'
                            }">
                            <td v-for="col in nodeData.columns" :key="col" class="px-2 py-1 border-r" :style="{
                                borderColor: nodeData.style?.borderColor || '#d0d0d0'
                            }">
                                {{ row[col] || '' }}
                            </td>
                        </tr>
                        <tr v-if="!nodeData.rows || nodeData.rows.length === 0">
                            <td :colspan="nodeData.columns?.length || 1" class="px-2 py-4 text-center text-gray-500">
                                无数据
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="previewVisible = false">关闭</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

// 注册使用的 Element Plus 组件
import {
    ElButton,
    ElInput,
    ElColorPicker,
    ElDialog
} from 'element-plus';

const props = defineProps({
    nodeData: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['update:nodeData']);

// 预览对话框可见性
const previewVisible = ref(false);

// 模板数据
const templates = [
    {
        name: '基础表格',
        description: '2列3行基础表格',
        data: {
            columns: ['名称', '值'],
            rows: [
                { '名称': '项目1', '值': '数据1' },
                { '名称': '项目2', '值': '数据2' },
                { '名称': '项目3', '值': '数据3' }
            ],
            style: {
                headerBg: '#f0f0f0',
                cellBg: '#ffffff',
                altCellBg: '#f9f9f9',
                borderColor: '#d0d0d0'
            }
        }
    },
    {
        name: '人员信息表',
        description: '员工信息表格',
        data: {
            columns: ['姓名', '部门', '职位', '邮箱'],
            rows: [
                { '姓名': '张三', '部门': '技术部', '职位': '工程师', '邮箱': 'zhangsan@example.com' },
                { '姓名': '李四', '部门': '市场部', '职位': '经理', '邮箱': 'lisi@example.com' }
            ],
            style: {
                headerBg: '#e6f7ff',
                cellBg: '#ffffff',
                altCellBg: '#f0f9ff',
                borderColor: '#91d5ff'
            }
        }
    },
    {
        name: '产品清单',
        description: '产品信息表格',
        data: {
            columns: ['产品名称', '价格', '库存', '状态'],
            rows: [
                { '产品名称': '笔记本电脑', '价格': '¥5999', '库存': '50', '状态': '在售' },
                { '产品名称': '无线鼠标', '价格': '¥99', '库存': '200', '状态': '在售' },
                { '产品名称': '机械键盘', '价格': '¥299', '库存': '0', '状态': '缺货' }
            ],
            style: {
                headerBg: '#fffbe6',
                cellBg: '#ffffff',
                altCellBg: '#fff7e6',
                borderColor: '#ffe58f'
            }
        }
    },
    {
        name: '销售统计表',
        description: '销售数据统计',
        data: {
            columns: ['月份', '销售额', '增长率', '目标完成率'],
            rows: [
                { '月份': '1月', '销售额': '¥120,000', '增长率': '5.2%', '目标完成率': '98%' },
                { '月份': '2月', '销售额': '¥135,000', '增长率': '12.5%', '目标完成率': '105%' },
                { '月份': '3月', '销售额': '¥128,000', '增长率': '-5.1%', '目标完成率': '92%' }
            ],
            style: {
                headerBg: '#f9f0ff',
                cellBg: '#ffffff',
                altCellBg: '#f0e6ff',
                borderColor: '#d3adf7'
            }
        }
    }
];

// 文件输入引用
const fileInput = ref();

// 添加列
const addColumn = () => {
    const newCol = `列${props.nodeData.columns.length + 1}`;
    props.nodeData.columns.push(newCol);

    // 为所有行添加新列
    props.nodeData.rows.forEach(row => {
        row[newCol] = '';
    });

    emitUpdate();
};

// 删除列
const removeColumn = (index) => {
    const colName = props.nodeData.columns[index];
    props.nodeData.columns.splice(index, 1);

    // 从所有行中删除该列
    props.nodeData.rows.forEach(row => {
        delete row[colName];
    });

    emitUpdate();
};

// 添加行
const addRow = () => {
    const newRow = {};
    props.nodeData.columns.forEach(col => {
        newRow[col] = '';
    });
    props.nodeData.rows.push(newRow);

    emitUpdate();
};

// 删除行
const removeRow = (index) => {
    props.nodeData.rows.splice(index, 1);
    emitUpdate();
};

// 处理样式变更
const handleStyleChange = () => {
    emitUpdate();
};

// 应用模板
const applyTemplate = (template) => {
    // 深拷贝模板数据
    const templateData = JSON.parse(JSON.stringify(template.data));

    // 更新节点数据
    Object.assign(props.nodeData, templateData);

    emitUpdate();
};

// 导出数据
const exportData = (format) => {
    let dataStr;
    let mimeType;
    let filename;

    if (format === 'json') {
        dataStr = JSON.stringify({
            columns: props.nodeData.columns,
            rows: props.nodeData.rows
        }, null, 2);
        mimeType = 'application/json';
        filename = 'table-data.json';
    } else if (format === 'csv') {
        // 创建CSV内容
        const headers = props.nodeData.columns.join(',');
        const rows = props.nodeData.rows.map(row =>
            props.nodeData.columns.map(col => `"${row[col] || ''}"`).join(',')
        ).join('\n');
        dataStr = `${headers}\n${rows}`;
        mimeType = 'text/csv';
        filename = 'table-data.csv';
    }

    // 创建下载链接
    const blob = new Blob([dataStr], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    // 清理URL对象
    setTimeout(() => URL.revokeObjectURL(url), 100);
};

// 导入数据
const importData = () => {
    fileInput.value.click();
};

// 处理文件导入
const handleFileImport = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const content = e.target.result;
            let importedData;

            if (file.name.endsWith('.json')) {
                importedData = JSON.parse(content);
            } else if (file.name.endsWith('.csv')) {
                importedData = parseCSV(content);
            }

            // 验证数据结构
            if (importedData.columns && Array.isArray(importedData.columns) &&
                importedData.rows && Array.isArray(importedData.rows)) {
                // 更新节点数据
                props.nodeData.columns = [...importedData.columns];
                props.nodeData.rows = [...importedData.rows];
                emitUpdate();
            } else {
                throw new Error('数据格式不正确');
            }
        } catch (error) {
            console.error('导入数据失败:', error);
            alert('导入失败：' + error.message);
        }

        // 清空文件输入
        event.target.value = '';
    };

    if (file.name.endsWith('.csv')) {
        reader.readAsText(file);
    } else {
        reader.readAsText(file);
    }
};

// 解析CSV数据
const parseCSV = (content) => {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) return { columns: [], rows: [] };

    // 解析标题行
    const headers = lines[0].split(',').map(header => header.replace(/^"|"$/g, ''));

    // 解析数据行
    const rows = lines.slice(1).map(line => {
        const values = line.split(',').map(value => value.replace(/^"|"$/g, ''));
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index] || '';
        });
        return row;
    });

    return { columns: headers, rows };
};

// 实时预览
const previewTable = () => {
    previewVisible.value = true;
};

// 发送更新事件
const emitUpdate = () => {
    emit('update:nodeData', {
        columns: [...props.nodeData.columns],
        rows: [...props.nodeData.rows],
        style: { ...props.nodeData.style }
    });
};
</script>

<style scoped>
.table-node-editor {
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', Arial, sans-serif;
}
</style>