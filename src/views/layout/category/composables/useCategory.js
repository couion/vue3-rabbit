//获取分类数据相关
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getCategoryAPI } from '@/apis/category';
import { ref ,onMounted} from 'vue'
export function useCategory() {
  const route = useRoute()
  const categoryData = ref({})
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())
  //路由参数变化时，重新发送
  onBeforeRouteUpdate((to) => getCategory(to.params.id))
  return{
    categoryData
  }
}
