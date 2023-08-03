<template>
    <Layout>
        <div>
            <!-- 顶部背景 -->
            <Support :titleCh="titleCh" :titleEn="titleEn"/>
            <CommonTitle :comTitleCh="'小程序介绍'" :comTitleEn="'MINIPROGRAM INTRODUCE'"/>
            <div class="step-intro">
                
            </div>
            <div class="register-information">
                <CommonTitle :comTitleCh="'志愿者注册登记操作说明'" :comTitleEn="'REGISTER INFORMATION'"/>
                <div style="height: 400px;"></div>
                <img class="join-img" src="@/assets/images/join.png" alt="">
            </div>
        </div>
    </Layout>
</template>

<script lang="ts" setup>
import Layout from "@/layouts/default.vue";

const titleCh = '志愿者招募'
const titleEn = reactive(['Volunteer','Recruit'])
</script>


<style scoped>

/** 小程序操作介绍 */
.step-intro {
    width: 100%;
    height: 1100px;
    background: linear-gradient(204deg, rgba(255, 216, 214, 1) 0%, rgba(254, 215, 214, 0.01) 100%);
}

/** 志愿者注册登记操作说明 */
.register-information {
    width: 100%;
    height: 1400px;
    text-align: center;
    background: linear-gradient(180deg, rgba(254, 250, 227, 0) 0%, rgba(255, 251, 227, 1) 100%);
}

/** 加入我们图片 */
.join-img {
    display: inline;
    width: 547px;
    height: 520px;
}
</style>