import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '@/views/LandingView.vue'
import QuizView from '@/views/QuizView.vue'
import Q1View from '@/views/Q1View.vue'
import MultiSelect from '@/components/MultiSelect.vue'
import HomeViewCopy from '@/views/HomeView copy.vue'
import EventPage from '@/components/EventPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/event/:id',
      component: EventPage,
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
    },
    {
      path: '/quiz/:id',
      component: MultiSelect,
    },
    {
      path: '/helloworld',
      name: 'homecopy',
      component: HomeViewCopy,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})


export default router
