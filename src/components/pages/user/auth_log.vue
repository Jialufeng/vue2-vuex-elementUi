<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/user/order' }">用户管理</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/user/detail' }">用户详情</el-breadcrumb-item>
            <el-breadcrumb-item>预授权详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="panel">
            <div class="panel-heading">
                <h6 class="panel-title">预授权日志</h6>
            </div>

            <div class="panel-body">

                <el-row :gutter="35" class="search-block">
                    <el-col :span="6">
                        <div class=" bg-purple">
                            <el-form-item label="类型" label-width="50px">
                                <el-input v-model="form.type" size="small"></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div class=" bg-purple">
                            <el-form-item label="时间" label-width="80px">
                                <el-date-picker v-model="form.time" type="daterange">
                                </el-date-picker>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
                <el-table :data="userdata" style="width: 100%; margin-top: 20px">
                    <el-table-column prop="time" label="时间">
                    </el-table-column>
                    <el-table-column prop="balance" label="金额">
                    </el-table-column>
                    <el-table-column prop="type" label="类型">
                    </el-table-column>
                    <el-table-column prop="oper" label="操作人">
                    </el-table-column>
                    <el-table-column prop="remark" label="备注">
                    </el-table-column>
                </el-table>

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
                form:{
                    type:'1',
                    time:''
                },
                 userdata: [
                    {
                        time:'2015-6-15 15:00',
                        balance:'支9,700续费',
                        type:'解冻',
                        oper:'系统自动',
                        remark:'通过支付宝充值10,000元，解锁度20%'
                    },
                    {
                        time:'2015-6-15 15:00',
                        balance:'支9,700续费',
                        type:'解冻',
                        oper:'系统自动',
                        remark:'通过支付宝充值10,000元，解锁度20%'
                    },
                    {
                        time:'2015-6-15 15:00',
                        balance:'支9,700续费',
                        type:'解冻',
                        oper:'系统自动',
                        remark:'通过支付宝充值10,000元，解锁度20%'
                    },
                    {
                        time:'2015-6-15 15:00',
                        balance:'支9,700续费',
                        type:'解冻',
                        oper:'系统自动',
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