<template>
    <div class="assets_detail">
        <div class="panel">
            <div class="panel-heading">
                <h6 class="panel-title">车辆详情</h6>
            </div>

            <div class="panel-body car_detail_mar">
                <el-form :label-position="labelPosition" label-width="100px" :model="form">
                    <el-row :gutter="30" style="margin-bottom: 0">
                        <el-col :span="8">
                            <el-form-item label="车牌号">
                                冀AT0P13
                            </el-form-item>
                            <el-form-item label="车辆品牌">
                                A6
                            </el-form-item>
                            <el-form-item label="供应商">
                                北辰时间中心
                            </el-form-item>
                            <el-form-item label="车辆颜色">
                                黑色
                            </el-form-item>
                            <el-form-item label="当前位置">
                                A13
                            </el-form-item>
                            <el-form-item label="出厂时间">
                                2016-01-01 15：00
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="车架号">
                                WSHWGBXJLFJJKKSSSS
                            </el-form-item>
                            <el-form-item label="车辆型号">
                                A7
                            </el-form-item>
                            <el-form-item label="供给成本">
                                3000
                            </el-form-item>
                            <el-form-item label="GPS设备编号">
                                412828888
                            </el-form-item>
                            <el-form-item label="总行驶里程">
                                30000km
                            </el-form-item>
                            <el-form-item label="年检时间">
                                30
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="发动机号">
                                5997666
                            </el-form-item>
                            <el-form-item label="行驶证">
                                照片。。
                            </el-form-item>
                            <el-form-item label="平台里程">
                                300KM
                            </el-form-item>
                            <el-form-item label="创建时间">
                                2017-02-22 15:00
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>

            </div>
        </div>
        <div class="panel">
            <div class="panel-heading">
                <h6 class="panel-title">车辆日志</h6>
            </div>
            <div class="panel-body">
                <p class="car_badges">
                    <span><i class="badges badges1"></i> 闲置</span>
                    <span><i class="badges badges2"></i> 年检</span>
                    <span><i class="badges badges3"></i> 会员</span>
                    <span><i class="badges badges4"></i> 游客</span>
                    <span><i class="badges badges5"></i> 保险</span>
                    <span><i class="badges badges6"></i> 维修</span>
                    <span><i class="badges badges7"></i> 失联</span>
                </p>
                <div class="car_info">
                    <ul>
                        <li v-for="item in date" @click="carDetail_list(item)">
                            <div class="car_flex">
                                <span class="car_flex_left">{{item.date}} 日</span>
                                <p class="car-info-icon">
                                    <span class="badges1">闲</span>
                                    <span class="badges2">年</span>
                                    <span class="badges3">会</span>
                                    <span class="badges4">游</span>
                                    <span class="badges5">保</span>
                                    <span class="badges6">维</span>
                                    <span class="badges7">失</span>
                                </p>
                            </div>

                            <p class="kms">行驶：{{item.km}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <el-dialog title="车辆日志(2017-01-01)" v-model="dialog" size="small">
            <el-table :data="gridData">
                <el-table-column property="date" label="时间" width="150"></el-table-column>
                <el-table-column property="address" label="类型"></el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog = false">取 消</el-button>
                <el-button type="primary" @click="dialog = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style>
    .car_detail_mar .el-form-item {
        margin-bottom: 0;
    }

    .car_detail_mar .el-form-item__label {
        padding: 8px 12px 8px 0;
    }

    .car_detail_mar .el-form-item__content {
        line-height: 30px;
    }

    .car_info {
        overflow: hidden;
        width: 922px;
        margin: 0 auto;
    }

    .car_badges {
        text-align: right;
        padding: 15px 50px;
    }

    .car_info li {

        float: left;
        width: 130px;
        height: 80px;
        padding-top: 10px;
        background-color: #ffffff;
        /* border-width: 0 0 1px 1px; */
        /* border-color: #F1EBE4; */
        /* border-style: solid; */
        border: 1px #F1EBE4 solid;
        box-sizing: border-box;
        text-align: left;
        padding-left: 15px;
        cursor: pointer;
    }
    .car_info li:hover {
        background: #F5F0F0;
    }

    .car-info-icon {
        font-size: 12px;
        flex: 3;
    }

    .car-info-icon span {
        width: 16px;
        height: 16px;
        text-align: center;
        border-radius: 50%;
        display: inline-block;
        line-height: 16px;
        color: #fff;
        transform: scale(0.8);
        margin-left: -3px;
    }

    .car_flex {
        display: flex;
        height: 40px;
    }

    .car_flex_left {
        flex: 2;
        font-size: 13px;
    }

    .kms {
        font-size: 13px;
        color: #999;
    }

    .badges {
        width: 5px;
        height: 5px;
        border-radius: 50px;
        display: inline-block;
        vertical-align: middle;
    }

    .badges1 {
        background: #03a5ee;
    }

    .badges2 {
        background: #f2463a;
    }

    .badges3 {
        background: #4cb04d;
    }

    .badges4 {
        background: #7d8ad8;
    }

    .badges5 {
        background: #48b6ad;
    }

    .badges6 {
        background: #e7427a;
    }

    .badges7 {
        background: #f9ca58;
    }


</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传

    export default {
        data() {
            return {
                value1: true,
                form: {
                    name: '',
                },
                labelPosition: 'right',
                dialog: false,
                gridData: [{
                    date: '08:00-09:00',
                    address: '闲置'
                }, {
                    date: '08:00-09:00',
                    address: '年检'
                }, {
                    date: '08:00-09:00',
                    address: '闲置'
                }, {
                    date: '08:00-09:00',
                    address: '会员使用'
                }],
                date: [
                    {date: 1, km: '100Km', o1: true, o2: true, o3: true, o4: true, o5: true, o6: true, o7: true},
                    {date: 2, km: '100Km',},
                    {date: 3, km: '100Km',},
                    {date: 4, km: '100Km',},
                    {date: 5, km: '100Km',},
                    {date: 6, km: '100Km',},
                    {date: 7, km: '100Km',},
                    {date: 8, km: '100Km',},
                    {date: 9, km: '100Km',},
                    {date: 10, km: '100Km',},
                    {date: 11, km: '100Km',},
                    {date: 12, km: '100Km',},
                    {date: 13, km: '100Km',},
                    {date: 14, km: '100Km',},
                    {date: 15, km: '100Km',},
                    {date: 16, km: '100Km',},
                    {date: 17, km: '100Km',},
                    {date: 18, km: '100Km',},
                    {date: 19, km: '100Km',},
                    {date: 20, km: '100Km',},
                    {date: 21, km: '100Km',},
                    {date: 22, km: '100Km',},
                    {date: 23, km: '100Km',},
                    {date: 24, km: '100Km',},
                    {date: 25, km: '100Km',},
                    {date: 26, km: '100Km',},
                    {date: 27, km: '100Km',},
                    {date: 28, km: '100Km',},
                    {date: 29, km: '100Km',},
                    {date: 30, km: '100Km',},
                    {date: 31, km: '100Km',},
                    {date: 32, km: '100Km',},
                    {date: 33, km: '100Km',},
                    {date: 34, km: '100Km',},
                    {date: 35, km: '100Km',}]
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            carDetail_list(num) {
                console.log(num);
                this.dialog = true;
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