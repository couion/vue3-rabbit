import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
import { ref } from "vue";
import { useCartStore } from "./cartStore"
import { mergeCartAPI } from "@/apis/cart";
export const useUserStore = defineStore('user', () => {
  const cartStore=useCartStore()
  const userInfo = ref({})
  //登陆
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
    //合并购物车操作
   await mergeCartAPI(cartStore.cartList.map(item=>{return{
      skuId:item.skuId,
      selected:item.selected,
      count:item.count
    }}))
    cartStore.updateNewList()
  }
  //退出清除信息
  const clearUserInfo=()=>{
    userInfo.value ={}
    cartStore.clearCart()
  }
  // 3. 以对象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},
{
  persist: true,
})