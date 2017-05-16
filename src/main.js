import Vue from 'vue'
// import Validator from 'vue-validator'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import App from './App'



// 用户管理
import home from './components/pages/home/home'
import detail from './components/pages/home/detail'

// 资产管理
import user from './components/pages/user/user_list'
import userTwo from './components/pages/user/order/list.vue'

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
    { path: '/detail', component: detail },

    {
        path: '/user', component: user,
        children: [
            { path: '/', component: user },
        ]
    },
    { path: '/user/userTwo', component: userTwo },

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