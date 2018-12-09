<template>
  <div>
    <x-header  :left-options="{showBack: false}">我的客户</x-header>
    <div class="search">
      <search
      placeholder="可以通过手机号码搜索"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      
      ref="search"></search>
    </div>
    <div class="box">
      <div class="car">宝马523</div>
      <div class="owner">王二<span>|</span>1333333333</div>
      
      <div class="address">李渔路1171号</div>
      <div class="deal">
        <check-icon value="true"></check-icon>
      </div>
      
    </div>
    <div class="round-click" @click="addCar">
       <a >+</a>
    </div>
  </div>
</template>

<script>
import { Group, Cell ,XHeader,CheckIcon,Search } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XHeader,
    CheckIcon,
    Search
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods:{
    addCar(){
      this.$router.push({name:'addCar'})
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
.box{
  border-bottom: 1px solid #ECECEC;
  padding: 10px 0 9px;
  margin: 0 9px 0 11px;
  background-color: #fff;
  position:relative;
}
.car{
  font-size: 14px;
    line-height: 15px;
    color: #222;
    height: 15px;
    overflow: hidden;
}
.owner{
  font-size: 12px;
    line-height: 17px;
    height: 17px;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 3px 0 4px;
}
.owner span{
  font-size: 8px;
    padding: 0 5px;
    position: relative;
    top: -2px;
    color: #e1e1e1;
}
.address{
  font-size: 12px;
    line-height: 17px;
    height: 17px;
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 3px 0 4px;
}
.deal{
  position:absolute;
  right:0;
  top:15px;
}

.round-click{
    height: 40px;
    width: 40px;
    background-color:#1AAD19;
    opacity:0.7;
    padding: 0;
    position: fixed;
    bottom: 55px;
    right: 20px;
    border-radius: 100%;
    line-height: 35px;
    text-align: center;
    z-index: 9;
}
.round-click a{
    font-size: 36px;
    max-width: 40px;
    color: #fff;
    
}
</style>
