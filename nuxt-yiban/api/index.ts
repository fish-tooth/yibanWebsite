import { getReq, postReq } from "@/utils/request"
export const getMenuInfo = (data: any): Promise<any> =>
   getReq(`menu`, data)
// export const getNewsInfo = (data: any): Promise<any> =>
//    getReq(`news/info`, data)
export const getNewsArticle = (): Promise<any> =>
   getReq(`news/article`)
export const getIndexData = (): Promise<any> =>
   getReq(`service/index/data`)
   export const getProgramData = (): Promise<any> =>
   getReq(`service/program/data`)
export const operatArticlePraise = (data: any): Promise<any> =>
   postReq(`v1/article/praise`, data)
export const operatArticleView = (data: any): Promise<any> =>
   postReq(`v1/article/view`, data)
export const getArticlePraiseNum = (data: any): Promise<any> =>
   getReq(`v1/article/praisenum`, data)
export const getCategory = (data: any): Promise<any> =>
   getReq(`v1/category`, data)

 
    
   