<template>
  <div class="ems-editor__header">
    <div class="ems-editor__header__left">
      <el-button-group size="small">
        <el-button>文件</el-button>
        <el-button>帮助</el-button>
      </el-button-group>
    </div>
    <div class="ems-editor__header__center">首页</div>
    <div class="ems-editor__header__right">
      <el-button type="primary" style="width: 80px;">退出</el-button>
    </div>
  </div>
</template>
<script setup>
import { ElButton, ElButtonGroup } from 'element-plus';
</script>
<style scoped>
.ems-editor__header {
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  background-color: var(--ems-header-bg);
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #535f79;
}

.ems-editor__header__left {
  width: 300px;
}

.ems-editor__header__right {
  width: 300px;
}

.ems-editor__header__center {
  text-align: center;
  flex: 1;
}
</style>
