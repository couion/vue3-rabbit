import request from "@/utils/request";
// 获取结算信息
export const getCheckoutInfoAPI=()=>request.get('/member/order/pre')
//创建订单
export const createOrderAPI=(data)=>request.post('/member/order',data)
