<template>
  <Layout>
    <div>
      <!-- 顶部背景 -->
      <div class="top-box">
        <div class="left-cube"></div>
        <div class="right-cube">

          <div class="intro">
            <p>覆盖学生10000+</p>
            <p>媒体报道500余次</p><br />
            <p>线上线下教学结合</p>
            <p>帮助学生考上理想大学</p><br />
            <p>与校企政组形成良好合作</p>
            <p>共同营造良好的公益教育生态</p>
          </div>
          <div style="float: right; margin-top: 34px; margin-right: 88px;">
            <div class="course"><a href="#" class="courseTo">精品课堂 &gt;</a></div>
            <div class="lecture"><a href="#" class="lectureTo">学霸讲座 &gt;</a></div>
          </div>
        </div>
        <img src="https://img.js.design/assets/img/6380d03ba34f1378224817e9.png#0146474d33854765a8ea9969abccb7ac"
          alt="伴学案例" class="pre-photo">
        <p class="activity-case-title">伴学案例</p>
      </div>
      <!-- 伴学案例 -->
      <div class="mid-box">
        <div class="left-box">
          <p class="title">以伴教育专项1</p>
          <p class="text">
            Let a rose by any other name would smell as sweet. 让玫瑰不叫玫瑰，依旧芳香如故。
            功以才成，业由才广。党的二十大报告提出“实施科教兴国战略，强化现代化建设人才支撑”，对深入实施科教兴国战略、
            人才强国战略、创新驱动发展战略进行系统集成，强化立体协同，作出统筹部署。这是我们党着眼全球化新变局、坚持
            系统化新观念、聚焦现代化新内涵所作出的科学擘画，必将为以中国式现代化全面推进中华民族伟大复兴提供更雄厚人才
            基础和更强大战略支撑。
          </p>
          <div class="more">
            <div class="more-to">
              <a href="#" style="text-decoration: none; color: black">查看更多 &gt;</a>
            </div>
          </div>
        </div>
        <video class="video"
          poster="https://img.js.design/assets/img/63841db370139645b61f7887.png#68c43d6f1a06b5512316ea25cbdc98d5"
          @mouseenter="" @mouseleave="">
          <!-- 添加视频 -->
          <div class="nameBg">
            <div class="projectName">“以爱之名，伴你成长”青少年关爱帮扶活动</div>
          </div>
        </video>
      </div>
      <!-- 数据展示 -->
      <div class="dataShow">
        <div class="data1" v-for="(item,index) in showData" :key="index">
          <div class="dataNum1">
            <!-- <span style="border-bottom: 2px solid rgba(173, 106, 106, 1)">4</span> -->
            <CountTo
                  class="num"
                  :start-val="0"
                  :end-val="item.num"
                  :duration="2000"
            />
          </div>
          <div class="dataTitle1">{{ item.title }}</div>
        </div>
        <!-- <div class="data2">
          <div class="dataNum2">
            <span style="border-bottom: 2px solid rgba(173, 106, 106, 1)">5100</span>
          </div>
          <div class="dataTitle2">志愿者人数</div>
        </div>
        <div class="data3">
          <div class="dataNum3">
            <span style="border-bottom: 2px solid rgba(173, 106, 106, 1)">3124</span>
          </div>
          <div class="dataTitle3">服务学生数</div>
        </div>
        <div class="data4">
          <div class="dataNum4">
            <span style="border-bottom: 2px solid rgba(173, 106, 106, 1)">2140</span>
          </div>
          <div class="dataTitle4">课堂总量</div>
        </div> -->
      </div>
      <!-- 经典案例 -->
      <div class="botm-box">
        <div class="case-title">
          <p>经典案例</p>
          <p class="split" style="font-size: 60px">|</p>
          <p style="padding-top: 7px;">CASE</p>
        </div>
        <div class="cases">
          <!-- 插入链接 -->
          <div class="case1">
            <img class="case-photo1"
              src="https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3" />
            <div class="case-intro1">
              <div class="case-name">案例名称</div>
            </div>
          </div>
          <div class="case2">
            <img class="case-photo1"
              src="https://img.js.design/assets/img/63842fc24d2016ae96de6951.png#a6838d3bb6640227f8a416599f350ca3" />
            <div class="case-intro2">
              <div class="case-name">案例名称</div>
            </div>
          </div>
        </div>
        <div class="turn">
          <a href="#">
            <div class="last"><img src="../../public/last1.svg" alt="" /></div>
          </a>
          <a href="#">
            <div class="next"><img src="../../public/next1.svg" alt="" /></div>
          </a>
        </div>
      </div>
      <!-- 志愿者分享 -->
      <div class="blog-box">
        <div class="blog-title">
          <div class="blog-img"></div>
          <div style="display: flex;">
            <div class="ch">志愿分享</div>
            <div class="split" style="margin-top: 73px; font-size: 60px">|</div>
            <div class="en">BLOG</div>
          </div>
          <!-- <span class="blogText">BLOG</span> -->
        </div>
        <div class="swiperBox">
          <Swiper />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layouts/default.vue";

