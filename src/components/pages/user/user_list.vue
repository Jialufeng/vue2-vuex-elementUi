<template>
    <div class="page_right">

        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">二级</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form ref="form" :model="form">
            <el-row :gutter="35" class="search-block">
                <el-col :span="5">
                    <div class=" bg-purple">
                        <el-form-item label="用户" label-width="50px">
                            <el-input v-model="form.name" size="small"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class=" bg-purple">
                        <el-form-item label="电话" label-width="50px">
                            <el-input v-model="form.name" size="small"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="最后用车时间" label-width="100px">
                            <el-date-picker v-model="form.lasttime" type="daterange">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class=" bg-purple">
                        <el-form-item label="注册时间" label-width="80px">
                            <el-date-picker v-model="form.regtime" type="daterange">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div class=" bg-purple" style="text-align: right">
                        <el-button type="primary" size="small">搜索</el-button>
                    </div>
                </el-col>

            </el-row>
        </el-form>
        <div class="double-t">
            <template>
                <el-table :data="userdata" style="width: 100%; margin-top: 20px">
                    <el-table-column prop="date" label="充值次数">
                        <el-table-column label="剩余余额">
                            <template scope="scope">
                                <p style="margin-left: 10px">{{ scope.row.times }}</p>
                                <p style="margin-left: 10px">{{ scope.row.banlce }}</p>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column prop="date" label="风控审核状态">
                        <el-table-column label="风控审核时间">
                            <template scope="scope">
                                <p style="margin-left: 10px">{{ scope.row.times }}</p>
                                <p style="margin-left: 10px">{{ scope.row.banlce }}</p>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column prop="date" label="最后用车时间">
                        <el-table-column label="注册时间">
                            <template scope="scope">
                                <p style="margin-left: 10px">{{ scope.row.times }}</p>
                                <p style="margin-left: 10px">{{ scope.row.banlce }}</p>
                            </template>
                        </el-table-column>
                    </el-table-column>
                    <el-table-column prop="b" label="操作">
                        <template scope="scope">
                            <el-button @click.native.prevent="details(scope.$index, userdata)" type="text" size="small">
                                查看详情
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
        </div>
    </div>
</template>
<style>

    .el-date-editor--daterange.el-input{
        width: 100% !important;
    }
</style>
<script>


    import moment from 'moment'

    import Select from 'element-ui'


    import {mapState, mapActions} from 'vuex' //

    export default {
        data() {
            return {
                options: [],
                form: {
                    name: '',
                    tel: '',
                    lasttime: '',
                    regtime: '',
                },
                userdata: [
                    {
                        banlce:'20000',
                        times:'2次',
                    },
                    {
                        banlce:'20000',
                        times:'2次',
                    },
                    {
                        banlce:'20000',
                        times:'2次',
                    },
                    {
                        banlce:'20000',
                        times:'2次',
                    }

                ]
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            details(index, rows) {
                this.$router.push({path: '/user/detail', query: {id: rows[index].id}})
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
<style>
    .search-block {
        margin-right: 0 !important;
    }
</style>