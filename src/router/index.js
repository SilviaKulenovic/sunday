import Vue from 'vue';
import Router from 'vue-router';
//import Ping from '@/components/Ping';
import Home from '@/components/Home' ;
import Notes from '@/components/Notes' ;
import Crops from '@/components/Crops' ;

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
     {
      path: '/notes',
      name: 'Notes',
      component: Notes,
    },
    {
      path: '/crops',
      name: 'Crops',
      component: Crops,
    }  
  ],
});
