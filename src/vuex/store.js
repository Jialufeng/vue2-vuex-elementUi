import Vue from 'vue'
import Vuex from 'vuex'

import {
    // 权限
    // user_roles,

} from '../api/apis.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        page_: {
            name: '',
            time: '',
        },
        get_user_roles: '',


        get_history_search: {}, // 记录搜索条件


    },
    // actions
    actions: {
        // user_roles({commit}, options) {
        //     commit('user_roles', options)
        // },


    },
    // mutations
    mutations: {
        // user_roles(state, options) {
        //     user_roles.fetch(options).then(respone => {
        //         state.get_user_roles = respone
        //     });
        // },


    }
})
