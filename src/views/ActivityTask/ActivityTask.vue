<template>
  <div class="taskbox" 
   :style="{backgroundImage:hasFamilyDoctor? 'url('+require('../../assets/imgs/activityTask/bgbox7.png')+')':'url('+require('../../assets/imgs/activityTask/bgbox6.png')+')', height:hasFamilyDoctor? '1058px':'928px'}"
  id="taskbox">
    <div class="item first">
      <img
        class="left"
        src="../../assets/imgs/activityTask/convene.png"
      />
      <div class="middle">
        <span class="taskmsg">每日召集好友（0/2）</span>
        <span class="prizemsg">每召集好友1位抽卡机会+1</span>
      </div>
      <img class="right" src="../../assets/imgs/activityTask/goconvene.png">
    </div>
    <div class="item">
      <img
        class="left"
        src="../../assets/imgs/activityTask/view.png"
      />
      <div class="middle">
        <span class="taskmsg">每日观看长寿视频（0/1）</span>
        <span class="prizemsg">观看长寿视频10s抽卡机会+1</span>
      </div>
      <img class="right" src="../../assets/imgs/activityTask/goview.png">
    </div>
    <div class="item">
      <img
        class="left"
        src="../../assets/imgs/activityTask/givelike.png"
      />
      <div class="middle">
        <span class="taskmsg">每日点赞长寿视频（0/1）</span>
        <span class="prizemsg">点赞长寿视频标签抽卡机会+1</span>
      </div>
      <img class="right" src="../../assets/imgs/activityTask/golike.png">
    </div>
    <div class="cutoff">
      <img src="../../assets/imgs/activityTask/cutoff.png" alt="">
    </div>
    <div class="item">
      <img
        class="left"
        src="../../assets/imgs/activityTask/baibo.png"
      />
      <div class="middle">
        <span class="taskmsg">活动期间预约拜博门店</span>
        <span class="prizemsg">预约成功抽卡机会+1</span>
      </div>
      <img class="right" src="../../assets/imgs/activityTask/goAppointment.png">
    </div>
    <div class="item">
      <img
        class="left"
        src="../../assets/imgs/activityTask/look.png"
      />
      <div class="middle">
        <span class="taskmsg">活动期间浏览“泰康资产”网站</span>
        <span class="prizemsg">浏览后抽卡机会+1</span>
      </div>
      <img class="right" src="../../assets/imgs/activityTask/goLook.png">
    </div>
    <div class="item">
      <img
        class="left"
        src="../../assets/imgs/activityTask/selftest.png"
      />
      <div class="middle">
        <span class="taskmsg">活动期间完成“健康自测”</span>
        <span class="prizemsg">完成测评后抽卡机会+1</span>
      </div>
      <img class="right" src="../../assets/imgs/activityTask/gotest.png">
    </div>
    <div class="item" v-show="hasFamilyDoctor">
      <img
        class="left"
        src="../../assets/imgs/activityTask/activate.png"
      />
      <div class="middle">
        <span class="taskmsg">活动期间激活查看“家庭医生”</span>
        <span class="prizemsg">完成激活查看抽卡机会+1</span>
      </div>
      <img class="right" src="../../assets/imgs/activityTask/goactivate.png">
    </div>
    <button @click="go">去首页</button>
  </div>
</template>
<script>
export default {
  name: 'ActivityTask',
  data() {
    return {
      hasFamilyDoctor:true,
    }
  },
  mounted() {
    console.log(window.document.hidden)
    document.addEventListener('visibilitychange',()=>{
      if(document.visibilityState==='visible'){
        console.log(11111)
      }else{
        console.log(22222)
      }
      
    })
  },
  methods:{
    go(){
      window.location.href='https:www.baidu.com'
    }
  }
}
</script>
<style scoped lang="stylus">
.taskbox
  width 690px
  margin 0 auto
  &::before
    content ''
    display table
  .item
    width 673.7px
    height 130px
    margin 0 auto
    .left
      margin-left 24px
      margin-top 31px
    .middle
      margin-left 19px
      display inline-block
      .taskmsg
        display block
        margin-top 33px
        font-size: 26px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #B90C1F;
      .prizemsg
        display block
        margin-top 18px
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #E39F8F;
    .right
      float right
      margin 31px 21px 31px 0
      cursor pointer
  .cutoff
    width 100%
    height 18px
    text-align center
  .first
    margin-top 78px
</style>
