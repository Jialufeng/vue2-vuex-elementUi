<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage_car_list' }">车辆</el-breadcrumb-item>
            <el-breadcrumb-item>添加车辆</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="forms">
            <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
                <el-row :gutter="30">
                    <el-col :span="12">
                        <el-form-item label="车辆品牌">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="车牌号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="发动机号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="供应商">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="出厂日期">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="停车场">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="交强险保单号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="商业险保单号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="GPS设备编号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="行驶证照片">
                            <el-upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :default-file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="交强险保照片">
                            <el-upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :default-file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-form-item>

                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="车辆型号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="车架号">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="车辆颜色">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="供给成本">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="行驶里程">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="停车位">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="商业保险期限">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="交强保险期限">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="车检时间">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="商业险保照片">
                            <el-upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    :on-preview="handlePreview"
                                    :on-remove="handleRemove"
                                    :default-file-list="fileList">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>

                        </el-form-item>
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
                labelPosition:'right',
                fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
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