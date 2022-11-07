<script setup>
  let a = 'abc&ABC';
  let count = a.split('').reduce((cur,per) =>{
    return cur + = per.toLocaleLowerCase() == 'a' ? 1 : 0;
  },0)
  console.log(count);
</script>

<template>
<p>12333333333333333333333333333333333333333333333333333333333333333333333333dasssssssssssssssssssssssssssssssss-------</p>

</template>

<style scoped lang="less">
 p{    
    width:200px;
   overflow: hidden;
   text-overflow:ellipsis;
   white-space: nowrap;
 }
</style>
