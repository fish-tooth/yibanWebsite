const { getSpecialPrograms, getPublicPrograms } = require('../service/program.service');

const ProgramController = {
    async getSpecialProgram(ctx, next) {
      try {
        const res = await getSpecialPrograms();
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
    async getPublicProgram(ctx, next) {
      try {
        const res = await getPublicPrograms();
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

module.exports = ProgramController