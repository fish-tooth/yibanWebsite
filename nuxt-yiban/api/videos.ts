// 公益视频数据类型定义
export type ProgramVideo = {
  id: string
  coverImg: URL
  videoURL: URL
  title: string
  intro: string
}
// 
export const getProgramVideos = async (params) => {
    return await request.get({ url: '/bpm/model/page', params })

export default defineEventHandler((event) => {
  // 获取当前页码 page
  const query = getQuery(event);
  const page = Number(query.page);
  const size = Number(query.size);
 
  // ...
  // 降序排列、分页
  const start = (page - 1) * size;
  const end = start + size;
  return posts
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(start, end);

}