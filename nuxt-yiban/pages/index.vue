<template>
  <Layout>
    <div>
      <!-- 顶部背景组件 -->
      <CommonTop :slogan="slogan"/>
      <!-- 捐赠入口和数据展示 -->
      <el-row class="wrapper">
         <!-- 捐赠入口 -->
        <el-col class="about-us" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <div></div>
        </el-col>
          <!-- 数据展示 -->
        <el-col class="serve-num" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
          <el-row justify="space-around">
            <el-col class="serve-item" 
              v-for="(item, index) of serveNum" key="index"
              :xl="24" :lg="24" :md="24" :sm="12" :xs="24">
                <!-- <p class="num" v-inserted>{{ item.num }}</p> -->
                <CountTo
                  class="num"
                  :start-val="0"
                  :end-val="item.num"
                  :duration="2000"
                />
                <p class="title">{{ item.title }}</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- 核心工作 -->
      <div class="core-business">
        <div class="cb-title">我们的核心工作</div>
        <div class="cb-content">
          <div
            v-for="(list, index) in  coreList " :key="index"
            :class="list.id==defaultActive?'cb-item-active':'cb-item'"
            @mouseenter="handleMouseOver($event)"
            @mouseleave="handleMouseLeave($event)"> 
            <a style="color: rgb(255,255,255);">
              <!-- <img  class="cb-cover-img" src="../assets/images/demo_cb.png"  alt=""> -->
              <div class="num">{{ list.num }}</div>
              <div>{{ list.title }}</div>
            </a>
          </div>
        </div>
      </div>
      <!-- 当前行动 -->
      <div class="current-project">
        <div class="cp-title">我们的行动正在发生</div>
        <div class="cp-content">
          <div class="cp-item" v-for="(list, index) in  runningList" :key="index">
            <a style="color: rgb(255,255,255)">
              <div class="cp-text-card">
              <div class="cp-item-title">{{ list.title }}</div>
              <div class="cp-item-intro">{{ list.intro }}</div>
            </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="cooperation-partner">
        <div class="coop-title">合作伙伴</div>
        <img class="partnerImg"
          src="https://img.js.design/assets/img/6378c6dd6e9a5c7685b46cb0.png#de5e646163aafe80259239543453a409"
          alt="" />
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layouts/default.vue";
import { getCurrentInstance } from 'vue';
import { CountUp } from 'vue-countup-v2'

const delay = 1000;
const endVal= 120500;
      
const options = {
        useEasing: true,
        useGrouping: true,
        // separator: ',',
        // decimal: '.',
        // prefix: '$',
        // suffix: '',
}
const that = getCurrentInstance()
useHead({
  title: "首页",
  titleTemplate(title) {
    return title ? `以伴-${title}` : "";
  },
  meta: [
    { name: "description", content: "网页的描述" },
    { name: "keywords", content: "关键字1" },
  ],
});

const slogan = ['团队力量大','公益反响大'];
let defaultActive = ref(1);
const active = ref(0);
// 鼠标移入动画
const handleMouseOver = function($event: any){
  $event.currentTarget.className = "cb-item-active";
  let index = $event.target.childNodes[0].childNodes[0].innerText;
  console.log('当前编号:' + index);
  defaultActive = index
  console.log('defaultActive:' + defaultActive);
}
// 鼠标移出动画
const handleMouseLeave = function($event: any){
  $event.currentTarget.className = "cb-item";
}

// 数据展示
var serveNum = [{
  title: "累计陪伴学生人数",
  num: 10087
},
{
  title: "累计参加志愿者人数",
  num: 2023
},
{
  title: "累计开展专项辅导陪伴项目数",
  num: 215
}];
// 核心工作
var coreList = [{
  id: 1,
  num: '01',
  coverImg: '@/assets/images/demo_cb.png',
  icon: '',
  title: '云伴学',
  intro: '一对一教学学校互补型指导一对一教学学校互补型指导一对一教学学校互补型指导一对一教学学校互补型指导一对一教学学校互补型指导',
  url: ''
},
{
  id: 2,
  num: '02',
  coverImg: '@/assets/images/demo_cb.png',
  icon: '',
  title: '校互补型指导',
  intro: '',
  url: ''
},
{
  id: 3,
  num: '03',
  coverImg: '@/assets/images/demo_cb.png',
  icon: '',
  title: '云伴学',
  intro: '',
  url: ''
},
{
  id: 4,
  num: '04',
  coverImg: '@/assets/images/demo_cb.png',
  icon: '',
  title: '云伴学',
  intro: '',
  url: ''
},
{
  id: 5,
  num: '05',
  coverImg: '@/assets/images/demo_cb.png',
  icon: '',
  title: '云伴学',
  intro: '',
  url: ''
},
{
  id: 6,
  num: '06',
  coverImg: '@/assets/images/demo_cb.png',
  icon: '',
  title: '云伴学',
  intro: '',
  url: ''
}]
// 当前项目
var runningList = [{
  id: 1,
  title: '云陪伴项目',
  intro: '项目的详细介绍分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证产品本身内容有吸引力的核心前提下，仔细揣摩用户心理...',
  url: ''
}, {
  id: 2,
  title: '云陪伴项目',
  intro: '项目的详细介绍分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证产品本身内容有吸引力的核心前提下，仔细揣摩用户心理...',
  url: ''
}, {
  id: 3,
  title: '云陪伴项目',
  intro: '项目的详细介绍分享形式、分享动机、分享场景4个维度来聊聊「社交分享」的那些事儿。分享时机，在不同的时机分析用户是否有分享的意愿，提供给他们合适的分享内容，能让分享的效果更好。用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证产品本身内容有吸引力的核心前提下，仔细揣摩用户心理...',
  url: ''
}]


