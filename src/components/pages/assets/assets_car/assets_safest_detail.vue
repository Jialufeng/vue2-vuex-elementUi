<template>
    <div class="assets_detail">
        <div class="panel">
            <div class="panel-heading">
                <h6 class="panel-title">保险详情</h6>
                <div class="panel-pos" style="top: 4px">
                    <el-button type="text" @click="continues">保险续保</el-button>
                </div>
            </div>

            <div class="panel-body car_detail_mar">
                <el-form :label-position="labelPosition" label-width="100px" :model="form">
                    <el-row :gutter="30" style="margin-bottom: 0">
                        <el-col :span="12">
                            <el-form-item label="交强险保单号">
                                10141424434
                            </el-form-item>
                            <el-form-item label="交强险有效期">
                                2016-10-01
                            </el-form-item>
                            <el-form-item label="交强险保单">
                                照片。。。
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="商业保险单号">
                                16876876876
                            </el-form-item>
                            <el-form-item label="商业险有效期">
                                2017-10-10
                            </el-form-item>
                            <el-form-item label="商业险保单">
                                照片。。。
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>

            </div>
        </div>
        <div class="panel">
            <div class="panel-heading">
                <h6 class="panel-title">保险日志</h6>
            </div>
            <div class="panel-body">
                <el-table :data="gridData">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="address" label="操作"></el-table-column>
                </el-table>
            </div>
        </div>
        <el-dialog title="车辆续保" v-model="dialog" size="small">
            <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="交强险保单号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="交强险保险期">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="商业险保单号">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="商业险保险期">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                    <el-form-item label="交强险照片" label-width="120px">
                        <el-upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :default-file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="商业险照片" label-width="120px">
                        <el-upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :default-file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>

                </el-form>
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
                    date: '2017-01-01',
                    address: '闲置'
                }, {
                    date: '2017-01-01',
                    address: '年检'
                }, {
                    date: '2017-01-02',
                    address: '闲置'
                }, {
                    date: '2017-02-03',
                    address: '会员使用'
                }],
                fileList: []
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            continues() {
                this.dialog = true;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
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