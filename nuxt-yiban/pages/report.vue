<template>
    <Layout>
    <div>
        <!-- 顶部背景组件 -->
        <CommonTop :slogan="slogan" />
        <!-- 导航栏 -->
        <el-row justify="space-around" class="navs-row">
            <el-col :span="6" v-for="(item, index) in navsList" :key="index">
                <div class="grid-content">
                    {{item}}
                </div>
            </el-col>
        </el-row>
        <!-- 主体内容 -->
        <div class="main-content">
            <el-row  justify="space-between" >
                <el-col  :span="7" :lg="7" :md="7" :sm="11" :xl="11" :xs="24"
                        v-for="(item, index) in navsList" :key="index" class="report-item">
                    <div>
                        <img class="report-cover" src="@/assets/images/report_cover.png"/>
                    </div>
                    <p class="report-title">2022以伴年度报告</p>
                    <a href="#" class="link-button">点击查看</a>
                </el-col>
            </el-row>
        </div>
    </div>
    </Layout>
</template>
  
<script setup lang="ts">
import Layout from "@/layouts/default.vue";

const slogan = reactive(['信息公开'])

const navsList = reactive(['审计报告','年度报告','商标合作'])

</script>
  
<style lang="scss" scoped>

.navs-row {
    padding: 70px 80px !important;
    height: 227px;
    border-bottom: 2px solid rgba(227, 60, 100, 0.34);;
}
.navs-row:last-child {
    margin-left: 0;
}

.grid-content {
  width: 300px;
  height: 87px;
  font-family: 'AlibabaPuHuiTi';
  font-size: 36px;
//   font-weight: 700;
  line-height: 87px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  background-color: rgb(238, 104, 104);
  box-shadow: 0px 6px 8px  rgba(0, 0, 0, 0.25)
}
/** 主体内容 */
.main-content {
    margin: 0 40px;
    margin-top: 72px;
    margin-bottom: 150px;
    padding: 30px;
    height: auto;
    justify-content: space-between;
    background-color: rgba(255, 189, 189, 0.8);
}
.report-item {
    text-align: center;
}
.report-cover {
    width: 338px;
    height: 409px;
}
.report-title {
    margin: 20px auto 10px;
    font-family: 'AlibabaPuHuiTi';
    font-size: 30px;
    line-height: 50px;
    color: rgba(255, 255, 255, 1);
}
.link-button {
    display: inline-block;
    width: 250px;
    height: 50px;   
    border-radius: 20px;
    font-family: 'AlibabaPuHuiTi';
    font-size: 28px;
    line-height: 50px;
    text-align: center;
    color: rgba(224, 110, 112, 1);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.25);
    -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
	transition: all 250ms cubic-bezier(.02, .01, .47, 1);
}
.link-button:hover {
    box-shadow: 0px 3px 5px  rgba(0, 0, 0, 0.25);
    transform: translate(0,-4px);
}
</style>