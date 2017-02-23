import Vue from 'vue'
// import Validator from 'vue-validator'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import App from './App'



// 用户管理
import home from './components/pages/user/user_list'
import user_tab from './components/pages/user/user_tab'
import user_detail from './components/pages/user/user_detail'
import user_car from './components/pages/user/user_car'
import user_audit from './components/pages/user/user_audit'
import user_balance from './components/pages/user/balance'
import user_auth from './components/pages/user/auth_log'
import order from './components/pages/user/order/list'
import order_unlock from './components/pages/user/order/unlock'
import order_fee from './components/pages/user/order/fee'
import order_detail from './components/pages/user/order/detail'

// 运营管理
import manage_task_tab from './components/pages/manage/manage_task/task_tab'
import manage_task_heading from './components/pages/manage/manage_task/task_heading'
import manage_task_pending from './components/pages/manage/manage_task/task_pending'
import manage_task_end from './components/pages/manage/manage_task/task_end'
import manage_task_detail from './components/pages/manage/manage_task/task_detail'


import manage_car_list from './components/pages/manage/manage_car/manage_car_list'

import tongji_tab from './components/pages/manage/manage_tongji/tongji_tab'
import tongji_added from './components/pages/manage/manage_tongji/tongji_added'
import tongji_cheku from './components/pages/manage/manage_tongji/tongji_cheku'
import tongji_yongche from './components/pages/manage/manage_tongji/tongji_yongche'
import tongji_operate from './components/pages/manage/manage_tongji/tongji_operate'
import tongji_task from './components/pages/manage/manage_tongji/tongji_task'
import tongji_zichan from './components/pages/manage/manage_tongji/tongji_zichan'

import manage_stock from './components/pages/manage/manage_stock/stock'

// 资产管理
import assets_car_list from './components/pages/assets/assets_car/assets_list.vue'
import assets_car_add from './components/pages/assets/assets_car/assets_add.vue'
import assets_car_tab from './components/pages/assets/assets_car/assets_tab.vue'
import assets_car_detail from './components/pages/assets/assets_car/assets_detail.vue'
import assets_car_safestDetail from './components/pages/assets/assets_car/assets_safest_detail'

import assets_repair_list from './components/pages/assets/assets_repair/assets_repair_list.vue'
import assets_repair_detail from './components/pages/assets/assets_repair/assets_repair_detail.vue'

import assets_safest_list from './components/pages/assets/assets_safest/assets_safest_list.vue'
import assets_safest_detail from './components/pages/assets/assets_safest/assets_safest_detail.vue'

import assets_supplier_list from './components/pages/assets/assets_supplier/assets_supplier_list.vue'
import assets_supplier_detail from './components/pages/assets/assets_supplier/assets_supplier_detail.vue'







// 基础设置
import base from './components/pages/base/car_type/list'
import cartype_add from './components/pages/base/car_type/add'
import garage from './components/pages/base/garage/list'
import garage_add from './components/pages/base/garage/add'
import cost from './components/pages/base/cost/list'
import base_city from './components/pages/base/city/list'
import base_limitnum from './components/pages/base/city/limitnum'
import parking from './components/pages/base/parking/list'
import parking_add from './components/pages/base/parking/add'

// 404
import not from './components/pages/NotFound'

import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter);
Vue.use(ElementUI);

// routing
// var router = new VueRouter({
//     linkActiveClass: 'active',
//     history: true
//     // history: process.env.NODE_ENV  === 'production' ? false : true
// });


const routes = [

    { path: '/home', component: home },
    {
        path: '/manage', component: manage_task_tab,
        children: [
            { path: '/', component: manage_task_heading },
            { path: '/manage/pending', component: manage_task_pending },
            { path: '/manage/end', component: manage_task_end },
        ]
    },
    { path: '/manage/detail', component: manage_task_detail },
    { path: '/manage_car_list', component: manage_car_list },
    {
        path: '/tongji', component: tongji_tab, children: [
            { path: '/', component: tongji_added },
            { path: '/tongji/tongji_cheku', component: tongji_cheku },
            { path: '/tongji/tongji_yongche', component: tongji_yongche },
            { path: '/tongji/tongji_operate', component: tongji_operate },
            { path: '/tongji/tongji_task', component: tongji_task },
            { path: '/tongji/tongji_zichan', component: tongji_zichan },

        ]
    },
    { path: '/manage_stock', component: manage_stock },

    { path: '/user', component: home },
    {
        path: '/user/detail', component: user_tab,
        children: [
            { path: '/', component: user_detail },
            { path: '/user/car', component: user_car },
            { path: '/user/audit', component: user_audit },
        ]
    },
    { path: '/user/detail/balance', component: user_balance },
    { path: '/user/detail/authorization', component: user_auth },
    { path: '/user/order', component: order,
        children: [
            { path: '/user/order/', component: order_unlock },
            { path: '/user/order/fee', component: order_fee },
        ]
    },
    { path: '/user/order/detail', component: order_detail },
    { path: '/assets_car', component: assets_car_list },
    { path: '/assets_car_add', component: assets_car_add },
    { path: '/assets_car_tab', component: assets_car_tab,
        children:[
            { path: '/', component: assets_car_detail },
            { path: '/assets_car_tab/safestDetail', component: assets_car_safestDetail },

        ]
    },
    { path: '/assets_car/detail', component: assets_car_detail },
    { path: '/assets_repair', component: assets_repair_list },
    { path: '/assets_repair/detail', component: assets_repair_detail },
    { path: '/assets_safest', component: assets_safest_list },
    { path: '/assets_safest/detail', component: assets_safest_detail },
    { path: '/assets_supplier', component: assets_supplier_list },
    { path: '/assets_supplier/detail', component: assets_supplier_detail },



    { path: '/base', component: base },
    { path: '/base/cartype/add', component: cartype_add },
    { path: '/base/garage', component: garage },
    { path: '/base/garage/add', component: garage_add },
    { path: '/base/cost', component: cost },
    { path: '/base/city', component: base_city },
    { path: '/base/limitnum', component: base_limitnum },
    { path: '/base/parking', component: parking },
    { path: '/base/parking/add', component: parking_add },
    { path: '/', component: home },
    { path: '*', component: not },
];

const router = new VueRouter({
    mode: 'history',
    routes
});




const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');

export default router