onMounted(() => {
    // 在页面加载时调用的函数逻辑
    
});

</script>

<style lang="scss" scoped>
/* 变量声明 */

body {
  font-size: 16px;
}

/* 中心标题 */
.cb-title,
.cp-title,
.coop-title {
  font-family: 'Alibaba Sans Black';
}
/* 关于我们 */
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;

}

.about-us {
  padding: 4%;
  height: auto;
  background: rgba(238, 106, 107, 1);
  color: #fff;
}

.serve-num {
  flex: 1;
  padding: 50px 0;
  height: auto;
  background-color: beige;
}

.about-us .title {
  display: inline-block;
  font-size: 55px;
}

.about-us .content {
  margin-top: 30px;
  font-family: sans-serif;
  font-size: 20px;
  line-height: 1.5;
  text-indent: 2em;
  text-align: justify;
}

.about-us .content:first-of-type {
  margin-top: 57px;
}
/* 数据展示 */
.serve-item {
  box-sizing: border-box;
  padding: 40px 0;
  width: 100%;
  line-height: 1.7;
  text-align: center;
}

.serve-item .title {
  font-family: sans-serif;
  font-size: 25px;
  color: rgba(166, 166, 166, 1);
}

.serve-num .num {
  display: inline-block;
  width: 100%;
  font-family: 'YouSheBiaoTiYuan';
  font-size: 65px;
}

/* 我们的核心工作 */
.core-business {
  
  margin: 4%;
  margin-top: 100px;

  .cb-title {
    font-size: 48px;
    color: rgba(47, 46, 52, 1);
  }

  .cb-content {
    display: flex;
    margin-top: 73px;
    color: rgba(255, 255, 255, 1);
  }
  .cb-cover-img {
    width: 100%;
    height: 100%;
  }
  .cb-item {
    flex: 1;
    margin-left: 10px;
    padding: 40px;
    width: 108px;
    min-height: 420px;
    background: rgba(128, 128, 128, 1);
    font-size: 20px;
    transition: all ease-out 0.4s;
  }
  .cb-item-active {
    // display: inline-block;
    flex: 4;
    margin-left: 21px;
    box-sizing: border-box;
    padding: 55px 38px 55px 58px;
    width: 575px;
    font-size: 40px;
    background: rgba(238, 106, 107, 0.85);
    transition: all ease-out 0.4s; 
  }

  .item-title-active {
    font-size: 36px;
    color: rgba(255, 255, 255, 1);

  }

}

@media screen and (max-width: 768px) {

  .core-business {
    margin-top: 120px;
    .cb-title {
      font-size: 48px;
    }
    .cb-content {
      display: inline-block;
      margin-top: 25px;
      width: 100%;
    }
    .cb-item {
      margin-top: 25px;
      margin-left: 0;
      width: 100%;
      min-height: 130px;
      font-size: 20px;
      background: rgba(128, 128, 128, 1);
      transition: all ease-out 0.4s;
    }
    .cb-item-active { 
      margin-top: 25px;
      margin-left: 0;
      width: 100%;
      min-height: 420px;
      font-size: 40px;
      background: rgba(238, 106, 107, 0.85);
      transition: all ease-out 0.4s; 
    }
  }
}

