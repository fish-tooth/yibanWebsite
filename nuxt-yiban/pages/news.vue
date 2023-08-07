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
                                      <a :href="item.link" target="_blank"  style="display: flex;">
                                        <img :src="item.coverImg" class="cover-img"/>
                                        <div class="nc-content">
                                          <h1 class="nc-date">{{ formatDate(item.date) }}</h1>
                                          <p class="nc-title">{{ item.title}}</p>
                                          <p class="nc-intro">{{ item.content.length<40? item.content : item.content.slice(0,41)+'...' }}</p>
                                        </div>
                                      </a>
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
                <!-- <Pagination
                    :total="3"
                    v-model:page="queryParams.pageNo"
                    v-model:limit="queryParams.pageSize"
                    @pagination=""
                /> -->
            </div>
            <div class="ball-bottom"></div>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layouts/default.vue";
import { ref, computed } from 'vue';
import { getNewsArticle } from "@/api";
import { formatDate } from '../utils/formatDate'

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
const newsYear = ref('2023');

const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  key: undefined,
  name: undefined,
  category: undefined
})

// 没有连接数据库可以用以下数据测试一下
const newsList = reactive([
    {
        id: 1,
        date: '2023-07-27',
        title: '打开西关大屋与静电的神奇“秘钥”', 
        content: '7月27日困难儿童陪伴计划-线下主题成长营以伴趣味科普课程《西关大屋》《生活中的静电》在南村西片社区开课啦！',
        coverImg: 'https://s1.ax1x.com/2023/08/06/pPA19TH.jpg',
        tag: 'course',
        isTop: 1,
        link: 'https://mp.weixin.qq.com/s/2uQ2FMBbg4jSKoupr8_Tgg'

    },
    {
        id: 2,
        date: '2023-07-21',
        title: '这个夏天，和我们一起生产“多巴胺”吧！', 
        content: '截止至2023年7月9日留守儿童云陪伴计划项目共收到来自8个地区 12个项目点累计452人的伴学需求',
        coverImg: 'https://s1.ax1x.com/2023/08/06/pPAlXSx.jpg',
        tag: 'course',
        isTop: 1,
        link: 'https://mp.weixin.qq.com/s/NoHWlG3obGhWDmSgElVmCw'
    },
    {
        id: 3,
        date: '2023-06-28',
        title: '交流学习|广州番禺职业技术学院师生到访以伴', 
        content: '2023年6月26日，在王雪莲老师的带领下',
        coverImg: 'https://s1.ax1x.com/2023/08/06/pPAlNFA.jpg',
        tag: 'course',
        isTop: 1,
        link: 'https://mp.weixin.qq.com/s/SEe4dQAH2g_RSn39tq75IA'
    }
])

// const getNewsList = async () => {
//       const res = await getNewsArticle();
//       console.log('res.code:'+res.code);
//       if (res?.code == 200) {
//         newsList.value = res?.result; 
//         newsYear.value = newsList.value[0]?.date.slice(0,4) // 获取年份大标题
//         console.log(newsList.value)
//         // useHead({
//         //   title: newsList.value.title,
//         //   viewport:
//         //     "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
//         //   charset: "utf-8",
//         //   meta: [{ name: "description", content: newsList.value.desc }],
//         // });
//       }
//     };

//     watchEffect(() => {
//       getNewsList();
//     });

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
      width: 240px !important;
      height: 180px !important;
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

.mb-10px {
  min-height: 220px;
  line-height: 1.5;
}
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
/* element-plus 样式 */
.outer-el-card {
  box-shadow: none !important;
}
.el-card {
  overflow: hidden;
  border: 0 !important;
  background-color: transparent !important;
}
/* 新闻中心主体end */

</style>