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
                        <el-form-item label="供应商全称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="联系人">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="联系人">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="联系邮箱">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="保险公司">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="供应商简称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-col :span="12">
                            <el-form-item label="出险联系人">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="联系电话">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>

                    </el-col>
                    <el-col :span="24">
                        <el-col :span="12">
                            <el-form-item label="合作维修厂">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="联系电话">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                        </el-col>
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
                labelPosition: 'right',
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