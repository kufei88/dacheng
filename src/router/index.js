import Vue from 'vue'
import Router from 'vue-router'
import CarList from '@/components/CarList'
import AddCar from '@/components/AddCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CarList',
      component: CarList
    },
    {
      path: '/addCar',
      name: 'addCar',
      component: AddCar
    }
  ]
})
