const Router  = require("koa-router");

const router = new Router({ prefix: '/news' })

const { getNewsArticle } = require('../controller/news.article.controller.js');

router.get('/article', getNewsArticle)   // 获取新闻中心文章


module.exports = router