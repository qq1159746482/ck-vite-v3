<!--
 * @Author: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @Date: 2022-10-17 16:21:19
 * @LastEditors: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @LastEditTime: 2023-02-06 15:42:41
 * @FilePath: \github\ck-vite-v3\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
<!--
 * @Author: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @Date: 2022-10-17 16:21:19
 * @LastEditors: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @LastEditTime: 2023-02-06 15:37:30
 * @FilePath: \github\ck-vite-v3\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <van-image
    width="100"
    height="100"
    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
  />
  {{ computedCount }}{{ stu }}{{count}}
  <button @click="add">新增count</button>
  <button @click="openModel">点击按钮</button>

  <div id="test">
    <div>这就是要导航的数据</div>
    <button @click="a">导航操作</button>
  </div>
  <Index :count="count"></Index>
</template>

<script lang="ts" setup>
import { ref, unref, toRefs, provide, computed} from "vue";
import { shallowRef, triggerRef } from "vue";
import { openModel } from "./utils/mode_util";
import Driver from "driver.js";
import Index from './dome/index.vue'
//定义区
let [count, stu] = [ref(0), shallowRef({ name: "ck" })];
//函数区 计算属性
const computedCount = computed(() =>
  count.value > 5 ? "大于5" : `count的属性是:${count.value}`
);
const add = () => {
  stu.value.name = "sadad";
  count.value = count.value+1;
  triggerRef(stu);
};
const a = function () {
  const driver = new Driver();
  driver.highlight("#test");
  console.log("a触发了", driver);
};
let mySum: (x: number, y: number) => number = function (
  x: number,
  y: number | string
): number {
  return x + Number(y);
};
let data = {
  a,mySum
}


</script>
<style scoped lang="less">
#test {
  background-color: #00000082;
  width: 300px;
  height: 500px;
}
#some-element {
  width: 100px;
  height: 100px;
}
</style>
