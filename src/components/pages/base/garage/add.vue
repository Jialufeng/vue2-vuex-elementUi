<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/base/garage' }">车库管理</el-breadcrumb-item>
            <el-breadcrumb-item>新建车库</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="panel">
            <div class="panel-heading">
                <h6 class="panel-title">新建车库</h6>
            </div>
            <div class="panel-body">
                <div class="forms">
                    <el-form ref="form" :model="form" label-width="120px" :label-position="labelPosition">
                        <el-row :gutter="30">
                            <el-col>
                                <el-form-item label="车库名称">
                                    <el-col :span="10">
                                        <el-input v-model="form.name"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="解锁价格">
                                    <el-col :span="10">
                                        <el-input v-model="form.name"></el-input>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="车库车型">
                                    <el-col :span="11" class="cartype-moudel">
                                        <div class="panel-heading cartype-panel">
                                            <h6 class="panel-title">已选车型</h6>
                                        </div>
                                        <div class="panel-body">
                                            <ul class="type-list">
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                    <em class="rem"></em>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                    <em class="rem"></em>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                    <em class="rem"></em>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                    <em class="rem"></em>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                    <em class="rem"></em>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                    <em class="rem"></em>
                                                </li>
                                            </ul>
                                        </div>
                                    </el-col>
                                    <el-col :span="11" class="cartype-moudel">
                                        <div class="panel-heading cartype-panel">
                                            <h6 class="panel-title">未选车型</h6>
                                        </div>
                                        <div class="panel-body">
                                            <ul class="type-list">
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                </li>
                                                <li>
                                                    <div class="img-icon"><img src="/static/images/temp.jpg" alt=""></div>
                                                    <p class="name">奔驰SLC</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </el-col>
                                </el-form-item>
                            </el-col>
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
    .cartype-moudel{
        margin-right: 20px;
    }
    .cartype-moudel .panel-body{
        padding:10px;
    }
    .cartype-panel{
        background: #f5f6f8;
        color: #98999b;
        padding: 0 10px;
        margin: 0;
    }
    .cartype-panel .panel-title{
        font-size: 14px;
    }
    .type-list{
    }
    .type-list li{
        width: 203px;
        display: inline-block;
        position: relative;
        margin: 5px 6px;
    }
    .img-icon{
        width:100%;
        height: 114px;
        border: 1px solid #e7ecf0;
        
    }
    .img-icon img{
        width: 100%;
        height: 100%;
    }
    .type-list .name{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .type-list .rem{
        width: 17px;
        height: 17px;
        background: url(/static/images/remove.png);
        position: absolute;
        right: -8px;
        top: -8px;
        cursor: pointer;
    }
</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' // 上传

    export default {
        data() {
            return {
                form:{
                    name:'abcd'
                },
                labelPosition:'right',
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