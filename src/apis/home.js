import request from "@/utils/request";

//获取轮播图数据
export const getBannerAPI=(distributionSite)=>request.get('/home/banner',{params:{
  distributionSite
}})
//获取新鲜好物接口
export const findNewAPI=()=>request.get('/home/new')
//获取人气推荐接口
export const getHotAPI=()=>request.get('/home/hot')
//获取所有商品模块
export const getGoodsAPI=()=>request.get('/home/goods')
