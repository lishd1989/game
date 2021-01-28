<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="v in banner" :key="v.title">
        <img :src="v.href" alt="" />
      </div>
    </div>
    <div class="swiper-pagination">
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import '../../node_modules/swiper/dist/css/swiper.css'
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
            pagination: {
              el: '.swiper-pagination',
              type:'custom',
              renderCustom: function (swiper, current, total) {
                var paginationHtml = " ";
                for (var i = 0; i < total; i++) {
                  // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
                if (i === (current - 1)) {
                paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                    }else{
                paginationHtml += '<span class="swiper-pagination-customs"></span>';
                }
                }
                  return paginationHtml;
                },
            },
          })
      )
  },
  methods:{
    
  }
  }
</script>

<style lang='stylus'>
.swiper-container
  width 359px
  height 172px
  border-radius 16px
  .swiper-pagination-custom
    width: 100%;
    .swiper-pagination-customs
      display inline-block
      width 30px
      height 10px
      border-radius 10px
      background #fff
    .swiper-pagination-customs-active
      background red

</style>
