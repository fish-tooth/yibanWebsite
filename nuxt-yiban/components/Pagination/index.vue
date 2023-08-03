<template>

  <div class="pagination-box">
      <el-pagination
          v-show="total > 0"
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          background
          :page-sizes="[10, 20, 30, 50, 100]"
          :pager-count="pagerCount"
          :total="20"
          layout="prev, pager, next"
          class="mt-4"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
  </div>

</template>
<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({ name: 'Pagination' })

const props = defineProps({
  // 总条目数
  total: {
    required: true,
    type: Number
  },
  // 当前页数：pageNo
  page: {
    type: Number,
    default: 1
  },
  // 每页显示条目个数：pageSize
  limit: {
    type: Number,
    default: 20
  },
  // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
  // 移动端页码按钮的数量端默认值 5
  pagerCount: {
    type: Number,
    default: document.body.clientWidth < 992 ? 5 : 7
  }
})

const emit = defineEmits(['update:page', 'update:limit', 'pagination', 'pagination'])
const currentPage = computed({
  get() {
    return props.page
  },
  set(val) {
    // 触发 update:page 事件，更新 limit 属性，从而更新 pageNo
    emit('update:page', val)
  }
})
const pageSize = computed({
  get() {
    return props.limit
  },
  set(val) {
    // 触发 update:limit 事件，更新 limit 属性，从而更新 pageSize
    emit('update:limit', val)
  }
})
const handleSizeChange = (val) => {
  // 如果修改后超过最大页面，强制跳转到第 1 页
  if (currentPage.value * val > props.total) {
    currentPage.value = 1
  }
  emit('pagination', { page: currentPage.value, limit: val }) //  触发 pagination 事件 重新加载列表
}
const handleCurrentChange = (val) => {
  //  触发 pagination 事件 重新加载列表
  emit('pagination', { page: val, limit: pageSize.value })
}
</script>

<style scoped>
/** 分页按钮 */
.pagination-box {
    margin: 56px 0 !important;
    width: 100%;
    height: auto;
    
}
.el-pagination.is-background .btn-next.is-active, .el-pagination .is-background .btn-prev .is-active, .el-pagination .is-background .el-pager li.is-active {
    --el-pagination-bg-color: rgba(238, 106, 107, 1) !important;
}
.el-pagination {
    --el-pagination-hover-color: rgba(238, 106, 107, 1);
    --el-pagination-bg-color:  #D9D9D9;
    align-items: center;
    justify-content: center; 
}

:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: rgba(238, 106, 107, 1) !important; /* 修改默认的背景色 */
  --el-pagination-button-width: 50px;
}

</style>
