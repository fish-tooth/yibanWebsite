const { getArticles } = require("../service/news.article.service");
class NewsArticleController {
    async getNewsArticle (ctx, next) {
        try {
            const res = await getArticles();
            console.log('controller res:',res);
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: res
            };
            
        } catch (error) {
            ctx.body = {
                code: 500,
                msg: "服务器错误",
                result: "",
            };
        }
    }
}

module.exports = new NewsArticleController()