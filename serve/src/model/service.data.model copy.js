const { DataTypes } = require('sequelize')

const seq = require('../config/db')

const ServiceData = seq.define('ServiceData', {
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '数据标题'
  },
  data: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '数据量'
  },
  untilDate: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
    comment: '截至时间'
  },
}, {
    underscored: true,
    timestamps: false
})

// ServiceData.sync({force:true})
ServiceData.sync({})
module.exports = ServiceData