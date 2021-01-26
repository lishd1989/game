<template>
  <div id="container">
    <div class="header">
      <span
        v-for="(v, i) of list"
        :key="i"
        @click="selectId = i"
        :class="{ active: selectId == i }"
        >{{ v.name }}</span
      >
    </div>

    <!-- <keep-alive> -->
    <goods-step v-show="selectId == 1" ref="goods"></goods-step>

    <!-- </keep-alive> -->
    <!-- <keep-alive> -->
    <basic-step v-show="selectId == 0" ref="basic"></basic-step>
    <!-- </keep-alive> -->
    <button @click="get">获取</button>
  </div>
</template>

<script>
// @ is an alias to /src
import GoodsStep from "./goodsStep";
import BasicStep from "./basicStep";
export default {
  name: "Home",
  data() {
    return {
      list: [
        { name: "基础设置" },
        { name: "任务设置" },
        { name: "积分设置" },
        { name: "分享设置" },
      ],
      selectId: 0,
    };
  },
  mounted() {
    console.log(this.$refs.basic.formDate.name);
    console.log(this.$refs.goods.formDate.name);
  },
  methods: {
    get() {
      console.log(this.$refs.basic.formDate.name);
      console.log(this.$refs.goods.formDate.name);
    },
  },
  components: { GoodsStep, BasicStep },
  watch:{
    
  }
};
</script>
<style lang="less" scoped>
#container {
  width: 100%;
  height: 100%;
  .header {
    height: 60px;
    background-color: #ccc;
    line-height: 60px;
    .active {
      border-bottom: 2px solid red;
      display: inline-block;
      height: 58px;
      user-select: none;
    }
    span {
      margin-left: 30px;
      cursor: pointer;
    }
  }
}
</style>
