<script setup lang="ts">
import { Ref, ref } from 'vue';

let a:Ref<string> = ref('')
a.value = '333333'
const list:number[] = [];
list.push(1);
list.push(Number(null))
</script>

<template>
  <div>
    {{list}}
    vite yyds 承诺{{a}}
  </div>
</template>

<style scoped>
</style>