.current-project {
  margin: 4%;
  margin-top: 100px;
  height: auto;

  .cp-title {
    font-size: 48px;
    color: rgba(47, 46, 52, 1);
  }

  .cp-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
    color: rgba(255, 255, 255, 1);
  }
  .cp-content>:first-child {
    margin-left: 0;
  }


  .cp-item {
    overflow: hidden;
    flex: 1;
    position: relative;
    margin-left: 4%;
    min-height: 469px;
    background: rgba(238, 106, 107, 1);

  }
  .cp-text-card {
    position: absolute;
    bottom: -12px;
    opacity: 0;
    // margin-bottom: 0;
    // transition: all .2s ease-in-out;
    padding: 30px;
    min-height: 300px;
    background-color: rgb(195, 195, 195,0.5);
    -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
		transition: all 250ms cubic-bezier(.02, .01, .47, 1);
  }
  .cp-item:hover .cp-text-card{
    opacity: 1;
    // margin-bottom: 0;
    // padding: 30px;
    // min-height: 300px;
    // background-color: rgb(0, 0, 0);
    // transition: bottom .2s ease-in-out;
    
    transform: translate(0,-12px);
	  transition-delay: 0s !important;
  }
  
  .cp-item-title {
    font-family: 'AlibabaPuHuiTi';
    font-size: 24px;
    text-align: left;
  }
  .cp-item-intro {
    margin-top: 20px;
    font-family: sans-serif;
    font-size: 14px;
    line-height: 1.7;
  }
}

@media screen and (max-width: 768px) {

  .current-project {
    margin: 4%;

    .cp-title {
      font-size: 48px;
      color: rgba(47, 46, 52, 1);
    }

    .cp-content {
      display: block;
      width: 100%;
      height: auto;
    }

    .cp-item {
      margin-top: 40px;
      margin-left: 0;
      height: 381px;
    }
  }
}

.cooperation-partner {
  margin: 4%;
  margin-top: 100px;

  .coop-title {
    font-size: 48px;
    color: rgba(47, 46, 52, 1);
  }
}





// //color
// $color255-1: rgba(255, 255, 255, 1);
// $color255-04: rgba(255, 255, 255, 0.4);
// $color128-1: rgba(128, 128, 128, 1);
// $color77-1: rgba(77, 77, 77, 1);

// // font-family
// $family1: 阿里妈妈数黑体;
// $family2: 阿里巴巴惠普体regular;
// $family3: 思源黑体;
// $family4: 优设标题圆;

// @mixin size-position($width: auto, $height: auto, $left: auto, $top: auto) {
//   width: $width;
//   height: $height;
//   left: $left;
//   top: $top;
// }

// .picture {
//   @include size-position(1440px, 960px, 0, -105px);
//   // @include size-position(100%, 50%, 0, -105px);
//   @extend %pos;

//   background: {
//     image: url("https://img.js.design/assets/img/636514531beac627deafba54.jpg#e228673ae2cf533f1f33bd1393df4df0");
//     size: 100% 100%;
//   }

//   >.border {
//     @include size-position(523px, 9px, 142px, 439px);
//     background: rgba(238, 106, 107, 1);
//     @extend %pos;
//   }

//   >.noteBackground {
//     @include size-position(523px, 305px, 142px, 448px);
//     background: rgba(18, 18, 18, 0.45);
//     @extend %pos;

//     >.slogen1 {
//       @include size-position(300px, 144px, 49px, 32px);
//       @extend %align;
//       font: 400 60px/72px $family1;
//       color: $color255-1;
//       @extend %pos;
//     }

//     >.slogen2 {
//       @include size-position(414px, 28px, 49px, 193px);
//       @extend %align;
//       // font: 400 20px/28px $family2;
//       font: 400 18px/28px $family2; //未设字体
//       color: $color255-1;
//       @extend %pos;
//     }

//     >.learnBackground {
//       @include size-position(139px, 45px, 49px, 238px);
//       background: rgba(219, 123, 123, 1);
//       @extend %pos;

//       >.learnMore {
//         @include size-position(99px, 28px, 8px, 9px);
//         @extend %align;
//         // font: 400 20px/28px $family2;
//         font: 400 19px/28px $family2; //未设字体
//         letter-spacing: 5px;
//         color: $color255-1;
//         @extend %pos;
//       }

//       >.arrow {
//         @include size-position(24px, 24px, 107px, 11px);
//         @extend %pos;
//       }

//       // .right{
//       //   border:9px solid $color255-1;
//       //   width: 0;
//       //   height: 0;
//       //   border-color: transparent transparent transparent $color255-1 ;
//       //   left: 9px;
//       //   top: 6px;
//       // }
//       .right {
//         @include size-position(9px, 12px, 9px, 6px);
//         background: $color255-1;
//         @extend %pos;
//       }
//     }
//   }

//   %roller {
//     @include size-position(50px, 6px, auto, 910px);
//     background: $color255-04;
//     @extend %pos;
//   }

//   >.roller1 {
//     @extend %roller;
//     left: 1153px;
//   }

//   >.roller2 {
//     @extend %roller;
//     left: 1213px;
//   }

//   >.roller3 {
//     @extend %roller;
//     left: 1273px;
//   }
// }

// .aboutUs {
//   @include size-position(720px, 764px, 0, 855px);
//   background: rgba(238, 106, 107, 1);
//   @extend %pos;

