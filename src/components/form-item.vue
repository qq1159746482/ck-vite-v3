<template>
  form-item
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
  const obj = defineProps({
      lable: {
          type: String,
          default: '----'
      },
      props: {
          type: String,
          default:' 0分钟'
      },
  })
</script>