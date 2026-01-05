<template>
    <div class="table-node w-full h-full overflow-auto relative" :style="{
        backgroundColor: nodeData.style?.cellBg || '#ffffff',
        border: `1px solid ${nodeData.style?.borderColor || '#d0d0d0'}`
    }">
        <table class="min-w-full h-full">
            <thead>
                <tr class="text-left" :style="{
                    backgroundColor: nodeData.style?.headerBg || '#f0f0f0'
                }">
                    <th v-for="col in nodeData.columns" :key="col" class="px-2 py-1 font-medium border-r border-b"
                        :style="{
                            borderColor: nodeData.style?.borderColor || '#d0d0d0'
                        }">
                        {{ col }}
                    </th>
                    <th v-if="nodeData.columns && nodeData.columns.length > 0" class="px-2 py-1 font-medium border-b"
                        :style="{
                            borderColor: nodeData.style?.borderColor || '#d0d0d0',
                            backgroundColor: nodeData.style?.headerBg || '#f0f0f0'
                        }"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in nodeData.rows" :key="rowIndex" class="border-t hover:bg-opacity-10"
                    :style="{
                        borderColor: nodeData.style?.borderColor || '#d0d0d0',
                        backgroundColor: rowIndex % 2 === 0 ? (nodeData.style?.altCellBg || nodeData.style?.cellBg || '#ffffff') : nodeData.style?.cellBg || '#ffffff'
                    }">
                    <td v-for="col in nodeData.columns" :key="col" class="px-2 py-1 border-r" :style="{
                        borderColor: nodeData.style?.borderColor || '#d0d0d0'
                    }">
                        {{ row[col] || '' }}
                    </td>
                    <td class="px-2 py-1" :style="{
                        borderColor: nodeData.style?.borderColor || '#d0d0d0'
                    }"></td>
                </tr>
                <tr v-if="!nodeData.rows || nodeData.rows.length === 0">
                    <td :colspan="nodeData.columns?.length || 1" class="px-2 py-4 text-center text-gray-500">
                        无数据
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="!nodeData.columns || nodeData.columns.length === 0"
            class="absolute inset-0 flex items-center justify-center p-4 text-center text-gray-500">
            请在属性面板中配置表格
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    node: {
        type: Object,
        required: true
    }
});

// 使用 computed 属性确保响应式更新
const nodeData = computed(() => {
    return props.node.getData() || {
        columns: [],
        rows: [],
        style: {}
    };
});
</script>

<style scoped>
.table-node {
    border-radius: 4px;
}

.table-node table {
    border-collapse: collapse;
    height: 100%;
}

.table-node th:last-child,
.table-node td:last-child {
    border-right: none;
}

.table-node tr:last-child td {
    border-bottom: none;
}
</style>