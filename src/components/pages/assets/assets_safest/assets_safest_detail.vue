<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage_car_list' }">保险管理</el-breadcrumb-item>
            <el-breadcrumb-item v-if="!is_step">车辆出险-step1</el-breadcrumb-item>
            <el-breadcrumb-item v-else>车辆出险-step2</el-breadcrumb-item>
        </el-breadcrumb>

        <template v-if="!is_step">
            <div class="forms">
                <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
                    <el-row :gutter="30">
                        <el-col :span="24">
                            <el-form-item label="用户">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="电话">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="出险车辆">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>

                        </el-col>
                    </el-row>
                    <el-row :span="12">
                        <div class="foot-btn">
                            <el-button type="primary" @click="dialog = true">保存</el-button>
                            <el-button>取消</el-button>

                        </div>
                    </el-row>
                </el-form>
            </div>
            <el-dialog title="用车确认" v-model="dialog" size="tiny">
                <el-form label-position="right" label-width="120px">
                    <el-form-item label="用户：">
                        666
                    </el-form-item>
                    <el-form-item label="电话：">
                        6666
                    </el-form-item>
                    <el-form-item label="车型：">
                        5666
                    </el-form-item>
                    <el-form-item label="品牌：">
                        5666
                    </el-form-item>
                    <el-form-item label="车牌号：">
                        5666
                    </el-form-item>
                    <el-tag type="danger" style="display: block;
    text-align: center;">请确认用户用车信息是否正确
                    </el-tag>

                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialog = false">取 消</el-button>
                <el-button type="primary" @click="safest_step">确 定</el-button>
            </span>
            </el-dialog>
        </template>
        <template v-if="is_step">
            <div class="forms">
                <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
                    <el-row :gutter="30">
                        <el-col :span="8">
                            <el-form-item label="出险地点">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="行驶方向">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="车损程度">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="伤亡情况">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="是否救援">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="是否已报警">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="任务处理">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>

                        </el-col>
                        <el-col :span="16">
                            <el-row :gutter="30">
                                <el-col :span="12">
                                    <el-form-item label="用户名">
                                        666
                                    </el-form-item>
                                </el-col>

                                <el-col :span="12">
                                    <el-form-item label="电话">
                                        18310014515
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="车辆品牌">
                                        特斯拉
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="车辆型号">
                                        Model S
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="车牌号">
                                        冀AT0P13
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="供应商">
                                        诚信租聘中心
                                    </el-form-item>
                                </el-col>
                                <el-col :span="24">
                                    <el-form-item label="联系方式">
                                        张三(18310014515),李四(18310014515)
                                    </el-form-item>

                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="保险公司">
                                        平安人寿
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="出险联系人">
                                        李四(18310014515)
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="交强险保单号">
                                        李四(18310014515)
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="商业险保单号">
                                        李四(18310014515)
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="交强保险期限">
                                        2016-01-01至2017-01-01
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="商业保险期限">
                                        2016-01-01至2017-01-01
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="交强险保单">
                                        图片。。
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="商业险保单">
                                        图片。。
                                    </el-form-item>
                                </el-col>

                            </el-row>


                        </el-col>
                    </el-row>
                    <el-row :span="12">
                        <div class="foot-btn">
                            <el-button type="primary">保存</el-button>
                            <el-button>取消</el-button>

                        </div>
                    </el-row>
                </el-form>
            </div>
        </template>
    </div>
</template>
<style>
    .pages {
        text-align: right;
        margin-top: 20px;
    }

    .forms {
        background: #fff;
        margin-top: 20px;
        padding: 15px 20px;
    }

    .foot-btn {
        text-align: center;
        border-top: 1px #ccc solid;
        padding-top: 20px;
    }


</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传

    export default {
        data() {
            return {
                activeName: 'first',
                value1: true,
                form: {
                    name: '',
                },
                labelPosition: 'right',
                dialog: false,
                is_step: false

            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            safest_step() {
                this.dialog = true;
                this.is_step = true;
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