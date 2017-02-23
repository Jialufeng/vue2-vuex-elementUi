<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/base/parking' }">停车场管理</el-breadcrumb-item>
            <el-breadcrumb-item>新建停车场</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="forms">
            <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
                <el-row :gutter="30">
                    <el-col :span="12">
                        <el-form-item label="停车场名称">
                            <el-col :span="21">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="停车场地址">
                            <el-col :span="21">
                                <el-input v-model="form.name"></el-input>
                            </el-col>
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