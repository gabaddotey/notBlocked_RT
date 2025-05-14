import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingView from '@/views/LandingView.vue'
import QuizView from '@/views/QuizView.vue'
import Q1View from '@/views/Q1View.vue'
import MultiSelect from '@/components/MultiSelect.vue'
import SingleEvent from '@/components/SingleEvent.vue'
import SingleCraft from '@/components/SingleCraft.vue'
import EventsView from '@/views/EventsView.vue'
import CraftsView from '@/views/CraftsView.vue'

const router = createRouter({
  mode : 'hash',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
      meta: {
        showNavbar: false,
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        showNavbar: true,
      }
    },
    {
      path: '/event/:id',
      component: SingleEvent,
      meta: {
        showNavbar: true,
      }
    },
    {
      path: '/events',
      component: EventsView,
      meta: {
        showNavbar: true,
      }
    },
    {
      path: '/craft/:id',
      component: SingleCraft,
      meta: {
        showNavbar: true,
      }
    },
    {
      path: '/crafts',
      component: CraftsView,
      meta: {
        showNavbar: true,
      }
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView,
      meta: {
        showNavbar: false,
      }
    },
    {
      path: '/quiz/:id',
      component: MultiSelect,
      meta: {
        showNavbar: false,
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        showNavbar: true,
      }
    },
  ],
})

export default router
