<template>
    <Layout>
    <div>
        <!-- 顶部背景 -->
        <div class="top-box"></div>
        <!-- 导航栏 -->
        <div class="tabbar">
            <li v-for="(list, index) in  tabbar " :key="index" @click="active = list.id" :class="['tab-item', list.id === active ? 'tab-active' : '']">
                <NuxtLink>
                    {{ list.name }}
                </NuxtLink>
                <li class="border"></li>
            </li>
        </div>
        <!-- 项目展示列表 -->
        <div class="program-list">
            <div class="program-title">
                <p>困难儿童陪伴计划</p>
                <a href="#" class="more-program">查看更多 >
                    <!-- <el-icon><ElIconArrowRight style="width: 30px; height: 30px;"/></el-icon> -->
                </a>
            </div>
            
            <div>
                <div class="program-content">
               
                    <div class="program-block" v-loading="loading" v-for="(item, index) in videosList" :key="index">
                        <NuxtLink>
                            <img class="program-cover-img" src="@/assets/images/demo_program.jpg"/>
                            <div style="padding: 30px;">
                                <p class="item-title">{{ item.title }}</p>
                                <p class="item-intro">{{ item.intro }} </p>
                            </div>
                        </NuxtLink>
                    </div>
                        
                  
                </div>
            </div>
        </div>
        <!-- 分页按钮 -->
        <!-- <el-pagination small layout="prev, pager, next" :total="50" /> -->
        <!-- <div class="pagination-box">
            <el-pagination
                
                background
                layout="prev, pager, next"
                :total="20"
                class="mt-4"
            />
        </div> -->
        <!-- <Pagination
            :total="2"
            v-model:page="queryParams.pageNo"
            v-model:limit="queryParams.pageSize"
            @pagination="getList"
        /> -->

        <!-- 二维码 -->
        <div class="donate">
            <img src="@/assets/images/demo.png" alt="">
            <div class="code-bg">
                <img src="@/assets/images/QRcode_donate.png" alt="">
                <div class="call-on-words">
                    <p class="co-title">扫描二维码，参与月捐</p>
                    <p class="co-text">一元，为留守儿童送去爱与希望</p>
                </div>
                
            </div>
        </div>
    </div>
    </Layout>
</template>
  
<script setup lang="ts">
import Layout from "@/layouts/default.vue";
import Component from "vue-class-component";
// import * as ModelApi from '@/api/bpm/model'
components: [ ElIconArrowRight]
useHead({
    title: "公益视频",
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
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  key: undefined,
  name: undefined,
  category: undefined
})
const loading = ref(true) // 列表加载中



/** 查询列表 */
const getList =  () => {
// const getList = async () => {
//   loading.value = true
//   const { data: videos, pending, error } = await useFetch('@/api/videos')
// //   try {
// //     const videosList = await ModelApi.getModelPage(queryParams)
// //     list.value = data.list
// //     total.value = data.total
// //   } finally {
// //     loading.value = false
// //   }
//   loading.value = false
}
const tabbar = reactive([
    {
        id: 0,
        name: '项目推广'
    },
    {
        id: 1,
        name: '创始人采访'
    },
    {
        id: 2,
        name: '自研课程'
    }
]);

