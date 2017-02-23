<template>
    <div class="page_right assets_tab">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage_car_list' }">车辆</el-breadcrumb-item>
            <el-breadcrumb-item>车辆详情</el-breadcrumb-item>
        </el-breadcrumb>

        <template style="margin-top: 10px">
            <el-tabs :value="activeName" @tab-click="handleClick" class="header-block">
                <el-tab-pane label="车辆详情" name="/assets_car_tab"></el-tab-pane>
                <el-tab-pane label="保险详情" name="/assets_car_tab/safestDetail"></el-tab-pane>
            </el-tabs>
            <div class="tab-pane">
                <router-view></router-view>
            </div>
        </template>
    </div>
</template>
<style>
    .assets_tab .is-active {
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
                activeName: '/assets_car_tab',
                value1: true,
                form: {
                    name: '',
                },
                labelPosition:'right',
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            handleClick(tab, event) {
                if(tab.index == '0') {
                    this.$router.push('/assets_car_tab')
                } else if (tab.index == '1') {
                    this.$router.push('/assets_car_tab/safestDetail')
                }
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            ...mapActions([])
        },
        computed: {
            ...mapState({
//                get_user_type_list: state => state.get_user_type_list,
            })
        },
        created() {
        }

    }


</script>