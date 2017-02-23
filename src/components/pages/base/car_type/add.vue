<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage_car_list' }">车辆</el-breadcrumb-item>
            <el-breadcrumb-item>车辆详情</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="forms">
            <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
                <el-row :gutter="30">
                    <el-col :span="12">
                        <el-form-item label="车辆品牌">
                            <el-col :span="21">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="车辆型号">
                            <el-col :span="21">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="油箱体积">
                            <el-col :span="21">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                            <el-col class="line" :span="3">&nbsp;&nbsp;L</el-col>
                        </el-form-item>
                        <el-form-item label="车型图片">
                            <el-upload action="//jsonplaceholder.typicode.com/posts/" type="drag" :thumbnail-mode="true" :on-preview="handlePreview"
                                :on-remove="handleRemove" :default-file-list="fileList">
                                <i class="el-icon-upload"></i>
                                <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="基础费用">
                            <el-col :span="21">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                            <el-col class="line" :span="3">&nbsp;&nbsp;元</el-col>
                        </el-form-item>
                        <el-form-item label="价格方案">
                            <div class="price-plan">
                                <!--<el-form-item label=">50KM ≤100KM">-->
                                <el-form-item class="price-list">
                                    <el-col class="line" :span="5">>50KM</el-col>
                                    <el-col class="line" :span="5">≤100KM</el-col>
                                    <el-col :span="8">
                                        <el-input v-model="form.mail"></el-input>
                                    </el-col>
                                    <el-col class="line" :span="4">&nbsp;&nbsp;&nbsp;KM/元</el-col>
                                </el-form-item>
                                <el-form-item class="price-list">
                                    <el-col class="line" :span="5">>50KM</el-col>
                                    <el-col class="line" :span="5">≤100KM</el-col>
                                    <el-col :span="8">
                                        <el-input v-model="form.mail"></el-input>
                                    </el-col>
                                    <el-col class="line" :span="4">&nbsp;&nbsp;&nbsp;KM/元</el-col>
                                </el-form-item>
                                <el-form-item class="price-list">
                                    <el-col class="line" :span="5">>50KM</el-col>
                                    <el-col class="line" :span="5">≤100KM</el-col>
                                    <el-col :span="8">
                                        <el-input v-model="form.mail"></el-input>
                                    </el-col>
                                    <el-col class="line" :span="4">&nbsp;&nbsp;&nbsp;KM/元</el-col>
                                </el-form-item>
                                <el-form-item class="price-list">
                                    <el-col class="line" :span="5">>50KM</el-col>
                                    <el-col class="line" :span="5">≤100KM</el-col>
                                    <el-col :span="8">
                                        <el-input v-model="form.mail"></el-input>
                                    </el-col>
                                    <el-col class="line" :span="4">&nbsp;&nbsp;&nbsp;KM/元</el-col>
                                </el-form-item>
                            </div>
                        </el-form-item>

                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="8">
                        <el-form-item>
                            <el-button type="primary">确定</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                    </el-col>
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
    
    .price-plan {
        border: 1px solid #e7eaef;
        background: #f8f9fb;
        overflow: hidden;
        padding: 15px 20px;
        color: #444547;
    }
    
    .price-plan .el-form-item__content {
        font-size: 16px;
    }
    
    .price-list {
        overflow: hidden;
        padding: 5px 0;
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