const Router  = require("koa-router");

const router = new Router({ prefix: '/service' })

const { getIndexData, getProgramData } = require('../controller/service.data.controller.js');

router.get('/index/data', getIndexData)   // 获取首页展示数据（项目数，志愿者人数，服务学生数）
router.get('/program/data', getProgramData)  // 获取公益项目展示数据（项目数，志愿者人数，服务学生数，课程数量）


module.exports = router