//   >.aboutTitle {
//     @include size-position(192px, 58px, 69px, 70px);
//     @extend %align;
//     font: 400 48px/58px $family1;
//     color: $color255-1;
//     @extend %pos;
//   }

//   >.article {
//     @include size-position(534px, 514px, 69px, 185px);
//     @extend %align;
//     font: 400 18px/25.7px $family3;
//     color: $color255-1;
//     @extend %pos;
//     white-space: pre-wrap;
//   }
// }

// .numberBackground {
//   @include size-position(720px, 764px, 720px, 855px);
//   @extend %pos;

//   %bigNumber {
//     @extend %align;
//     font: 400 72px/94px $family4;
//     letter-spacing: 5px;
//     color: rgba(47, 46, 52, 1);
//     @extend %pos;
//   }

//   %smallNumber {
//     @extend %align;
//     font: 400 14px/21px $family3;
//     color: rgba(166, 166, 166, 1);
//     @extend %pos;
//   }

//   >.number1 {
//     @extend %bigNumber;
//     @include size-position(auto, 94px, 261px, 133px);
//   }

//   >.number11 {
//     @extend %smallNumber;
//     @include size-position(auto, 21px, 322px, 217px);
//   }

//   >.number2 {
//     @extend %bigNumber;
//     @include size-position(auto, 94px, 286px, 357px);
//   }

//   >.number21 {
//     @extend %smallNumber;
//     @include size-position(auto, 21px, 322px, 441px);
//   }

//   >.number3 {
//     @extend %bigNumber;
//     @include size-position(auto, 94px, 315px, 584px);
//   }

//   >.number31 {
//     @extend %smallNumber;
//     @include size-position(auto, 21px, 286px, 668px);
//   }
// }

// .coreTitle {
//   @include size-position(336px, 58px, 69px, 1684px);
//   @extend %align;
//   font: 400 48px/58px $family1;
//   color: rgba(47, 46, 52, 1);
//   @extend %pos;
// }

// %spread {
//   @include size-position(108px, 420px, auto, 1815px);
//   @extend %pos;
// }

// .spread01 {
//   @include size-position(630px, 420px, 69px, 1815px);
//   @extend %pos;
//   background: rgba(238, 106, 107, 0.85);
// }

// .spread02 {
//   @extend %spread;
//   left: 720px;
//   background: $color128-1;
// }

// .spread03 {
//   @extend %spread;
//   left: 849px;
//   background: rgba(144, 144, 144, 1);
// }

// .spread04 {
//   @extend %spread;
//   left: 978px;
//   background: rgba(160, 160, 160, 1);
// }

// .spread05 {
//   @extend %spread;
//   left: 1107px;
//   background: rgba(176, 176, 176, 1);
// }

// .spread06 {
//   @extend %spread;
//   left: 1236px;
//   background: rgba(192, 192, 192, 1);
// }

// .runningTitle {
//   @include size-position(432px, 58px, 69px, 2435px);
//   @extend %align;
//   font: 400 48px/58px $family1;
//   color: $color77-1;
//   @extend %pos;
// }

// %upPage {
//   @include size-position(359px, 189px, auto, 2590px);

//   background: {
//     image: url(https://img.js.design/assets/smartFill/img348164da74c4b8.jpeg);
//     color: rgba(204, 204, 204, 1);
//   }

//   @extend %pos;
//   background-size: 100% 100%;
// }

// %underPage {
//   @include size-position(359px, 280px, auto, 2779px);
//   background: rgba(238, 106, 107, 1);
//   @extend %pos;
// }

// $left1: 87px;
// $left2: 541px;
// $left3: 995px;

// .upPage1 {
//   @extend %upPage;
//   left: $left1;
// }

// .underPage1 {
//   @extend %underPage;
//   left: $left1;
// }

// .upPage2 {
//   @extend %upPage;
//   left: $left2;
// }

// .underPage2 {
//   @extend %underPage;
//   left: $left2;
// }

// .upPage3 {
//   @extend %upPage;
//   left: $left3;
// }

// .underPage3 {
//   @extend %underPage;
//   left: $left3;
// }

// .projectTitle {
//   @include size-position(auto, 33px, 25px, 28px);
//   @extend %align;
//   font: 700 24px/33px $family2;
//   color: $color255-1;
//   @extend %pos;
// }

// .content {
//   @include size-position(294px, 170px, 25px, 74px);
//   font: 400 14px/21.25px $family3;
//   @extend %align;
//   color: rgba(255, 255, 255, 1);
//   @extend %pos;
// }

// .partnerTitle {
//   @include size-position(192px, 58px, 87px, 3146px);
//   @extend %align;
//   font: 400 48px/58px $family1;
//   color: $color77-1;
//   @extend %pos;
// }

// .partnerImg {
//   @include size-position(1219px, 245px, 135px, 3237px);
//   @extend %pos;
// }
</style>