const showData = reactive([
  {
    num: 4,
    title: '项目总数'
  },
  {
    num: 5000,
    title: '志愿者人数'
  },
  {
    num: 60000,
    title: '服务学生数'
  },
  {
    num: 2140,
    title: '课堂总量'
  }

])


</script>

<style lang="scss" scoped>
//绝对定位
%pos {
  position: absolute;
  z-index: 2;
}

// 顶部背景右方块高度
$rightCubeHeight: 857px;

.top-box {
  display: flex;
  width: 100%;
  height: 990px;
  align-items: center;
  clear: both;
}


.left-cube {
  position: absolute;
  left: 5%;
  top: 103px;
  z-index: 2;
  width: 546px;
  height: 525px;
  background: linear-gradient(-50deg, rgba(237, 157, 157, 1) 70%, rgba(224, 184, 184, 0.01) 100%);
  box-shadow: 10px 25px 8px 15px rgb(0 0 0 / 25%);

}

.right-cube {
  position: absolute;
  left: 40%;
  top: 133px;
  z-index: 1;
  width: 56%;
  height: $rightCubeHeight;
  background: rgba(223, 114, 113, 1);
  box-shadow: 0px 4px 4px 10px rgba(0, 0, 0, 0.25);
}

.pre-photo {
  position: absolute;
  left: 3%;
  top: 90%;
  width: 539px;
  height: 357px;
  z-index: 3;
}

.activity-case-title {
  // left: 35%;
  position: absolute;
  top: 412px;
  left: 460px;
  font-family: 'Alibaba Sans Black';
  font-size: 80px;
  color: rgba(255, 255, 255, 1);
  z-index: 3;
}

//简介文本样式
.intro {
  margin-top: 433px;
  margin-right: 80px;
  font-size: 22px;
  color: rgba(255, 255, 255, 1);
  text-align: right;
}


//【精品课堂 学霸讲座】字体样式
%font2 {
  font-size: 24px;
  font-weight: 400;
  line-height: 66px;
  color: rgba(255, 255, 255, 1);
}

.course {
  width: 207px;
  height: 65px;
  border: 2px solid rgba(255, 255, 255, 1);
  text-align: center;
}

.lecture {
  width: 207px;
  height: 65px;
  border: 2px solid rgba(255, 255, 255, 1);
  border-top: 0px;
  text-align: center;
}

.courseTo,
.lectureTo {
  text-decoration: none;
  @extend %font2;
}

.mid-box {
  display: flex;
  margin-top: 150px;
  width: 100%;
  // height: 1100px;

}

@media screen and (max-width: 1200px) {

  .mid-box {
    margin-top: 350px;
  }
}

.left-box {
  margin-left: 63px;
  width: 572px;
  // background-color: pink;

  .title {
    margin-left: 7px;
    margin-top: 150px;
    height: 100px;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
    text-align: left;
  }

  .text {
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 300;
    color: rgba(0, 0, 0, 1);
    text-align: justify;
  }

  .more {
    margin: 70px 0 100px;
    width: 230px;
    height: 64px;
    background: rgba(209, 146, 146, 0.56);
  }
}

.projectIntro {
  // left: 70px;
  // left: 20%;
  top: 1141px;
  width: 465px;
  height: 589.25px;
  opacity: 1;
}







