<!--
 * @Author: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @Date: 2023-01-09 17:28:14
 * @LastEditors: PCOS-2022SXGVAQ\Administrator 1159746482@qq.com
 * @LastEditTime: 2023-01-17 17:18:14
 * @FilePath: \github\ck-vite-v3\src\components\mode.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="mode" v-if="modalVisible">
    <div class="mode-context">
      <div>head</div>
      <div>body</div>
      <div><button @click="props.close">关闭</button></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps , defineEmits , ref } from 'vue'
  const _styles = '10px 15px';
  
  const props = defineProps({
    modalVisible: {
        type: String,
        default: false
    },
    close: {
      type: Function
    }
  })

  const emits = defineEmits(['update:modalVisible'])

  const consol = () => {
    emits('update:modalVisible' , false)
  }
  //inject 方式
  //const provideVisible = inject('provideVisible')
</script>
<style>
  body{
    padding: 0px;
    margin: 0px;
  }
  .mode{
    background-color: #999;
    position: fixed;
    inset: 0px;
    text-align: center;
    opacity: 0.8;
  }
  .mode-context{
    background-color: #fff;
    width: 300px;
    display: inline-block;
    vertical-align: middle;
  }
  .mode::after{
    content: '';
    height: 100%;
    width: 0;
    vertical-align: middle;
    display: inline-block;
  }
  .mode-context{
    background-color: #fff;
    width: 300px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 5px;
  }
  .mode-context > div:first-child{
    text-align: left;
    font-size: 22px;
    margin: 5px 15px;
    color: #756c6c;
  }
  .mode-context > div:last-child{
    text-align: right;
    margin:  v-bind(_styles);
  }
  .mode-context > div:last-child > button{
    color: white;
    background-color: #0375f4;
    border: 0px;
    height: 30px;
    width: 60px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
  }
  .mode-context > div:nth-child(2){
    margin: v-bind(_styles);
    text-align: left;
  }
  
</style>