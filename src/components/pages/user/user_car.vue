<template>
    <div class="panel">
        <div class="panel-heading">
            <h6 class="panel-title">用户习惯</h6>
        </div>

        <div class="panel-body">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="used-data">
                        <p class="used-times">用车次数<span>35次</span></p>
                        <p class="used-mileage">
                            累计里程<span>982.06KM</span>
                        </p>
                    </div>
                </el-col>
                <el-col :span="9">
                    <div id="habit" style="width: 350px;height:200px;"></div>
                </el-col>
                <el-col :span="9">
                    <div id="usedType" style="width: 350px;height:200px;"></div>
                </el-col>
            </el-row>
        </div>

        <div class="panel-heading">
            <h6 class="panel-title">车库信息</h6>
        </div>
        <div class="panel-body used-carinfo">
            <el-row :gutter="20">
                <el-col :span="7">
                    <div class="grid-content bg-purple">车位名称：临时车库</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">启用车型：—</div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content bg-purple">启用时间：2017-01-21 09：40：00</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">行驶里程：156.01KM</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">使用次数：15次</div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content bg-purple">上次用车：2017-01-21 09：40：00</div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="7">
                    <div class="grid-content bg-purple">车位名称：四门轿车</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">启用车型：—</div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content bg-purple">启用时间：2017-01-21 09：40：00</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">行驶里程：156.01KM</div>
                </el-col>
                <el-col :span="7">
                    <div class="grid-content bg-purple">使用次数：15次</div>
                </el-col>
                <el-col :span="10">
                    <div class="grid-content bg-purple">上次用车：2017-01-21 09：40：00</div>
                </el-col>
            </el-row>
        </div>

        <div class="panel-heading">
            <h6 class="panel-title">用车明细</h6>
        </div>
        <div class="panel-body double-t">
            <template>
                <el-table :data="userdata" style="width: 100%; margin-top: 20px">
                    <el-table-column prop="usedtime" label="用车时间">
                    </el-table-column>
                    <el-table-column label="车牌号">
                        <el-table-column label="车型">
                            <template scope="scope">
                                <p style="margin-left: 10px">{{ scope.row.times }}</p>
                                <p style="margin-left: 10px">{{ scope.row.banlce }}</p>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column prop="usedtime" label="用车时间">
                    </el-table-column>
                    <el-table-column prop="date" label="累计行驶里程">
                    </el-table-column>
                    <el-table-column prop="date" label="用车状态">
                    </el-table-column>
                    <el-table-column prop="state" label="消费金额">
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>




</template>




<script>
    import echarts from 'echarts'
    import moment from 'moment'
    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传

    let habitOpt = {
        title : {
            text: '用户习惯',
            // subtext: '纯属虚构',
            x:'center'
        },
        color:['#717acc','#59cfff','#8ed16d','#ffb761','#fe7458'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            top:'60px',
            data: ['0-50KM','51-100KM','101-300KM','301-500KM','500KM+']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'0-50KM'},
                    {value:310, name:'51-100KM'},
                    {value:234, name:'101-300KM'},
                    {value:135, name:'301-500KM'},
                    {value:1548, name:'500KM+'}
                ],
                // itemStyle: {
                //     emphasis: {
                //         shadowBlur: 10,
                //         shadowOffsetX: 0,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     }
                // }
            }
        ]
    };
    let typeOpt = {
        title : {
            text: '惯用车型',
            // subtext: '纯属虚构',
            x:'center'
        },
        color:['#717acc','#59cfff','#8ed16d','#ffb761','#fe7458'],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            top:'60px',
            data: ['奔驰 S320L','奔驰GLE','奥迪A7','奥迪Q7','特斯拉']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'奔驰 S320L'},
                    {value:310, name:'奔驰GLE'},
                    {value:234, name:'奥迪A7'},
                    {value:135, name:'奥迪Q7'},
                    {value:1548, name:'特斯拉'}
                ],
                // itemStyle: {
                //     emphasis: {
                //         shadowBlur: 10,
                //         shadowOffsetX: 0,
                //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //     }
                // }
            }
        ]
    };

    export default {
        data() {
            return {
                // activeName: 'first'
                userdata: [
                    {
                        user:'王慧元',
                        tel:'18547569854',
                        garage:'新能源-tesla Model S',
                        banlce:'20000',
                        times:'2次',
                        state:'正常'
                    },
                    {
                        user:'王慧元',
                        tel:'18547569854',
                        garage:'新能源-tesla Model S',
                        banlce:'20000',
                        times:'2次',
                        state:'正常'
                    },
                    {
                        user:'王慧元',
                        tel:'18547569854',
                        garage:'新能源-tesla Model S',
                        banlce:'20000',
                        times:'2次',
                        state:'正常'
                    },
                    {
                        user:'王慧元',
                        tel:'18547569854',
                        garage:'新能源-tesla Model S',
                        banlce:'20000',
                        times:'2次',
                        state:'正常'
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
            // document.querySelector('#habit').html('aaaaaa');
            
            
        },
         beforeMount: function () {
            console.log("beforeMount");
        },
        mounted: function () {
            this.eHabit = echarts.init(document.querySelector('#habit'));
            this.eType = echarts.init(document.querySelector('#usedType'));
            this.eHabit.setOption(habitOpt);
            this.eType.setOption(typeOpt);
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
    
    .used-data {
        border-right: 1px solid #e4ebf1;
        min-width: 210px;
    }
    
    .used-times span,
    .used-mileage span {
        color: #efa024;
        font-size: 37px;
        display: block;
        margin-top: 15px;
    }
    
    .used-mileage {
        margin-top: 55px;
    }
    
    .used-mileage span {
        color: #11c038;
    }
    
    .used-carinfo {
        padding: 0;
        border-left: 1px solid #e4ebf1;
        border-right: 1px solid #e4ebf1;
    }
    
    .used-carinfo .el-row {
        margin: 0 !important;
        padding: 16px 20px;
        line-height: 26px;
        border-bottom: 1px solid #e4ebf1;
    }
</style>