.more-to {
  display: inline-block;
  margin-left: 46px;
  height: 64px;
  opacity: 1;
  /** 文本1 */
  font-size: 24px;
  font-weight: 300;
  line-height: 64px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}

.icon1 {
  display: inline-block;
  // left: 140px;
  width: 64px;
  height: 64px;
  line-height: 64px;
  background: url(../../public/arrow.png) no-repeat;
  background-position: center;
  background-size: 60%;
}

.video {
  margin-top: 42px;
  margin-left: 48px;
  width: 732px;
  height: 549px;
  border-radius: 13px;
}

.nameBg {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 60px;
  opacity: 0.6;
  background-color: rgb(98, 98, 98);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
}

.projectName {
  left: 40px;
  opacity: 1;
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  // letter-spacing: 0px;
  line-height: 60px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
  position: absolute;
}

.dataShow {
  display: flex;
  // position: absolute;
  // bottom: 0px;
  width: 100%;
  height: 171px;
  margin: 0 auto;
  opacity: 1;
  background: linear-gradient(180deg,
      rgba(223, 114, 113, 0) 0%,
      rgba(222, 115, 113, 0.08) 28.57%,
      rgba(222, 115, 113, 0.15) 84.45%);
  align-items: center;
}

%num {
  display: flex;
  justify-content: center;
  // width: 40px;
  height: 72px;
  opacity: 1;
  /** 文本1 */
  font-size: 60px;
  font-weight: 400;
  line-height: 72px;
  color: rgba(0, 0, 0, 1);
}

.dataNum1,
.dataNum2,
.dataNum3,
.dataNum4 {
  @extend %num;
}

%dataTitle {
  display: flex;
  justify-content: center;
  top: 60%;
  // width: 125px;
  height: 44px;
  opacity: 1;
  /** 文本1 */
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 44px;
  color: rgba(0, 0, 0, 1);
}

.dataTitle1,
.dataTitle2,
.dataTitle3,
.dataTitle4 {
  @extend %dataTitle;
}

.data1 {
  width: 25%;
  height: 171px;
  line-height: 171px;
}

.data2 {
  position: relative;
  width: 25%;
  height: 171px;
  line-height: 171px;
}

.data3 {
  position: relative;
  width: 25%;
  height: 171px;
  line-height: 171px;
}

.data4 {
  position: relative;
  width: 25%;
  height: 171px;
  line-height: 171px;
}

.botm-box {
  margin: 100px auto;
  width: 100%;
}

.case-title {
  height: 75px;
  display: flex;
  font-size: 48px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  justify-content: center;
}

.cases {
  display: flex;
  flex-wrap: nowrap;
  padding-top: 60px;
  justify-content: center;
  vertical-align: middle;
  // height: 501px;
  // background-color: rgb(118, 144, 166);
}

%case {
  margin: 0 auto;
  width: 628px;
  height: 501px;
}

.case1 {
  @extend %case;
}

.case-photo1,
.case-photo2 {
  width: 628px;
  height: 419px;
  border-radius: 13px;
}

.case-intro1 {
  width: 618px;
  height: 84px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
}

.case-name {
  line-height: 84px;
  font-size: 24px;
  text-align: center;
  vertical-align: top;
}

.case2 {
  @extend %case;
}


.case-intro2 {
  width: 618px;
  height: 84px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.25);
}

.turn {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  margin-top: 40px;

  .last {
    width: 97px;
    height: 54px;
    opacity: 1;
    border: 1px solid rgba(237, 157, 157, 1);
    text-align: center;
  }

  .next {
    width: 97px;
    height: 54px;
    opacity: 1;
    background: rgba(223, 114, 113, 0.8);
    border: 1px solid rgba(237, 157, 157, 1);
    text-align: center;
  }

}


//志愿分享blog
.blog-box {
  width: 100%;
  height: 1024px;
  background: rgba(223, 114, 113, 0.15);
}

.blog-title {
  width: 100%;
  height: 272px;
  display: flex;

  .ch,
  .en {
    display: inline-block;
    margin-top: 70px;
    height: 73px;
    font-size: 48px;
    font-weight: 500;
    line-height: 73px;
    color: rgba(0, 0, 0, 1);
  }
}

