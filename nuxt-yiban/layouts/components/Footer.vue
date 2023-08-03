<!-- <template>
  <div class="footer">
    <div class="title">
      <img class="logo"
        src="https://img.js.design/assets/img/636513ba0b26ac3f6170fccb.png#078ed25b566af1b2b66771bf68cb21de"
        alt="图片加载失败" />
      <div class="name">以伴青少年<br />发展中心</div>
    </div>
    <div class="right-info">
      <img class="license"
        src="https://img.js.design/assets/img/6378c723234a79bb072f82fb.png#07d825d97c552a8344f21e56c2de69cb"
        alt="图片加载失败" />
    </div>

    <div class="more">
      <div class="moreTitle">更多页面</div>
      <div class="footAbout">关于我们</div>
      <div class="footRecruit">人才招聘</div>
      <div class="footNews">新闻中心</div>
      <div class="footContact">联系我们</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$family1: 阿里妈妈数黑体;
$family3: 思源黑体;

@mixin size-position($width: auto, $height: auto, $left: auto, $top: auto) {
  width: $width;
  height: $height;
  left: $left;
  top: $top;
  position: absolute;
}

%align-top {
  text-align: left;
  vertical-align: top;
}

%align-mid {
  text-align: left;
  vertical-align: middle;
}

.logo {
  @include size-position(40px, 40px, 37px, 48px);
}

.name {
  @include size-position(90px, 44px, 85px, 44px);
  font: 400 18px/22px $family1 ;
  @extend %align-top;
  // text-align: left;
  // vertical-align: top;
  color: rgba(255, 255, 255, 1);
}

.footer {
  // @include size-position(1440px, 137px, 0,3555px );
  @include size-position(1440px, 137px, 0, 3555px);
  background: rgba(47, 46, 52, 1);
}

.license {
  @include size-position(407px, 85px, 217px, 24px);
}

.more {
  @include size-position(168px, 64px, 683px, 35px);
}

.moreTitle {
  @include size-position(80px, 21px, 0, 0);
  font: 500 14px/21px $family3;
  color: rgba(255, 255, 255, 1);
  @extend %align-mid;
  // text-align: left;
  // vertical-align: middle;
}

%footList {
  width: 80px;
  height: 18px;
  font: 400 12px/18px $family3;
  color: rgba(179, 179, 179, 1);
  @extend %align-mid;
  // text-align: left;
  // vertical-align: middle;
  position: absolute;
}

.footAbout {
  @extend %footList;
  top: 27px;
  left: 0;
}

.footRecruit {
  @extend %footList;
  top: 27px;
  left: 88px;
}

.footNews {
  @extend %footList;
  top: 45px;
  left: 0;
}

.footContact {
  @extend %footList;
  top: 45px;
  left: 88px;
}

@media screen and (max-width: 768px) {}
</style> -->

<template>
  <div class="footer">
    <div class="title">
      <img class="logo"
        src="https://img.js.design/assets/img/636513ba0b26ac3f6170fccb.png#078ed25b566af1b2b66771bf68cb21de"
        alt="图片加载失败" />
      <div class="name">以伴青少年<br />发展中心</div>
    </div>
    <div class="right-info">
      <img class="license"
        src="https://img.js.design/assets/img/6378c723234a79bb072f82fb.png#07d825d97c552a8344f21e56c2de69cb"
        alt="图片加载失败" />
    </div>

    <div class="more">
      <div class="more-text">更多页面</div>
      <ul class="pages">
        <li class="page-item">关于我们</li>
        <li class="page-item">人才招聘</li>
        <li class="page-item">新闻中心</li>
        <li class="page-item">联系我们</li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
%common-flex {
  display: flex;
  align-items: center;
}

.footer {
  @extend %common-flex;
  width: 100%;
  // padding: 1em 0;
  margin: 0 auto;
  width: 100%;
  height: 137px;
  font-size: 0.9em;
  text-align: center;

  background-color: rgba(47, 46, 52, 1);
}

.title {
  @extend %common-flex;
  margin-left: 37px;
  min-width: 90px;
  height: 100%;

  .logo {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }

  .name {
    margin-left: 10px;

    font-family: 阿里妈妈数黑体;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
}

.right-info {
  margin-left: 47px;

  img {
    width: 407px;
    height: 85px;
  }
}

.more {
  margin-left: 60px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
}

ul {
  display: flex;
  margin-top: 10px;

  li {
    width: 100px;
    height: 18px;
    justify-content: space-around;
    list-style: none;
    color: rgba(179, 179, 179, 1);

  }
}

@media screen and (max-width: 768px) {

  .footer {
    height: 137px;
  }

  .logo {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
  }

  .name {
    margin-left: 5px;
    font-size: 18px;
  }

  .right-info {
    margin-left: 20px;

    img {
      width: 300px;
      height: 64px;
    }
  }
}
</style>