<template>
    <div class="page_right">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/base' }">基础设置</el-breadcrumb-item>
            <el-breadcrumb-item>停车场管理</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form ref="form" :model="form">
            <el-row :gutter="35" class="search-block" style="margin-right: 0">
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="供应商名称" label-width="120px">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                
                <el-col :span="2">
                    <div class=" bg-purple" style="text-align: right;margin-bottom: 10px;">
                        <el-button type="primary" >搜索</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-form>
        <div class="search-block" style="padding-bottom: 20px">
            <el-button type="primary" @click="addparking" >新建停车场</el-button>
        </div>

        <template>
            <el-table
                    :data="tableData"
                    style="width: 100%; margin-top: 20px">
                <el-table-column
                        prop="date"
                        label="停车场名称">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="停车场地址">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="操作人">
                </el-table-column>
                <el-table-column
                        prop="time"
                        label="操作时间">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="操作">
                    <template scope="scope">
                        <el-button
                                @click.native.prevent="deleteRow(scope.$index, tableData)"
                                type="text"
                                size="small">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </template>
        <template>
            <div class="pages">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage1"
                        :page-size="100"
                        layout="total, prev, pager, next"
                        :total="1000">
                </el-pagination>
            </div>
        </template>

    </div>
</template>
<style>
    .pages {
        text-align: right;
        margin-top: 20px;
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
                currentPage1:1,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            addparking(){
                this.$router.push({
                    path: '/base/parking/add'
                });
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage1 = val;
                console.log(`当前页: ${val}`);
            },
            deleteRow(index, rows) {
                this.$router.push({
                    path: '/assets/detail',
                    query: {id: rows[index].id}
                });

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