<template>
    <div class="header hidden-sm-and-down">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect">
            <div class="title">
                <img class="logo" src="@/public/favico.ico" alt="logo" />
                <div class="name">以伴青少年<br />发展中心</div>
            </div>
 
            <div class="flex-grow" />
            <div v-for="(list, index) in menu">
                <el-sub-menu v-if="list.children" :key="list.index" :index="list.index+''"> 
                <template #title>{{ list.name }}</template>
                    <el-menu-item v-for="child in list.children" :key="child.index">
                        <NuxtLink  :to="child.url">
                                {{ child.name }}
                        </NuxtLink>
                    </el-menu-item>
                </el-sub-menu>

                <el-menu-item v-else :key="list.url">
                    <NuxtLink :to="list.url">
                    {{ list.name }}
                    </NuxtLink>
                </el-menu-item>
            </div>  
        </el-menu>
        </div>

<div class="header hidden-md-and-up">
    <div class="title">
        <img class="logo" src="@/assets/images/logo.png" alt="logo" />
        <div class="name">以伴青少年<br />发展中心</div>
    </div>
    <button @click="isShow = !isShow">
        <img class="nav-select" src="@/assets/images/nav_select.svg" />
    </button>
</div>
    <el-row class="tac hidden-md-and-up">
        <el-col :span="24">
            <el-menu v-if="isShow"
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="vertical"
            :ellipsis="false"
            @select="handleSelect"
        >
            <div class="flex-grow" />
            <div v-for="(list, index) in menu">
                <el-sub-menu v-if="list.children" :key="list.index" :index="list.index+''"> 
                <template #title>{{ list.name }}</template>
                    <el-menu-item v-for="child in list.children" :key="child.index">
                        <nuxt-link  :to="child.url">
                                {{ child.name }}
                        </nuxt-link>
                    </el-menu-item>
                </el-sub-menu>

                <el-menu-item v-else :key="list.url">
                    <nuxt-link :to="list.url">
                    {{ list.name }}
                    </nuxt-link>
                </el-menu-item>
            </div>  
        </el-menu>
        </el-col>
    </el-row>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'element-plus/theme-chalk/display.css'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}


const menu = reactive([
    {
        index: 1,
        name: '首页',
        url: '/'
    },
    {
        index: 2,
        name: '关于我们',
        url: '/about'
    },
    {
        index: 3,
        name: '新闻资讯',
        url: '/news'
    },
    {
        index: 4,
        name: '公益项目',
        url: '/program'
    },
    {
        index: 5,
        name: '公益视频',
        url: '/videos'
    },
    {
        index: 6,
        name: '人员招募',
        children: [{
            index: 6-1,
            name: '加入以伴',
            url: '/recruit/join'
        },
        {
            index: 6-2,
            name: '志愿者招募',
            url: '/recruit/volunteer'
        }]
    },
    {
        index: 7,
        name: '支持我们',
        children: [{
            index: 7-1,
            name: '合作交流',
            url: '/support/cooperation'
        },
        {
            index: 7-2,
            name: '捐赠支持',
            url: '/support/donate'
        }]
    },
    {
        index: 8,
        name: '信息公开',
        url: '/report'
    }
]);

const isShow = ref(false);


</script>
    
<style lang="scss" scoped>
%common-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 导航栏高度 */
$indexHeight: 80px;
$indexItemHeight: 70px;

/* 二级选项高度 */
$subHeight: 70px;
$subItemHeight: 60px;

/* 鼠标悬停的颜色样式 */
$hoverColor: #ffe4e4;
$buttonColor: #f2f2f2;


.flex-grow {
  flex-grow: 1;
}
.el-menu-demo {
    width: 100%;
    align-items: center;
    border-bottom: none !important;
}
.el-menu-item {
    &:hover {
    //   border-bottom: 3px solid $hoverColor !important;
    //   color: $hoverColor !important;
      background-color: #fef1f1 !important;
    }
  }
