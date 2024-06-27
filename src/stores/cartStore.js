//封装购物车模块
import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import { useUserStore } from "./user";
import { insertCartAPI, findNewCartListAPI ,delCartAPI} from "@/apis/cart";
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  //定义state cartList
  const cartList = ref([])
  // 获取最新购物车列表action
  const updateNewList = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.result
  }
  // 定义action addCart
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      //登录后加入购物车
      await insertCartAPI({ skuId, count })
      updateNewList()
    } else {
      //未登陆
      // 添加购物车操作
      // 已添加过 - count + 1
      // 没有添加过 - 直接push
      // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      if (item) {
        //找到了
        item.count += goods.count
      } else {
        // 没找到
        cartList.value.push(goods)
      }
    }

  }
  //删除购物车
  const delCart = async (skuId) => {
    if (isLogin.value) {
      await delCartAPI([skuId])
      updateNewList()
    } else {
 // 思路：
    // 1. 找到要删除项的下标值 - splice
    // 2. 使用数组的过滤方法 - filter
    const idx = cartList.value.findIndex((item) => skuId === item.skuId)
    cartList.value.splice(idx, 1)
    }
   
  }
  //清除购物车
  const clearCart=()=>{
    cartList.value=[]
  }
  //总数量
  const allCount = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))
  // 总价格
  const allPrice = computed(() => cartList.value.reduce((sum, item) => sum + item.count * item.price, 0))
  //单选功能
  const singleCheck = (skuId, selected) => {
    //通过skuId修改要修改的那一项
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  //全选功能
  const allCheck = (selected) => { cartList.value.forEach((item) => item.selected = selected) }
  //是否全选计算属性
  const isAll = computed(() => cartList.value.every((item) => item.selected))
  //已选中数量
  const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count, 0))
  // 4. 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((sum, item) => sum + item.count * item.price, 0))
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    allCheck,
    isAll,
    selectedCount,
    selectedPrice,
    updateNewList,
    clearCart
  }
},

  {
    persist: true,
  })