const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const NewsArticle = seq.define('NewsArticle', {
    postDate: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '文章日期'
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '文章标题'
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "",
        comment: '文章内容'
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '文章摘要'
    },
    coverImg: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '图片地址'
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '文章分类'
    },
    isTop: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        comment: '是否置顶'
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        comment: '文章链接'
    },
    // viewNum: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     defaultValue: 0,
    //     comment: '阅读量'
    // },
    // praiseNum: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     defaultValue: 0,
    //     comment: '点赞量'
    // },
    // commentNum: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     defaultValue: 0,
    //     comment: '评论量'
    // },

}, {
    underscored: true,
    timestamps: false
})

// NewsArticle.sync({force:true})
NewsArticle.sync({})
module.exports = NewsArticle