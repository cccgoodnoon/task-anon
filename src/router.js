import Vue from 'vue'
import VueRouter from 'vue-router'
import ContentView from './components/ContentView.vue'
import Detail from './components/Detail.vue'


Vue.use(VueRouter);

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       redirect:'/tasks'
//       // component: ContentView
//     },
//     {
//         path: '/tasks',
//         name: 'tasks',
//         component: ContentView
//     },
//     {
      // path: '/tasks/detail:id',
      // name: 'task_detail',
      // component: Detail
//     }
//   ]
// })

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/tasks',
  },
  {
      path: '/tasks',
      name: 'tasks',
      component: ContentView
  },
  {
      path: '/tasks/detail/:id',
      name: 'task_detail',
      component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: '/openedu/anon/',
  routes
})

export default router