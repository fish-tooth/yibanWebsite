<template>
  <Layout>
    <div>
      <!-- <h1>关于我们</h1> -->
      <!-- <NuxtLink to="/">返回首页</NuxtLink> -->
      <!-- 顶部视频模块 -->
      <div class="top-box">
        <div class="yiban-bg"><img src="@/assets/images/yiban_bg.png" alt="" class="img"></div>
        <div class="about-title">
          <div class="ch">关于我们</div>
          <div class="en">About Us</div>
        </div>
        <div class="video-box">
          <video src="">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <!-- 组织特点模块 -->
      <div class="organization-charac">
        <div class="oc-banner">
          <div class="oc-title">组织使命</div>
          <p class="oc-intro">让每一份陪伴都能改变一个孩子的命运！</p>
        </div>
        <div class="oc-banner">
          <div class="oc-title">组织愿景</div>
          <p class="oc-intro">让每一名孩子都能享受向上向善的发展机会</p>
        </div>
        <div class="oc-banner">
          <div class="oc-title">组织核心竞争力</div>
          <p class="oc-intro">团队力量大，公益反响大</p>
          <p class="oc-intro">服务时效好，合作力量强</p>
        </div>
        <div class="oc-banner">
          <div class="oc-title">组织价值观</div>
          <p class="oc-intro">相信因果，积极主动</p>
          <p class="oc-intro">借鉴超越，持续优化</p>
        </div>
      </div>
      <!-- 组织负责人介绍 -->
      <CommonTitle :comTitleCh="'组织负责人 龚旺'" :comTitleEn="'LEADER PROFILE'"/>
      <div class="leader-profile">
        <div class="lp-photo"></div>
        <div class="lp-intro-bg"></div>
        <p class="lp-intro-text">
          共青团中央中国青年志愿者优秀个人奖<br />广州市番禺区以伴青少年发展中心总干事<br />
          荣获“互联网+”国赛金奖、银奖等荣誉奖项近百项<br />央视《对话2020》特邀嘉宾<br />
          广东卫视《众创英雄汇》特邀评委<br />广东省优秀共青团员广东优秀战疫志愿服务典型组织创始人<br />
          广东公益创业优秀组织创始人<br />广东大学生志愿服务社区行动示范项目创始人<br />
          广州市优秀青年创新创业人才志愿时长1000余小时<br />广州市番禺区以伴青少年发展中心外联负责人<br />
          共青团中央全国向上向善好青年<br />共青团中央中国青年志愿者优秀个人<br />
          粤港澳大湾区青年创业人才榜样<br />2022年第四季度广州好人
        </p>
      </div>
      <!-- 组织核心成员介绍 -->
      <CommonTitle :comTitleCh="'组织核心成员'" :comTitleEn="'CORE PROFILE'"/>
      <div class="core-profile">
        <div class="cp-profile">
          <img src="@/assets/images/mgt_profile.png" class="mgt-photo" />
        </div>
        <div class="cp-profile">
          <img src="@/assets/images/wqq_profile.png" class="wqq-photo" />
        </div>
        <div class="cp-profile">
          <img src="@/assets/images/zxx_profile.png" class="zxx-photo" />
        </div>
      </div>
      <!-- 组织环境 -->
      <CommonTitle :comTitleCh="'组织工作环境'" :comTitleEn="'WORKING ENVIRONMENT'"/>
      <img src="@/assets/images/working_enviroment.png" alt="组织工作环境">
    </div>
    <!-- 组织发展历程 -->
    <CommonTitle :comTitleCh="'组织发展历程'" :comTitleEn="'DEVELOPMENT PROCESS'"/>
    <div class="dp-intro">
    </div>

  </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layouts/default.vue";
useHead({
  title: "关于我们",
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
</script>

<style lang="scss" scoped>
html,
body {
  background-color: rgb(255, 255, 255);
}

/* 顶部视频模块start */
.top-box {
  overflow: hidden;
  width: 100%;
  height: 960px;
  background: linear-gradient(192deg, rgba(237, 107, 109, 0.69) 0%, rgba(255, 255, 255, 0.85) 100%);
}

.yiban-bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 800px;
}

.yiban-bg .img {
  width: 100%;
  height: 100%;
}

.about-title {
  position: absolute;
  top: 180px;
  right: 160px;
  color: rgba(255, 255, 255, 1);

  .ch {
    font-family: 'Alibaba Sans Black';
    font-size: 80px;
  }

  .en {
    text-align: right;
    font-family: 'Alibaba Sans Black';
    font-size: 60px;

  }
}

.video-box {
  position: absolute;
  left: 71px;
  top: 280px;
  width: 650px;
  height: 400px;
  border-radius: 13px;
  background-color: #cdcccc;
}

/* 顶部视频模块end */


/* 组织特点start */
.organization-charac {
  display: flex;
  flex-wrap: wrap;
  height: 596px;
  background-color: antiquewhite;
}

.oc-banner:nth-child(odd) {
  flex: 1;
  background: rgba(239, 107, 112, 1);
  border-top: 38px solid rgb(245, 166, 169);

}

.oc-banner:nth-child(even) {
  flex: 1;
  background: rgba(227, 154, 118, 0.9);
  border-top: 38px solid rgb(239, 200, 181);
}

.oc-title {
  margin: 240px 0 60px 0;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-size: 42px;
  font-weight: 900;
}

.oc-intro {
  /* display: flex; */
  text-align: center;
  font-size: 24px;
  color: rgba(255, 255, 255, 1);

}

/* 组织特点end */

/* 组织负责人start */
.leader-profile {
  display: flex;
  flex-wrap: wrap;
}

.lp-title {
  margin: 100px auto;
  font-family: sans-serif;

  .lp-ch {
    font-size: 48px;
    text-align: center;

  }

  .lp-en {
    font-size: 40px;
    text-align: center;
    color: rgb(153, 164, 179);
  }
}

.lp-photo {
  flex: 1;
  margin: 0 36px;
  z-index: 2;
  width: 671px;
  height: 628px;
  border-radius: 10px;
  background: url(@/assets/images/gw_profile.png) no-repeat;
}

.lp-intro-bg {
  position: absolute;
  left: 679px;
  top: 1781px;
  width: 803px;
  height: 803px;
  background: radial-gradient(50% 50%, rgba(240, 108, 112, 1) 52%, rgba(240, 108, 112, 0.5) 78%, rgba(239, 107, 112, 0) 100%);
  filter: blur(10px);
}

.lp-intro-text {
  position: absolute;
  left: 800px;
  top: 1930px;
  font-size: 20px;
  font-weight: 700;
  line-height: 35px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}

/* 组织负责人end */

/* 组织核心成员start */
.core-profile {
  display: flex;
  padding: 0 59px;
  height: 623px;
}

.cp-profile {
  flex: 1;
}

.mgt-profile {
  width: 414px;
  height: 571px;
}

.wqq-profile {
  width: 450px;
  height: 623px;
}

.zxx-profile {
  width: 424px;
  height: 623px;
}

/* 组织核心成员end */

/* 组织发展历程start */
.dp-intro {
  width: 895px;
  height: 619px;
  opacity: 1;

  border: 28px solid rgba(255, 204, 138, 1);
}

/* 组织发展历程end */
</style>
