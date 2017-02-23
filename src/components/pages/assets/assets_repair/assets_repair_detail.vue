<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage_car_list' }">维修</el-breadcrumb-item>
            <el-breadcrumb-item>新建维修</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="forms">
            <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
                <el-row :gutter="30">
                    <el-col :span="24">
                        <el-form-item label="维修车辆">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="维修原因">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="维修厂商">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="维修地点">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="维修时间">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                    </el-col>
                </el-row>
                <el-row :span="24">
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
                fileList: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }]
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