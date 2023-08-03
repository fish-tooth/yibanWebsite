<template>
  <Layout>
    <!-- <div class="coorperation-bg">
    </div>
    <div class="coorperation-title">
      <div class="en">Contact</div>
      <div class="ch">合作交流</div>
      <div class="en">Us</div>
    </div> -->
    <!-- 顶部背景 -->
    <Support :titleCh="titleCh" :titleEn="titleEn"/>
    <!-- 联系信息 -->
    <div class="contact-information">
      <div class="ci-email">
        <img src="@/assets/images/coorperation_email.png" alt="" class="ci-icon">
        <p class="ci-title">合作邮箱</p>
        <p class="ci-content">463211838@qq.com</p>

      </div>
      <div class="border"></div>
      <div class="ci-address">
        <img src="@/assets/images/coorperation_address.png" alt="" class="ci-icon">
        <p class="ci-title">广州总部地址</p>
        <p class="ci-content">广州市番禺区大学城中环西路206号广州大学商业中心F2</p>
      </div>
      <div class="border"></div>
      <div class="ci-tel">
        <img src="@/assets/images/coorperation_tel.png" alt="" class="ci-icon">
        <p class="ci-title">全国免费热线</p>
        <p class="ci-content">暂未开通</p>
      </div>
    </div>

    <!-- 交互地图 -->
    <div class="map">
    </div>
    <!-- 合作申请 -->
    <img src="@/assets/images/coorperation_event.png" class="coor-apply">
    <img src="@/assets/images/coorperation_.png" class="coor-apply">
    <img src="@/assets/images/coorperation_apply.png" class="coor-apply">
  </Layout>
</template>
<script setup lang="ts">
import Layout from "@/layouts/default.vue";
useHead({
  title: "合作交流",
  titleTemplate(title) {
    return title ? `以伴-${title}` : "";
  },
  meta: [
    { name: "description", content: "网页的描述" },
    { name: "keywords", content: "关键字1" },
  ],
  bodyAttrs: {
    class: "red",
  },
  script: [
    {
      // src: "assets/a.js",
      body: true,
    },
  ],
});

const titleCh = '合作交流'
const titleEn = reactive(['Contact','Us'])
</script>

<style lang="scss" scoped>
// /* 顶部背景 */
// .coorperation-bg {
//   margin-top: 74px;
//   width: 100%;
//   height: 800px;
//   background: url(@/assets/images/coorperation_bg.png) no-repeat;
// }

// /* 大标题 */
// .coorperation-title {
//   position: absolute;
//   top: 260px;
//   right: 100px;
//   color: rgba(255, 255, 255, 1);

//   .ch {
//     font-family: 'Alibaba Sans Black';
//     font-size: 80px;
//   }

//   .en {
//     text-align: right;
//     font-family: 'Alibaba Sans Black';
//     font-size: 60px;

//   }
// }

/* 联系信息start */
.contact-information {
  display: flex;
  margin: 118px 113px 50px;
  height: 280px;

}

.ci-email,
.ci-address,
.ci-tel {
  margin: 0 auto;
  font-size: 24px;
  text-align: center;

}

.ci-email {
  flex: 1;

}

.ci-address {
  flex: 1.5;
  margin: 0 130px;
}

.ci-tel {
  flex: 1;
}

.ci-icon {
  width: 133px;
  height: 133px;
}

.ci-title {
  margin-top: 23px;
  color: rgba(128, 128, 128, 1);
}

.ci-content {
  margin-top: 25px;
  color: rgba(0, 0, 0, 1);
}

.border {
  display: inline-block;
  /* margin-top: 118px; */
  /* width: 167px; */
  height: 167px;
  opacity: 1;
  /* transform: rotate(90deg); */
  background: rgba(204, 204, 204, 1);
  border: 1px solid rgba(166, 166, 166, 1);
}

/* 联系信息end */

/* 交互地图start */
.map {
  width: 100%;
  height: 622px;
  background-color: antiquewhite;
}

/* 交互地图end */

/* 合作申请start */
.coor-apply {
  margin-top: 34px;
  width: 100%;
  height: 246px;
}

.coor-apply:last-child {
  padding-bottom: 57px;
}

/* 合作申请end */
</style>
