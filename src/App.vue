<script setup lang="ts">
import { Ref, ref } from 'vue';

let a:Ref<string> = ref('')
a.value = '333333'
</script>

<template>
  <div>
    vite yyds 承诺{{a}}
  </div>
</template>

<style scoped>
</style>
