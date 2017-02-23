<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/user/order' }">订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="panel">
            <div class="panel-heading">
                <h6 class="panel-title">订单详情</h6>
                <div class="panel-pos">
                    待付款
                </div>
            </div>

            <div class="panel-body">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div class="grid-content bg-purple">订单编号：201478569252221455</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">用户姓名：18652478547</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">用户电话：18652478547</div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div class="grid-content bg-purple">购买车库：SUV (50,000元)</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">创建时间：2017-12-20 20：30</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">支付时间：2017-12-20 20：30</div>
                    </el-col>
                </el-row>
            </div>

            <div class="panel-heading">
                <h6 class="panel-title">订单日志</h6>
                <div class="panel-pos">
                </div>
            </div>

            <div class="panel-body">
                <template>
                    <el-table :data="userdata" style="width: 100%; margin-top: 20px">
                        <el-table-column prop="time" label="用车时间">
                        </el-table-column>
                        <el-table-column prop="channel" label="支付渠道">
                        </el-table-column>
                        <el-table-column prop="remark" label="操作">
                        </el-table-column>
                    </el-table>
                </template>
            </div>
        </div>
    </div>



</template>




<script>
import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传
    export default {
        data() {
            return {
                 userdata: [
                    {
                        time:'2015-6-15 15:00',
                        channel:'支付宝',
                        remark:'通过支付宝充值10,000元，解锁度20%'
                    },
                    {
                        time:'2015-6-15 15:00',
                        channel:'支付宝',
                        remark:'通过支付宝充值10,000元，解锁度20%'
                    },
                    {
                        time:'2015-6-15 15:00',
                        channel:'支付宝',
                        remark:'通过支付宝充值10,000元，解锁度20%'
                    },
                    {
                        time:'2015-6-15 15:00',
                        channel:'支付宝',
                        remark:'通过支付宝充值10,000元，解锁度20%'
                    }
                ]
            }
        },

        watch: {},
        methods: {

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
<style>
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
</style>