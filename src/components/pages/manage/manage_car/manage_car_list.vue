<template>
    <div class="page_right manage_car">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage_car_list' }">用车信息</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :model="form">
            <el-row :gutter="35" class="search-block" style="margin-right: 0">
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="用户姓名" label-width="80px">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="手机号码" label-width="80px">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="车牌号" label-width="80px">
                            <el-input v-model="form.carNum"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="车库" label-width="80px">
                            <el-select v-model="form.garage" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="结算日期" label-width="80px">
                            <el-date-picker
                                    v-model="form.times"
                                    type="date"
                                    placeholder="选择日期"
                                    >
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class=" bg-purple" style="text-align: right">
                        <el-button type="primary">搜索</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-form>

        <template>
            <el-table
                    :data="tableData"
                    style="width: 100%; margin-top: 20px">
                <el-table-column
                        prop="date"
                        label="用户">
                    <el-table-column
                            prop="name"
                            label="电话">
                    </el-table-column>
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="车牌号">
                    <el-table-column
                            prop="name"
                            label="车型">
                    </el-table-column>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="车库">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="结算时间">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="结算总金额"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="行驶里程">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="用车费用">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="保险费用">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="邮费补扣">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="服务费">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="限号补回">
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
                    phone: '',
                    carNum: '',
                    garage: '',
                    times:''
                },
                currentPage1: 1,
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
                }],
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
            }
        },
        component: {
            Select
        },

        watch: {},
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage1 = val;
                console.log(`当前页: ${val}`);
            },
            deleteRow(index, rows) {
                this.get_history_search = this.form;
                this.$router.push({
                    path: '/manage/detail',
                    query: {id: rows[index].id}
                });

            },
            ...mapActions([])
        },
        computed: {
            ...mapState({
                get_history_search: state => state.get_history_search,
            })
        },
        created() {
            this.form = this.get_history_search
        }

    }


</script>