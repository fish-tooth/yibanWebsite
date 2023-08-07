const { getIndexDatas, getProgramDatas } = require('../service/service.data.service');

const ServiceDataController = {
    async getIndexData(ctx, next) {
      try {
        const res = await getIndexDatas();
            console.log('controller res:',res);
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: res
            };
      } catch (error) {
        console.log(error);
        ctx.body = {
          code: 500,
          msg: "服务器错误",
          result: "",
        };
      }
    },
    async getProgramData(ctx, next) {
      try {
        const res = await getProgramDatas();
            console.log('controller res:',res);
            ctx.body = {
                code: 200,
                msg: "操作成功",
                result: res
            };
      } catch (error) {
        console.log(error);
        ctx.body = {
          code: 500,
          msg: "服务器错误",
          result: "",
        };
      }
    } 
}

module.exports = ServiceDataController