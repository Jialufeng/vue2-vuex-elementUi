<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage_stock' }">库存</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="tongji_back">
            <div class="search-top">
                <span class="demonstration">时间 </span>
                <el-date-picker
                        v-model="value"
                        type="month"
                        placeholder="选择月"
                        :editable="false"
                        @change="on_selectDate">
                </el-date-picker>


                <span class="demonstration" style="margin-left: 20px">车辆 </span>
                <el-select v-model="select_val" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <div style="overflow: auto">
                <div id="added" style="width: 2000px; height: 600px"></div>
            </div>
        </div>
    </div>
</template>
<style>
    .pages {
        text-align: right;
        margin-top: 20px;
    }

    .tongji_back {
        background: #fff;
        border: 1px #e4ebf1 solid;
        margin-top: 20px;
        padding-top: 20px;
    }

    .search-top {
        padding: 0 30px;
        display: flex;
    }

    .demonstration {
        margin-right: 15px;
        margin-top: 8px;
    }

    .el-radio-group .is-active {
        border-bottom: 0;
    }

    .el-radio-group {
        margin-left: 20px;
    }

</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'

    import echarts from 'echarts'


    import {mapState, mapActions} from 'vuex'

    let option = {
        color:['#717acc','#59cfff','#8ed16d','#ffb761','#fe7458'],

        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['会员使用','安全','非会员使用','不可使用','闲置']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data: ['01-02', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08']

            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'会员使用',
                type:'bar',
                stack: '广告',
                data: [120, 132, 101, 134, 90, 230, 20, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210]

            },
            {
                name:'安全',
                type:'bar',
                stack: '广告',
                data: [10, 13, 1, 134, 90, 23, 21, 20, 210, 210, 210, 210, 20, 210, 21, 210, 210, 10, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210]

            },
            {
                name:'非会员使用',
                type:'bar',
                stack: '广告',
                data: [20, 132, 101, 134, 90, 30, 210, 210, 210, 20, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210]

            },
            {
                name:'不可使用',
                type:'bar',
                stack: '广告',
                data: [10, 132, 101, 134, 90, 20, 210, 210, 21, 210, 210, 210, 210, 210, 210, 210, 210, 210, 20, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210]

            },
            {
                name:'闲置',
                type:'bar',
                stack: '广告',
                data: [120, 132, 101, 134, 90, 230, 210, 210, 10, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210]

            },
//            {
//                name:'搜索引擎',
//                type:'bar',
//                data:[862, 1018, 964, 1026, 1679, 1600, 1570],
//                markLine : {
//                    lineStyle: {
//                        normal: {
//                            type: 'dashed'
//                        }
//                    },
//                    data : [
//                        [{type : 'min'}, {type : 'max'}]
//                    ]
//                }
//            }
        ]
    };



    export default {
        data() {
            return {
                value: '',
                radio3: '按日',
                types: '1', // 1 日，2周， 3 月
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                select_val: '',

            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            _initChart() {
                this.myChart = echarts.init(document.querySelector('#added'));
                this.myChart.setOption(option);

            },

            on_selectDate() {
                console.log(this.value);
            },
            ...mapActions([])
        },
        computed: {
            ...mapState({
//                get_user_type_list: state => state.get_user_type_list,
            })
        },
        created() {
        },
        mounted() {
            this._initChart()

        },
        beforeMount() {

        }

    }


</script>