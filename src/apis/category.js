import request from "@/utils/request";

//获取二级分类页
export const getCategoryAPI=(id)=>request.get('/category',{
  params:{id}
})
//获取二级分类列表数据
export const getCategoryFilterAPI=(id)=>request.get('/category/sub/filter',{
  params:{
    id
  }
})
//获取二级分类列表导航数据
export const getSubCategoryAPI=(data)=>request.post('/category/goods/temporary',data)