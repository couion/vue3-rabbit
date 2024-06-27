//封装倒计时函数
import { ref, computed ,onUnmounted} from "vue";
import dayjs from "dayjs";
export const useCountDown = () => {
  //响应式数据
  let timer = null
  const time = ref(0)
  //格式化时间
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  //开启倒计时函数
  const start = (currentTime) => {
    //开启倒计时逻辑
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  // 组件销毁时清除定时器
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime, start
  }

}