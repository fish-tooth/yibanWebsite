const SpecialProgram = require('../model/program.special.model');
const PublicProgram = require('../model/program.public.model');
const { Op } = require('sequelize');
// const dateDiff = require('../utils/dateDiff').default

const ProgramService = {
  async getSpecialPrograms() {
    try{
      // const date = new Date();
      // const curDate = date.now();
      const res = await SpecialProgram.findAll({  // 查询专项信息 用于公益项目页面
        // 查询当前最新或正在进行的专项
        // order: [
        //   Op.fn('max', Op.col('endTime')),
        // ],
       
        // [Op.or]: [{
        //     where: {  
        //       dateDiff(curDate,endDate)
        //     }
        //   },
        //   {  
        //     endDate: null
        //   }  
        // ],
        attributes: ['title','content','coverImg','videoLink','link','startDate','endDate']
      });
      console.log('service res:',res)
      return res
    } catch(err) {
      console.log("数据获取失败",err)
    }
    
  },

  async getPublicPrograms() {
    try{
      const res = await PublicProgram.findAll({  // 查询公益项目计划 用于公益视频页面
        attributes: ['title','content','coverImg','videoLink','link','startDate','endDate']
      });
      console.log('service res:',res)
      return res
    } catch(err) {
      console.log("数据获取失败",err)
    }
    
  }
}

module.exports = ProgramService