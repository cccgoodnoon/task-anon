import Vue from 'vue'
import VueRouter from 'vue-router'
import TaskList from './components/task/TaskList.vue'
import TaskViewer from './components/task/TaskViewer.vue'


Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/tasks',
  },
  {
      path: '/tasks',
      name: 'tasks',
      component: TaskList
  },
  {
      path: '/tasks/detail/:id',
      name: 'task_detail',
      component: TaskViewer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/openedu/anon/',
  routes
})

export default router