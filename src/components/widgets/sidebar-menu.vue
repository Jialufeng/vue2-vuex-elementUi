<template>
    <div>
        <el-row class="tac">
            <el-col :span="24">
                <el-menu :default-active="actives" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen"
                         @close="handleClose" @select="handleSelect" :router="true">
                    <template v-for="(item, index) in menu">
                        <el-submenu :index="item.index">
                            <template slot="title"><i :class="item.class"></i>{{item.name}}</template>
                            <el-menu-item-group v-for="items in item.child">
                                <el-menu-item :index="items.index">{{items.name}}</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </template>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<style>

</style>
<script>

    import {mapState, mapActions} from 'vuex'

    //    import  {AuthMgr} from  './../../api/apis';


    export default {

        data () {
            return {
                menu: this.$parent.$data.menu || [],
                actives:'/'
            }
        },

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                this.actives = key
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
//            query(name) {
//                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//                var r = window.location.search.substr(1).match(reg);
//                if (r != null) return unescape(r[2]);
//                return null;
//            },
//
//            set_first_token() {
//                let token = this.query('token');
//
//                sessionStorage.setItem('token', token);
//                this.user_roles({token:sessionStorage.getItem('token')});
//
//
//            },
//            goLinks(link) {
//                window.location.href = link;
//            },
//            ...mapActions([
//                'user_roles',
//            ])
        },
        watch: {
//            get_user_roles: {
//                handler: function (n, o) {
//                    if (n.code !== '0000') return;
//                    sessionStorage.setItem('username',n.data.name);
//                    let api_menus = n.data.menus;
//                    this.menu = api_menus;
//
//
//                }
//            }
        },
        computed: {
//            ...mapState({
//                get_user_roles: state => state.get_user_roles,
//            })
        },
        created() {
//
            this.actives = "/" + this.$route.path.split('/')[1]
//            if (sessionStorage.getItem('token') === null) {
//                this.set_first_token();
//            }
//
//            this.user_roles({token: sessionStorage.getItem('token')});
        }
    }

</script>