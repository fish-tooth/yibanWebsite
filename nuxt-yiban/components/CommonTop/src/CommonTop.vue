<template>
    <div>
        <div class="slider-wrapper">
        <!-- <img class="bg-img" src="../assets/images/yibanBg.jpg" alt=""> -->
        <div class="mask">
          <div class="slogan">
            <div v-for="item in slogan">{{ item }}</div>
          </div>
          <div class="wish">让每个孩子都能享受更高水平、更有质量的教育</div>
          <a class="more" href="#">了解更多</a> <!-- 待链接 -->
        </div>
      </div>
    </div>
</template>

<script lang="ts" setup>
// defineOptions({ name: 'CommonTop' })
const props = defineProps({
  slogan: {
    type: Array,
    required: true
  }
})

</script>

<style lang="scss" scoped>

.slider-wrapper {
  overflow: hidden;
  width: 100%;
  height: 900px;
  background: url(@/assets/images/demo_bg.png) no-repeat;
  background-size: cover;
}

.mask {
  margin: 20% 10%;
  padding-top: 3%;
  padding-left: 5%;
  width: 550px;
  height: 360px;
  color: rgba(255, 255, 255, 1);
  border-top: 9px solid rgba(238, 106, 107, 1);
  background: rgba(18, 18, 18, 0.45);
}

.slogan {
  font-family: 'Alibaba Sans Black';
  font-size: 55px;
  text-align: left;
}

.wish {
  margin-top: 2%;
  font-family: 'AlibabaPuHuiTi';
  font-size: 20px;
  text-align: left;
}

.more {
  display: inline-block;
  margin-top: 4%;
  width: 139px;
  height: 45px;
  font-family: 'AlibabaPuHuiTi';
  font-size: 20px;
  text-align: center;
  line-height: 45px;
  color: rgba(255, 255, 255, 1);
  background: rgba(238, 106, 107, 1);
}

@media screen and (min-width: 768px) {
  .mask {
    width: 523px;
    height: 314px;
  }

  .more {
    width: 139px;
    height: 45px;
    line-height: 45px;
  }
}

@media screen and (max-width: 768px) {
  .slider-wrapper {
    height: 1000px;
  }

  .mask {
    margin: 50% auto;
    width: 523px;
    height: 300px;

  }

  .more {
    width: 139px;
    height: 45px;
    line-height: 45px;
  }
}

</style>