const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const SpecialProgram = seq.define('SpecialProgram', {
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '专项标题'
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '专项介绍'
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
    comment: '专项详情链接'
  },
  startDate: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '专项开始时间'
  },
  endDate: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '专项结束时间'
  },
}, {
    underscored: true,
    timestamps: false
})

// SpecialProgram.sync({force:true})
SpecialProgram.sync({})
module.exports = SpecialProgram