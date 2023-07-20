<template>
  <p class=" text-blue-700">Exam {{ number }}</p>
</template>

<script setup lang="ts">
import { useExamStore } from '@/stores/exam.store'
import { storeToRefs } from 'pinia'


const examStore = useExamStore()


const { number } = storeToRefs(examStore)
</script>

<style scoped></style>
