import request from "@/utils/request";
//登陆接口
export const loginAPI=({account,password})=>request.post('/login',{account,password})