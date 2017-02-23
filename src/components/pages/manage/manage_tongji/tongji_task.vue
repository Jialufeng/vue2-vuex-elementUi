<template>
    <div class="tongji_added">
        <div class="tongji_back">
            <div class="search-top">
                <span class="demonstration">时间 </span>
                <template v-if="types == '1' ">
                    <el-date-picker
                            v-model="value"
                            type="date"
                            format="yyyy-MM-dd"
                            placeholder="选择日"
                            :editable="false"
                            @change="on_selectDate" >
                    </el-date-picker>
                </template>
                <template v-if="types == '2'">
                    <el-date-picker
                            v-model="value"
                            type="week"
                            format="yyyy 第 WW 周"
                            placeholder="选择周"
                            :editable="false"
                            @change="on_selectDate">
                    </el-date-picker>
                </template>
                <template v-if="types == '3'" >
                    <el-date-picker
                            v-model="value"
                            type="month"
                            placeholder="选择月"
                            :editable="false"
                            @change="on_selectDate">
                    </el-date-picker>
                </template>

                <!--<el-button type="primary">主要按钮</el-button>-->
                <el-radio-group v-model="radio3" @change="selectDate">
                    <el-radio-button label="按日"></el-radio-button>
                    <el-radio-button label="按周"></el-radio-button>
                    <el-radio-button label="按月"></el-radio-button>
                </el-radio-group>

                <span class="demonstration" style="margin-left: 20px">任务 </span>
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

        title: {
//            text: '新增用户统计'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['送车任务', '取车任务']
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
//                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['01-02', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08', '01-08']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '送车',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210]
            },
            {
                name: '取车任务',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210, 210]
            },

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
                select_val:'',

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
            selectDate() {
                this.value = '';
                this.radio3 == '按日' ?  this.types = '1' : this.radio3 == '按周' ? this.types = '2' : this.types = '3'
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