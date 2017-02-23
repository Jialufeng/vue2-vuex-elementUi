<template>
    <div class="page_right task_tab">

        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage' }">管家任务</el-breadcrumb-item>
        </el-breadcrumb>

        <template style="margin-top: 10px">
            <el-tabs :value="activeName" @tab-click="handleClick" class="header-block">
                <el-tab-pane label="待处理" name="/manage"></el-tab-pane>
                <el-tab-pane label="处理中" name="/manage/pending"></el-tab-pane>
                <el-tab-pane label="已结束" name="/manage/end"></el-tab-pane>
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
     .el-col {
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
    .tab-pane .el-button {
        font-size: 12px;
    }

</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传

    export default {
        data() {
            return {
                activeName: '/manage'
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {

            handleClick(tab, event) {
                if(tab.index == '0') {
                    this.$router.push('/manage')
                } else if (tab.index == '1') {
                    this.$router.push('/manage/pending')
                } else if (tab.index == '2') {
                    this.$router.push('/manage/end')
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
            console.log(this.$route.path)

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