.blog-img {
  display: inline-block;
  margin: 0 20px;
  margin-top: 50px;
  width: 140px;
  height: 140px;
  background: url(@/assets/images/flower.png) no-repeat;
  background-blend-mode: multiply;
  background-size: 100%;
}




.swiperBox {
  margin: 0 auto;
  // width: 1336px;
  // height: 300px;
  // background-color: blue;
}

// 1200px
@media screen and (max-width: 1200px) {
  .left-cube {
    top: 170px;
    height: 775px;
  }

  .right-cube {
    top: 190px;
    height: 918px;
  }

  .pre-photo {
    // left: 15px;
    left: 2%;
    top: 120%;
    width: 400px;
    // width: 40%;
    height: 300px;
  }
}

// 992px
@media screen and (max-width: 992px) {
  .left-cube {
    top: 170px;
    height: 675px;
  }

  .right-cube {
    top: 190px;
    height: 718px;
  }

  .intro,
  .courseTo,
  .lectureTo {
    font-size: 18px;
  }

  .pre-photo {
    left: 4%;
    top: 650px;
    width: 350px;
    height: 240px;
  }

  .activity-case-title {
    top: 380px;
    left: 30%;
    font-size: 60px;
  }

  .mid-box {
    margin-top: 250px;
  }

  .left-box {
    margin-top: 3%;
    margin-left: 5%;
    width: 33%;
    height: auto;

    .title {
      font-size: 30px;
    }

    .text {
      font-size: 18px;
    }

    .more {
      width: 200px;
      height: 51px;
    }

    .more-to {
      height: 51px;
      line-height: 51px;
    }
  }


  .icon1 {
    width: 30px;
    height: 30px;
    margin-top: 4px;
  }

  .video {
    margin-top: 170px;
    width: 51%;
    height: 65%;
  }

  .dataShow {
    height: 93px;
  }

  %num {
    font-size: 36px;
  }

  %dataTitle {
    font-size: 20px;
  }

  .case-title {
    flex-wrap: wrap;
    margin: 0 auto;
    width: 198px;
    height: auto;
    justify-content: center;
  }


  .split {
    display: none;
  }

  .cases {
    margin: 0 auto;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;


  }

  %case {
    // width: 635px;
    width: 80%;
    height: 517px;
  }

  .case-photo1,
  .case-photo2 {
    // width: 635px;
    width: 100%;
    height: 432px;
  }

  .case-intro1,
  .case-intro2 {
    width: 100%;
  }

  .turn {

    .last,
    .next {
      width: 97px;
      height: 54px;
    }
  }




  .blog-title {
    font-size: 40px;
    height: auto;
  }

  .blog-img {
    margin-top: 18px;
  }


  .blog-box {
    margin-top: 20%;
    height: auto;
  }

  .ch {
    margin-top: 10%;
    font-size: 38px;
    border-right: 4px solid #000;

  }

  .en {
    margin-top: 10%;
    font-size: 38px;
  }
}

// 768px
@media screen and (max-width: 768px) {
  .pre-photo {
    top: 110%;
    width: 280px;
    height: 200px;
  }

  .mid-box {
    margin-top: 430px;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }

  .left-box {
    width: 90%;
    margin: 0 auto;

    .text {
      font-size: 22px;
    }
  }



  .video {
    margin: 0 auto;
    margin-bottom: 50px;
    width: 80%;
    height: 608px;
  }

  .cases {
    margin: 0 auto;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }

  %case {
    // width: 635px;
    width: 80%;
    height: 517px;
  }

  .case2 {
    margin-top: 14px;
    margin-top: 10;
  }

  .case-photo1,
  .case-photo2 {
    // width: 635px;
    width: 100%;
    height: 432px;
  }

  .case-intro1,
  .case-intro2 {
    width: 100%;
  }

  .blog-box {
    margin-top: 20%;
    height: auto;

    .ch,
    .en {

      font-size: 33px;
    }

    .ch {
      border-right: 4px solid #000;
    }
  }




}
</style>
