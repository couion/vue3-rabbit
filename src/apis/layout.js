import request from "@/utils/request";

//获取-全部分类(包含推荐商品)
export const getCategoryAPI=()=>request.get('home/category/head')