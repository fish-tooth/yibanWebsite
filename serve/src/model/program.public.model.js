const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const PublicProgram = seq.define('PublicProgram', {
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '项目标题'
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '项目介绍'
  },
  coverImg: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '封面图片'
  },
  videoLink: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '案例视频链接'
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '详情链接'
  },
  startDate: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '项目开始时间'
  },
  endDate: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '项目结束时间'
  },
}, {
    underscored: true,
    timestamps: false
})

// PublicProgram.sync({force:true})
PublicProgram.sync({})
module.exports = PublicProgram