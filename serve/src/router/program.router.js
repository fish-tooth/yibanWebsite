const Router  = require("koa-router");

const router = new Router({ prefix: '/program' })

const { getSpecialProgram, getPublicProgram } = require('../controller/program.controller.js');

router.get('/special', getSpecialProgram)   // 获取专项信息
router.get('/public', getPublicProgram)  // 获取公益陪伴活动信息


module.exports = router