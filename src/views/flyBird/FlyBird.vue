<template>
  <div>
    <div class="canvas" ref="hilo"></div>
  </div>
</template>

<script>
import Play from './play.js'
export default {
  name:'FlyBird',
  data(){
    return{
      game:null
    }
  },
  mounted(){
    this.game=new Play(this.$ref.hilo)
    this.game.page=this.$ref.hilo
    this.game.init(this)
  }
}
</script>

<style>

</style>