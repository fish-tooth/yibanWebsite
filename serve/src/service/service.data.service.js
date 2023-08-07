const ServiceData = require('../model/program.special.model');
const { Op, and } = require('sequelize');

const ServiceDataService = {
  async getIndexDatas() {
    try{
      const res = await ServiceData.findAll({  // 查询项目、志愿者、学生相关数据 用于首页
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%项目%` } },
            { title: { [Op.like]: `%志愿者%` } },
            { title: { [Op.like]: `%学生%` } },
          ]
        },
        attributes: ['title','data']
      });
      console.log('service res:',res)
      return res
    } catch(err) {
      console.log("数据获取失败",err)
    }
    
  },
  async getProgramDatas() {
    try{
      const res = await ServiceData.findAll({  // 查询项目、志愿者、学生、课程相关数据 用于公益项目页面
        attributes: ['title','data']
      });
      console.log('service res:',res)
      return res
    } catch(err) {
      console.log("数据获取失败",err)
    }
    
  }
}

module.exports = ServiceDataService