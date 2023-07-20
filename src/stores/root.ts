import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRootStore = defineStore('root', () => {
  const number = ref(1)

  return { number }
})
