

<script setup>
import HomeCategory from '@/views/layout/home/HomeCategory.vue'
import HomeBanner from '@/views/layout/home/HomeBanner.vue'
import HomeNew from '@/views/layout/home/HomeNew.vue'
import HomeHot from '@/views/layout/home/HomeHot.vue'
import HomeProduct from '@/views/layout/home/HomeProduct.vue'


</script>
<template>

  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew></HomeNew>
  <HomeHot></HomeHot>
  <HomeProduct></HomeProduct>
</template>
<style lang="scss" scoped></style>