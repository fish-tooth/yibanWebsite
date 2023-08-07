const NewsArticle = require('../model/news.article.model');
const { Op } = require("sequelize");
class NewsArticleService {
    async getArticles() {
        try {
            // NewsArticle.create({
            //     date: '2023',
            //     title: 'yibqn',
            //     content: 'yiban',
            //     desc: 'yiban',
            //     coverImg: 'yiban',
            //     tag: 'yiban',
            //     isTop: 1,
            //     link: 'https'
            // })
            // console.log("news:", NewsArticle)
            const res = await NewsArticle.findAll({
                attributes: ['id','date','title','content','desc','coverImg','tag','isTop','link'],
                limit: 20
            });
            console.log("service res:",res);
            return res
        } catch (error) {
            console.log(error);
        }
        
    
    }

    // async selectArticle (page, page_size) {
    //     try {
    //         const res = await newsArticle.findAndCountAll({
    //             where: {

    //             },
    //             order: [["isTop", 'DESC']],
    //             offset: (page * 1 - 1) * page_size,
    //             limit: page_size * 1
    //         })
    //         return res
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async selectArticleById (id) {
    //     try {
    //         const res = await newsArticle.findOne({
    //             where: {
    //                 id: id
    //             },
    //         })
    //         return res
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async selectArticleByKeys (keyword) {
    //     try {
    //         const res = await newsArticle.findAll({
    //             where: {
    //                 [Op.or]: [
    //                     {
    //                         title: {
    //                             [Op.like]: `%${keyword}%`
    //                         }
    //                     },
    //                     {
    //                         desc: {
    //                             [Op.like]: `%${keyword}%`
    //                         }
    //                     }
    //                 ]
    //             },
    //         })
    //         return res
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
}

module.exports = new NewsArticleService()