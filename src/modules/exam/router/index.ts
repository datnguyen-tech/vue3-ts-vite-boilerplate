import type { RouteRecordRaw } from 'vue-router'

const ExamRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../view/Exam.vue'),
    name: 'BalanceMain'
  }
]

export default ExamRouter
