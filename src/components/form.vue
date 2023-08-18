<template>
  form
</template>
<script lang="ts" setup>
 import { defineProps } from 'vue'
  const obj = defineProps({
      model: {
          type: Object,
          default: '----'
      },
      rules: {
          type: Object,
          default:' 0分钟'
      },
  })
  console.log(obj);
</script>