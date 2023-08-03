<template>
    <Layout>

        <div class="bg">
            <!-- 顶部背景 -->
            <div class="news-title">
                <div class="ch">新闻中心</div>
                <div class="en">News Center</div>
            </div>
            <div class="top-bg">
                <img src="@/assets/images/news_top_bg.png" alt="">
            </div>
            <div class="ball1"></div>
            <div class="ball2"></div>
            <div class="ball3"></div>
            <div class="ball4"></div>

            <!-- 新闻资讯主体 -->
            <div class="news-center">
                <!-- 新闻资讯年份 -->
                <img src="@/assets/images/news_year.png" alt="" class="nc-year-box">
                <div class="nc-year">{{ newsYear }}</div>
                <!-- 新闻资讯列表 -->
                <div class="nc-list">
                  <el-row class="mt-5px" :gutter="200" justify="space-between">
                    <el-col class="mb-10px" shadow="never">
                      <el-card class="outer-el-card">
                          <el-row>
                            <el-col              
                              :xl="24"
                              :lg="24"
                              :md="24"
                              :sm="24"
                              :xs="24"
                            >
                              <el-row :gutter="24" justify="space-between" >
                                <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24" v-for="(item,index) in newsList" :key="`card-${index}`">
                                  <el-card shadow="hover" class="mb-10px">
                                      <div style="display: flex;">
                                        <img src="@/assets/images/join.png" class="cover-img"/>
                                        <div class="nc-content">
                                          <h1 class="nc-date">{{ item.date }}</h1>
                                          <p class="nc-title">{{item.title}}</p>
                                          <p class="nc-intro">{{ item.intro }}</p>
                                        </div>
                                        
                                      </div>
                                  </el-card>
                                </el-col> 
                              </el-row>
                            </el-col>
                          </el-row>
                        <!-- </el-skeleton> -->
                      </el-card>
                    </el-col>                 
                  </el-row>
                </div>

            </div>
            <div class="ball-bottom"></div>
        </div>


    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layouts/default.vue";
import { ref, computed } from 'vue';
useHead({
    title: "新闻资讯",
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
const newsYear = 2023;

const newsList = reactive([
    {
        id: 1,
        title: '小伴开春的第一天', 
        coverImg: '@/assets/images/yiban_bg.png',
        date: '02-01',
        intro: '新的一年，小伴也会坚定信念，与大家一起，为更多有需要的孩子们带去公益梦,一起伴梦同行......'

    },
    {
        id: 1,
        title: '小伴开春的第一天', 
        coverImg: '@/assets/images/yiban_bg.png',
        date: '02-01',
        intro: '新的一年，小伴也会坚定信念，与大家一起，为更多有需要的孩子们带去公益梦,一起伴梦同行......'

    },
    {
        id: 1,
        title: '小伴开春的第一天', 
        coverImg: '@/assets/images/yiban_bg.png',
        date: '02-01',
        intro: '新的一年，小伴也会坚定信念，与大家一起，为更多有需要的孩子们带去公益梦,一起伴梦同行......'

    }
])
</script>


<style lang="scss" scoped>
/* 整个页面的背景颜色  */
.bg {
    width: 100%;
    height: 3660px;
    background: linear-gradient(90deg, rgba(222, 115, 113, 1) 0%, rgba(230, 175, 174, 0) 100%);
}

/* 顶部背景start */
.news-title {
    position: absolute;
    top: 350px;
    left: 530px;
    color: rgba(255, 255, 255, 1);

    .ch {
        font-family: 'Alibaba Sans Black';
        font-size: 80px;
    }

    .en {
        text-align: left;
        font-family: 'Alibaba Sans Black';
        font-size: 60px;

    }
}

.top-bg {
    margin: 0 auto;
    width: 929px;
    height: 829px;
}

.ball1 {
    position: absolute;
    right: -70px;
    top: 0;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    transform: rotate(-37deg);
    background: radial-gradient(100% 68%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(194, 94, 66, 1) 100%);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(12px);
}

.ball2 {
    position: absolute;
    left: 250px;
    top: 200px;
    width: 195px;
    height: 195px;
    border-radius: 50%;
    transform: rotate(-37deg);
    background: radial-gradient(0% 68%, rgba(255, 255, 255, 1) 0%, rgba(242, 166, 145, 0.61) 61%, rgba(235, 111, 77, 0.37) 100%);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(12px);
}

.ball3 {
    position: absolute;
    left: 981px;
    top: 520px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    transform: rotate(-15.42deg);
    background: radial-gradient(0% 50%, rgba(255, 255, 255, 1) 0%, rgba(161, 73, 48, 1) 100%);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(12px);
}

.ball4 {
    position: absolute;
    left: -50px;
    top: 660px;
    width: 264px;
    height: 264px;
    border-radius: 50%;
    transform: rotate(12.5deg);
    background: radial-gradient(85% 0%, rgba(255, 255, 255, 1) 0%, rgba(184, 82, 81, 0.63) 99.95%);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(12px);

}
.ball-bottom {
  position: absolute;
  top: 3100px;
  left: -100px;
  width: 264px;
  height: 264px;
  border-radius: 50%;
  background: radial-gradient(85% 0%, rgba(255, 255, 255, 1) 0%, rgba(184, 82, 81, 0.63) 100%);
  box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
}
/* 顶部背景end */

/* 新闻中心主体start */
.nc-year-box {
    margin-top: 50px;
    margin-left: 50px;
    z-index: 200;
}

.nc-year {
    position: absolute;
    top: 950px;
    left: 150px;
    font-family: 'Alibaba Sans Black';
    font-size: 60px;
    color: rgba(117, 24, 22, 0.8);
}

.nc-list {
    display: block;
    margin: 0 50px;
    height: 1000px;
    .nc-content {
      margin-left: 40px;
    }

    .cover-img {
      display: flex !important; 
      width: 280px !important;
      background-color: azure;
    }
    .nc-date {
      text-shadow: 2px 2px 4px  rgba(0, 0, 0, 0.25);
      font-size: 36px;
      font-weight: 900;
      color: rgba(255, 255, 255, 1);
    }
    .nc-title {
      font-size: 30px;
      font-weight: 700;
      color: rgba(158, 35, 2, 1);
    }
    .nc-intro {
      font-size: 20px;
      color: rgba(158, 64, 38, 0.78);
    }
}
/////////
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
//  ////
.outer-el-card {
  box-shadow: none !important;
}
.el-card {
  border: 0 !important;
  background-color: transparent !important;
}
/* 新闻中心主体end */

</style>