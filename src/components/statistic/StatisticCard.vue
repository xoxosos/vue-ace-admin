<script lang="ts" setup>
import type { Props } from './type'

const props = withDefaults(defineProps<Props>(), {
  title: 'Feedback',
  value: 3,
  suffix: ''
})
</script>
<template>
  <a-card>
    <a-statistic v-bind="props" />
  </a-card>
</template>
