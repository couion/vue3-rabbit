import request from '@/utils/request'
//获取支付页详情
export const getOrderAPI = (id) =>request.get(`/member/order/${id}`)