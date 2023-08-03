<template>
    <Layout>
        <div>
            <div class="common-layout">
                <el-container>
                    <el-header>
                        <img class="header-img" src="@/assets/images/demo_join.jpg" alt="">
                        <div class="join-card"></div>
                        <p class="join-text-ch">加入以伴</p>
                        <p class="join-text-en">JOIN US</p>
                    </el-header>
                    <el-main>
                        <el-row v-for="(item, index) in department" :key="item.id" :class="item.style"> 
                            <el-card :class="item.style">
                                <p class="department-name">{{ item.name }}</p>
                                <div class="detail">
                                    <p class="department-num">人数：{{ item.num }}</p>
                                    <p class="department-location">工作地点：{{ item.location }}</p>
                                    <p class="department-duties">工作职责：{{ item.duties }}</p>
                                </div>
                                <el-icon></el-icon>
                            </el-card>
                        </el-row>
                    </el-main>
                </el-container>
            </div>
        </div>
    </Layout>
</template>


<script lang="ts" setup>
import Layout from "@/layouts/default.vue";
const department = reactive([
    {
        id: 1,
        name: '课程研发中心',
        num: 20,
        location: '线上',
        duties: '对录课有足够的热忱，好奇心强，有强烈意愿丰富自己对于录课相关领域的知识储备。',
        style: 'card-style1'
    },
    {
        id: 2,
        name: '课程研发中心',
        num: 20,
        location: '线上',
        duties: '对录课有足够的热忱，好奇心强，有强烈意愿丰富自己对于录课相关领域的知识储备。',
        style: 'card-style2'
    },
    {
        id: 3,
        name: '课程研发中心',
        num: 20,
        location: '线上',
        duties: '对录课有足够的热忱，好奇心强，有强烈意愿丰富自己对于录课相关领域的知识储备。',
        style: 'card-style3'
    }
])


</script>

<style lang="scss" scoped>

/** 顶部背景 */
.el-header {
    margin: 0 auto;
    padding: 50px 0 0;
    height: auto;
    border-bottom: 1px dotted rgba(204, 204, 204, 1);
}
.header-img {
    margin-top: 64px;
    width: 1000px;
    height: auto;
    opacity: 0.6;
}
.join-card {
    position: absolute;
    left: 750px;
    top: 300px;
    width: 533px;
    height: 310px;
    opacity: 1;
    border-radius: 13px;
    background: rgba(245, 169, 142, 0.78);
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
}
.join-text-ch {
    position: absolute;
    left: 860px;
    top: 350px;
    font-family: 'Alibaba Sans Black';
    font-size: 100px;
}
.join-text-en {
    position: absolute;
    left: 980px;
    top: 470px;
    color: rgba(97, 50, 50, 0.92);
    font-family: 'Alibaba Sans Black';
    font-size: 60px;
}
/** 招募主体内容 */
.el-main {
    margin: 0 auto;
    margin-bottom: 100px;
    height: auto;
}
.el-row {
    margin-top: 95px;
    
}
.el-card {
    padding: 20px !important;
    width: 1100px;
    height: auto;
    min-height: 300px;
}
.card-style1 {
    background-color: rgba(217, 126, 126, 1);
}
.card-style2 {
    background-color: rgba(130, 109, 109, 0.75);
}
.card-style3 {
    background-color:  rgba(237, 146, 126, 0.74);
}
.card-style4 {
    background-color:  rgba(237, 194, 126, 0.74);
}
.card-style5 {
    background-color:  rgba(227, 114, 34, 0.42);
}
/** 招募详情样式 */
.department-name {
    font-family: 'Alibaba Sans Black';
    font-size: 36px;
    text-align: left;
}
.detail {
    margin-top: 40px;
    font-family: sans-serif;
    font-size: 24px;
    p {
        margin-top: 15px;
    }
}
</style>