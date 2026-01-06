<template>
    <div class="propertyForm">
        <nodePanel v-if="isNode"></nodePanel>
        <linePanel v-else></linePanel>
    </div>
</template>
<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, inject } from 'vue'

import { storeToRefs } from 'pinia'
import nodePanel from './nodePanel.vue'
import linePanel from './linePanel.vue'
import { usePropertyStore } from '../../stores/property'
import { useGraphStore } from '../../stores/graph'

const propertyStore = usePropertyStore()
const graphStore = useGraphStore()

const cell = inject('getCurCell')()
const isNode = ref(cell?.isNode())
console.log(inject('cellId').value, isNode.value, cell)
</script>
<style lang="scss">
.propertyForm {
    box-sizing: border-box;
    padding-top: 20px;

    .propertyTitle {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 10px;
    }
}
</style>