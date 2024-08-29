import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AboutBabyBox from '@/pages/AboutBabyBox.vue'; 
import ContactBabyBox from '@/pages/ContactBabyBox.vue'; 
import HelpCenter from '@/pages/HelpCenter.vue'; 
import ReturnPolicy from '@/pages/ReturnPolicy.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about-babybox',
    name: 'AboutBabyBox',
    component: AboutBabyBox,
  },
  {
    path: '/contact-babybox',
    name: 'ContactBabyBox',
    component: ContactBabyBox,
  },
  {
    path: '/help-center',
    name: 'HelpCenter',
    component: HelpCenter,
  },
  {
    path: '/return-policy',
    name: 'ReturnPolicy',
    component: ReturnPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
