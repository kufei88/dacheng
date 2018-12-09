<template>
  <div >
    <x-header  :left-options="{showBack: true}">新增车辆</x-header>
    <group>
      <x-input title="车型"  placeholder="请输入车型"></x-input>
      <x-input title="姓名"  placeholder="请输入车主姓名"></x-input>
      <x-input title="电话号码"  placeholder="请输入车主电话号码"></x-input>
      <x-input title="地址"  placeholder="请输入车主地址"></x-input>
    </group>
    <group>
      <x-switch title="评估否" :value-map="['0', '1']" ></x-switch>
    </group>
    <group title="车主反馈">
      <x-textarea :max="20" placeholder="输入本次拜访的纪要" ></x-textarea>
    </group>
    <group>
      <x-button type="primary">保存</x-button>
    </group>
  </div>
</template>

<script>
import { Group, Cell ,XHeader, CheckIcon, Search, XInput, Checker, CheckerItem, Divider, XSwitch, XTextarea, XButton } from 'vux'
export default {
  components: {
    Group,
    Cell,
    XHeader,
    CheckIcon,
    Search,
    XInput,
    Checker,
    CheckerItem,
    Divider,
    XSwitch,
    XTextarea,
    XButton
  },
  name: 'addcar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.box {
  padding: 0 15px;
}
</style>
