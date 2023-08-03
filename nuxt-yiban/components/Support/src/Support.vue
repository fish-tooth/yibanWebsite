<template>
    <div>
        <div class="coorperation-bg"></div>
        <div class="coorperation-title">
        <div class="en">{{ titleEn[0] }}</div>
        <div class="ch">{{ titleCh }}</div>
        <div class="en">{{ titleEn[1] }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// defineOptions({ name: 'CommonTop' })
const props = defineProps({
  titleCh: {
    type: String,
    required: true
  },
  titleEn: {
    type: Array,
    required: true
  }
})

</script>

<style lang="scss" scoped>

/* 顶部背景 */
.coorperation-bg {
  margin-top: 74px;
  width: 100%;
  height: 800px;
  background: url(@/assets/images/coorperation_bg.png) no-repeat;
}

/* 大标题 */
.coorperation-title {
  position: absolute;
  top: 260px;
  right: 100px;
  color: rgba(255, 255, 255, 1);

  .ch {
    font-family: 'Alibaba Sans Black';
    font-size: 80px;
  }

  .en {
    text-align: right;
    font-family: 'Alibaba Sans Black';
    font-size: 80px;

  }
}
/** <992px */
@media screen and (max-width: 992px) {
    /* 大标题 */
    .coorperation-title {
        .ch,.en {
            font-size: 60px;
        }
    }
}
</style>