.el-sub-menu {
    &:hover {
      background-color: rgb(253, 233, 233) !important;
    }
}


.el-sub-menu__title:focus, .el-sub-menu__title:hover{  
//   background-color: aqua !important;
    background-color: rgb(253, 233, 233) !important;
}
.tac {
    // float: right;
    position: fixed;
    top: 80px;
    right: 0;
    z-index: 100;
}

li {
    list-style: none;
}

.header {
    @extend %common-flex;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;

    box-sizing: border-box;
    padding: 0 20px;
    width: 100%;
    min-height: 80px;
    justify-content: space-between;

    color: black;
    background-color: rgba(255, 255, 255, 90%);
    user-select: none;
}

.header {
    @extend %common-flex;

    .title {
        @extend %common-flex;

        .logo {
            flex-shrink: 0;
            width: 40px;
            height: 40px;
        }

        .name {
            margin-left: 10px;

            font-family: sans-serif;
            font-size: 18px;
            font-weight: 400;
            text-align: left;
        }
    }

    .index {
        @extend %common-flex;
        min-height: $indexHeight;

        .index-item {
            display: flex;
            margin: 0 20px;
            height: $indexItemHeight;

            font-family: sans-serif;
            font-size: 1rem;
            text-align: center;
            line-height: $indexItemHeight;

            cursor: pointer;

            &:hover {
                // border-bottom: 5px solid $hoverColor;
                color: $hoverColor;
            }
        }

        .index-active {
            // border-bottom: 5px solid $hoverColor;
            color: $hoverColor;
        }


    }

}

// .expand {
//     &::after {
//         content: url("@/assets/images/expand.svg");
//         display: inline-block;
//         margin-top: 10px;
//         // justify-content: center;
//         vertical-align: middle;
//     }
// }

// .no-expand {
//     &::after {
//         content: url("../../assets/images/no_expand.svg");
//         display: inline-block;
//         margin-top: 10px;
//         // justify-content: center;
//         vertical-align: middle;
//     }
// }


.child {
    display: fixed;
    position: absolute;
    top: $indexItemHeight;

    border-radius: 10px;

    padding: 0 20px;
    width: 150px;

    font-family: sans-serif;
    font-size: 18px;
    justify-content: center;

    background-color: rgba(255, 255, 255, 90%);
}

.child-item {
    height: $subItemHeight;
    line-height: $subItemHeight;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid #999;
    }
}

button {
    position: relative;
    margin-right: 10px;
    width: 60px;
    height: 60px;

    border: 2px solid $buttonColor;
    border-radius: 5px;
    background-color: $buttonColor;

    cursor: pointer;

    .nav-select {
        width: 80%;
        height: 80%;
    }
}
@media screen and (max-width: 768px) {
    .header {
        min-height: 77px;

        .title {
            .logo {
                width: 44px;
                height: 44px;
            }

            .name {
                margin-left: 10px;

                font-family: sans-serif;
                font-size: 18px;
                text-align: left;
            }
        }

        .index {
            display: none;
            visibility: hidden;
        }
        .nav-child {
            margin: 10px auto;
            width: 90%;
            height: auto;
            font-size: 18px;

        }


    }

    .nav {
        position: fixed;
        top: 77px;
        right: 0;
        z-index: 200;

        width: 200px;
        height: auto;

        text-align: center;
        list-style: none;

        background-color: rgba(255, 255, 255, 90%);

        .nav-item {
            display: inline-block;
            margin: 5px 0;
            // width: 72px;
            min-height: 50px;

            font-family: sans-serif;
            font-size: 18px;
            text-align: center;
            line-height: 50px;

            cursor: pointer;

            &:hover {
                // border-bottom: 5px solid $hoverColor;
                color: $hoverColor;
            }

        }
    }
    button {
        width: 40px;
        height: 40px;
    }
    .tac {
    top: 70px;
    }
}
</style>
