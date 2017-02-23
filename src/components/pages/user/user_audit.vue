<template>
    <div class="panel">
        <div class="panel-heading">
            <h6 class="panel-title">用户资料</h6>
        </div>
        <div class="panel-body used-carinfo">
            <el-row :gutter="20">
                <el-col :span="7">
                    <div class="grid-content bg-purple">审核编号：2017506111155122811</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">用      户：韦小宝</div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content bg-purple">电       话：185****1896</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">性      别：男</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">户籍城市：韦小宝</div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content bg-purple">证件信息：1504269199312262825</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">身份证：</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">驾驶证：</div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content bg-purple">信用卡：</div>
                </el-col>
            </el-row>
        </div>

        <div class="panel-heading">
            <h6 class="panel-title">审核日志</h6>
        </div>
        <div class="panel-body">
            <template>
                <el-table :data="userdata" style="width: 100%; margin-top: 20px">
                    <el-table-column prop="time" label="审核时间">
                    </el-table-column>
                    <el-table-column prop="info" label="审核资料">
                    </el-table-column>
                    <el-table-column prop="user" label="审核人">
                    </el-table-column>
                    <el-table-column prop="result" label="审核结果">
                    </el-table-column>
                    <el-table-column prop="remark" label="备注">
                    </el-table-column>
                </el-table>
            </template>
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
                        info:'身份证，驾驶证',
                        user:'系统自动',
                        result:'审核通过',
                        remark:'-'
                    },
                    {
                        time:'2015-6-15 15:00',
                        info:'身份证，驾驶证',
                        user:'系统自动',
                        result:'审核通过',
                        remark:'-'
                    },
                   {
                        time:'2015-6-15 15:00',
                        info:'身份证，驾驶证',
                        user:'系统自动',
                        result:'审核通过',
                        remark:'-'
                    },
                    {
                        time:'2015-6-15 15:00',
                        info:'身份证，驾驶证',
                        user:'系统自动',
                        result:'审核通过',
                        remark:'-'
                    },
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
            // document.querySelector('#habit').html('aaaaaa');
            
            
        },
         beforeMount: function () {
            console.log("beforeMount");
        },
        mounted: function () {
            
        }

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