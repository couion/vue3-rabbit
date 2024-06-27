import request from "@/utils/request";
// 猜你喜欢接口
export const getLikeListAPI=({limit=4})=>request.get('/goods/relevant',{
  params:{
    limit
  }
})
//我的订单渲染
export const getUserOrder=(params)=>request.get('/member/order',{
  params
})