const videosList = reactive([
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

const active = ref(0);
const url =
  '@/assets/images/demo_program.jpg'
</script>
  
<style lang="scss" scoped>
body {
    font-family: 'Alibaba Sans Black';
}
/* 顶部背景 */
.top-box {
    width: 100%;
    height: 900px;
    background: url(@/assets/images/demo_bg.png) no-repeat;
    background-size: cover;
}
/* 导航栏 */

.tabbar {
    display: flex;
    padding-left: 78px;
    width: 100%;
    height: 95px;
    border: 1px solid rgba(224, 224, 224, 1);
    user-select: none;
}

.tab-item {
    list-style-type: none;
    // padding: 40px;
    width: 180px;
    height: 100%;
    line-height: 90px;
    font-size: 24px;
    text-align: center;
    a {
        display: inline-block;
        text-align: center;
    }
        
}
.tab-active {
    .border {
        margin: 0 10%;
        height: 4px;
        background-color: rgba(222, 114, 111, 1);
        animation-duration: 0.3s;
        animation-timing-function: ease;
        animation-name: slide;
        transition: left ease-out 0.3s;
    }
    @keyframes slide {
    from {
        transform: translateX(7%);
    }
    to {
        transform: translateX(0%);
    }
}
}
/* 项目展示列表 */
.program-list {
    margin: 100px 78px;
    height: auto;
    // background-color: antiquewhite;
   
}
.program-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-size: 40px;
    }    
    div {
        font-size: 24px;
    }
}
.more-program {
    display: inline-block;
    font-size: 24px;
}  
// .el-row {
//   display: flex !important;
//   margin-bottom: 20px !important;
// }
// .el-row:last-child {
//   margin-bottom: 0;
// }
// .el-col {
//   display: flex !important;
//   margin-top: 40px !important;
  
// }

// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
// }

// .el-card, .el-card__body {
//     display: flex !important;
//     padding: 0 !important;
//     width: 100% !important;
//     height: auto !important;
//     min-height: 433px !important;
//     background-color: rgba(238, 106, 107, 1) !important;
// }
/** 项目图片 */
.program-content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 70px;
    width: 100%;
    height: auto;
    min-height: 469px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }
  .program-block {
    overflow: hidden;
    flex: 1;
    position: relative;
    margin-left: 4%;
    min-height: 469px;
    background: rgba(238, 106, 107, 1);

  }
.program-block {
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 70px;
//   margin-bottom: 20px;
//   width: 100%;
//   color: rgba(255, 255, 255, 1);
//   box-sizing: border-box;
//   font-size: 18px;
//   text-align: center;
  .program-cover-img {
    width: 359px;
    height: 189px;

  }
  .item-title {
    padding-top: 30px;
    font-size: 22px;
  }
  .item-intro {
    margin-top: 15px;
  }
}

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

    // --el-pagination-font-size: 14px;
    // --el-pagination-bg-color: var(--el-fill-color-blank);
    // --el-pagination-text-color: var(--el-text-color-primary);
    // --el-pagination-border-radius: 2px;
    // --el-pagination-button-color: var(--el-text-color-primary);
    // --el-pagination-button-width: 32px;
    // --el-pagination-button-height: 32px;
    // --el-pagination-button-disabled-color: var(--el-text-color-placeholder);
    // --el-pagination-button-disabled-bg-color: var(--el-fill-color-blank);
    // --el-pagination-button-bg-color: var(--el-fill-color);
    /* --el-pagination-hover-color: var(--el-color-primary); */
    // --el-pagination-font-size-small: 12px;
    // --el-pagination-button-width-small: 24px;
    // --el-pagination-button-height-small: 24px;
    // --el-pagination-item-gap: 16px;
 
    align-items: center;
    justify-content: center; 
}
// .el-pagination.is-background .el-pager li:not(.disabled).active {
//         background-color: #67c23a;
//         color: #FFF !important;
//     }
//     .el-pager li:hover {
//         color: #67c23a !important;
//     }
:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
  background-color: rgba(238, 106, 107, 1) !important; //修改默认的背景色
  --el-pagination-button-width: 50px;
}

/** 二维码 */
.donate {
    display: flex;
    margin-bottom: 0;
    width: 100%;
    height: 180px;
    img {
        flex: 1;
    }
    .code-bg {
        flex: 1;
        display: flex;
        color: #ffffff;
        background-color: rgba(238, 106, 107, 1);
        img {
            flex: 0;
            margin: 49px 20px 49px 94px;
            width: 110px;
            height: 110px;
            
        }
        .call-on-words {
            margin: 61px 0;
        }
        .co-title {
            font-size: 24px;
        }
        .co-text {
            margin-top: 20px;
            font-size: 16px;
        }
    }
}


</style>