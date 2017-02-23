<template>
    <div class="panel">
        <div class="panel-heading">
            <h6 class="panel-title">用户详情</h6>
            <div class="panel-pos">
                <el-switch v-model="value1" on-text="" off-text="">
                </el-switch>
            </div>
        </div>

        <div class="panel-body">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">用户：张三</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">电话：18652478547</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">会员性别：男</div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">会员来源：APP-Android</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">入会时间：2017-0116 15：06</div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">所在城市：北京</div>
                </el-col>
            </el-row>
        </div>

        <div class="panel-heading">
            <h6 class="panel-title">账户信息</h6>
            <div class="panel-pos">
            </div>
        </div>

        <div class="panel-body">
            <el-row :gutter="20">
                <el-col :span="7">
                    <div class="grid-content bg-purple">账户余额：12,700元</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">充值次数：18次</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">最后充值时间：2017-02014 14:09</div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content bg-purple"><router-link to="/user/detail/balance">查看明细</router-link></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="21">
                    <div class="grid-content bg-purple">预授权：1,000元（冻结中）预计2017-02-05 15：00解冻</div>
                </el-col>
                <el-col :span="2">
                    <div class="grid-content bg-purple"><router-link to="/user/detail/authorization">查看明细</router-link></div>
                </el-col>
            </el-row>
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
                value1:''
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