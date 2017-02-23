<template>
    <div class="page_right task_tab">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户详情</el-breadcrumb-item>
        </el-breadcrumb>
        <template style="margin-top: 10px">
            <el-tabs v-model="activeName" @tab-click="handleClick" class="header-block">
                <el-tab-pane label="用户详情" name="first"></el-tab-pane>
                <el-tab-pane label="用车详情" name="second"></el-tab-pane>
                <el-tab-pane label="风控审核" name="third"></el-tab-pane>
            </el-tabs>
            <div class="tab-pane active">
                <router-view></router-view>
            </div>
        </template>
    </div>


</template>
<style>
    .header-block {
        padding: 10px 20px 0 0;
        border: 1px #e4ebf1 solid;
        background: #fff;
        margin-top: 20px;
    }
    .header-block .el-tabs__header {
        margin: 0;
        border-bottom: 0;
    }
    .header-block .el-tabs__item {
        height: 50px;
        padding: 0 26px;
    }
    .search-block .el-col {
        padding-left: 0 !important;
    }
    .layout_head {
        overflow: hidden;
    }
    .el-tabs__active-bar {
        display: none;
    }
    .task_tab .is-active {
        border-bottom: 3px #20a0ff solid;
    }

</style>
<script>
import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传
    export default {
        data() {
            return {
                activeName: 'first'
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {

            handleClick(tab, event) {
                console.log(tab.index);
                if(tab.index == '0') {
                    this.$router.push('/user/detail')
                } else if (tab.index == '1') {
                    this.$router.push('/user/car')
                } else if (tab.index == '2') {
                    this.$router.push('/user/audit')
                }
            },
            ...mapActions([
//            'commit_audi_createt'
            ])
        },
        computed: {
            ...mapState({
//                get_user_type_list: state => state.get_user_type_list,
            })
        },
        created() {
        },

    }
</script>