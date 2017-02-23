<template>
    <div class="page_right tongji">

        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/tongji' }">数据统计</el-breadcrumb-item>
        </el-breadcrumb>

        <template style="margin-top: 10px">
            <el-tabs :value="activeName" @tab-click="handleClick" class="header-block">
                <el-tab-pane label="新增用户统计" name="/tongji"></el-tab-pane>
                <el-tab-pane label="车库解锁统计" name="/tongji/tongji_cheku"></el-tab-pane>
                <el-tab-pane label="用车统计" name="/tongji/tongji_yongche"></el-tab-pane>
                <el-tab-pane label="运营率统计" name="/tongji/tongji_operate"></el-tab-pane>
                <el-tab-pane label="任务统计" name="/tongji/tongji_task"></el-tab-pane>
                <el-tab-pane label="资产统计" name="/tongji/tongji_zichan"></el-tab-pane>
            </el-tabs>
            <div class="tab-pane">
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
    .tongji .is-active {
        border-bottom: 3px #20a0ff solid;
    }

</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                activeName: '/added'
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {

            handleClick(tab, event) {
                if(tab.index == '0') {
                    this.$router.push('/tongji')
                } else if (tab.index == '1') {
                    this.$router.push('/tongji/tongji_cheku')
                } else if (tab.index == '2') {
                    this.$router.push('/tongji/tongji_yongche')
                } else if (tab.index == '3') {
                    this.$router.push('/tongji/tongji_operate')
                } else if (tab.index == '4') {
                    this.$router.push('/tongji/tongji_task')
                } else if (tab.index == '5') {
                    this.$router.push('/tongji/tongji_zichan')
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
//            console.log(this.$route.path)

        },
        mounted() {
            this.activeName = this.$route.path
//            if(this.$route.path == '/manage/end') {
//                this.activeName = 'second';
//
//            }
        }

    }


</script>