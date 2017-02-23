<template>
    <div class="page_right task-detail">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage' }">任务管理</el-breadcrumb-item>
            <el-breadcrumb-item>任务详情</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="panel">
            <div class="panel-heading">
                <h6 class="panel-title">用户信息</h6>
                <div class="panel-pos" style="top: 4px">
                    <el-button type="text">转派客服</el-button>
                    lufeng
                </div>
            </div>

            <div class="panel-body">
                <el-row style="margin-bottom: 0">
                    <el-col :span="8">
                        <div class="">姓名：xxx</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="">电话：18310014515</div>
                    </el-col>
                    <el-col :span="8">
                        <div class="">车位：suv,四门轿车</div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div class="day-line">
            <span class="day-line-num">用车 5 天</span>
        </div>

        <el-row :gutter="30">
            <el-col :span="12">
                <div class="panel">
                    <div class="panel-heading">
                        <h6 class="panel-title">送车任务</h6>
                        <span class="panel-pos">
                            已完成
                        </span>
                    </div>

                    <div class="panel-body task-detail-form">
                        <el-form :label-position="labelPosition" label-width="120px" :model="form_send">
                            <el-form-item label="预计送车时间">
                                <el-date-picker
                                        v-model="form_send.time"
                                        type="date"
                                        placeholder="选择日期"
                                        :picker-options="pickerOptions0">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="预计送车地点">
                                <el-input v-model="form_send.type"></el-input>
                            </el-form-item>
                            <el-form-item label="负责管家">
                                <el-select v-model="form_send.operate" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="预约车型">
                                <el-select v-model="form_send.operate" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="交接单">
                                <el-input v-model="form_send.type"></el-input>
                            </el-form-item>
                            <el-form-item label="备注" prop="desc">
                                <el-input type="textarea" v-model="form_send.type"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-col>
            <el-col :span="12" style="margin: 0px">
                <div class="panel">
                    <div class="panel-heading">
                        <h6 class="panel-title">取车任务</h6>
                        <span class="panel-pos">
                            已完成
                        </span>
                    </div>

                    <div class="panel-body task-detail-form">
                        <el-form :label-position="labelPosition" label-width="110px" :model="form_take">
                            <el-form-item label="预计送车时间">
                                <el-date-picker
                                        v-model="form_take.time"
                                        type="date"
                                        placeholder="选择日期"
                                        :picker-options="pickerOptions0">
                                </el-date-picker>
                            </el-form-item>
                            <el-form-item label="预计送车地点">
                                <el-input v-model="form_take.type"></el-input>
                            </el-form-item>
                            <el-form-item label="负责管家">
                                <el-select v-model="form_take.operate" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="预约车型">
                                <el-select v-model="form_take.operate" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="任务处理">
                                <el-radio-group v-model="form_take.task">
                                    <el-radio label="跟进中"></el-radio>
                                    <el-radio label="确认还车"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="交接单">
                                <el-input v-model="form_take.type"></el-input>
                            </el-form-item>
                            <el-form-item label="备注" prop="desc">
                                <el-input type="textarea" v-model="form_take.type"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row :gutter="30">
            <el-col :span="12">
                <div class="panel">
                    <div class="panel-heading">
                        <h6 class="panel-title">送车日志</h6>

                    </div>

                    <div class="panel-body task-detail-form">
                        <el-steps :space="60" direction="vertical" :active="1">
                            <el-step title="2016-12-01  666" description="这是一段很长很长很长的描述性文字"></el-step>
                            <el-step title="2016-12-01  666" description="这是一段很长很长很长的描述性文字"></el-step>
                            <el-step title="2016-12-01  666" description="这是一段很长很长很长的描述性文字"></el-step>
                        </el-steps>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="panel">
                    <div class="panel-heading">
                        <h6 class="panel-title">送车日志</h6>

                    </div>

                    <div class="panel-body task-detail-form">
                        <el-steps :space="60" direction="vertical" :active="1">
                            <el-step title="2016-12-01  666" description="这是一段很长很长很长的描述性文字"></el-step>
                            <el-step title="2016-12-01  666" description="这是一段很长很长很长的描述性文字"></el-step>
                            <el-step title="2016-12-01  666" description="这是一段很长很长很长的描述性文字"></el-step>
                        </el-steps>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .day-line {
        width: 100%;
        height: 2px;
        background: #e1e2e4;
        margin: 31px 0;
        position: relative;
    }

    .day-line-num {
        padding: 5px 12px;
        color: #13ce66;
        display: inline-block;
        border-radius: 10px;
        background: #fff;
        border: 1px #e5eaf0 solid;
        position: absolute;
        left: 50%;
        margin-left: -48px;
        top: -15px;
    }

    .task-detail-form .el-form-item {
        padding: 0 50px;
    }

    .task-detail-form .el-step__head {
        width: 12px;
        text-indent: -999em;
        height: 12px;
    }

    .task-detail-form .el-step__line.is-vertical {
        top: 14px;
        left: 7px;
    }

</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传

    export default {
        data() {
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                activeName: 'first',
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
                labelPosition: 'right',
                form_send: {
                    time: '',
                    type: '',
                    operate:''
                },
                form_take: {
                    time: '',
                    region: '',
                    type: '',
                    operate:'',
                    task:''

                }
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {

            handleClick(tab, event) {
                console.log(tab.index);
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

        },

    }


</script>