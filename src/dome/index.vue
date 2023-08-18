<template>
  <label>生成次数：<input v-model="count"/></label>
  <div class="item" v-for="(item,i) in list">
    <div :class="item == 1 && 'check'">胜</div>
    <div :class="item == 2 && 'check'">平</div>
    <div :class="item == 3 && 'check'">负</div>
  </div>
</template>
<script lang="ts" setup>
import { reactive , ref , watchEffect , useAttrs } from 'vue';
const list:(number)[] = reactive([]);
const count = ref(0);
let add:(id:number ,name: string) => string = function(id:number ,name: string):string{ 
    return id + name;
} 

watchEffect(()=> {
  list.length = 0;
  for(let i=0 ; i< count.value; i++){
    let redomCount = Math.ceil(Math.random()*3);
    list.push(redomCount == 0 ? Math.ceil(Math.random()*3) : redomCount)
  }
})
const ctx = useAttrs()
console.log("useAttrs",ctx);
count.value = ctx.count as number;
</script>
<style>
.item{
  display: flex;
  margin-top: 20px;
}
.item div{
  width: 60px;
  border: 1px rgb(123, 118, 118) solid;
  margin: 3px;
  padding: 2px 5px;
}
.check{
  background-color: red;
  color: white;
}
</style>