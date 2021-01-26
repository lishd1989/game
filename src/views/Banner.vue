<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="v in banner" :key="v.title">
        <img :src="v.href" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "Banner",
  data() {
    return {
      banner: [
        { title: "banner1", href:require("../assets/imgs/banner/1.jpg") },
        { title: "banner2", href:require("../assets/imgs/banner/2.jpg") },
        { title: "banner3", href:require("../assets/imgs/banner/3.jpg") },
      ],
    };
  },
  created(){
  },
  mounted(){
    this.$nextTick(
        new Swiper('.swiper-container', {
            autoplay:true,
            loop:true,
            speed:300,
          })
      )
  },
  methods:{
    
  }
  }
</script>

<style lang="stylus" scoped>
@import '../../node_modules/swiper/dist/css/swiper.css'
.swiper-container 
  width: 359px;
  height: 172px;
  border-radius 16px
  img
    width 100%
    height 100%

</style>
