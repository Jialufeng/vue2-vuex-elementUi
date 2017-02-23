<template>
    <div class="task_heading">
        <el-form ref="form" :model="form">
            <el-row :gutter="35" class="search-block" style="margin-right: 0">
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="用户姓名" label-width="80px">
                            <el-input v-model="form.name" placeholder="用户姓名"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="手机号码" label-width="80px">
                            <el-input v-model="form.phone" placeholder="手机号码"></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="任务类型" label-width="80px">
                            <el-select v-model="form.type" placeholder="请选择">
                                <el-option v-for="item in options" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="创建时间" label-width="80px">
                            <el-date-picker
                                    v-model="form.creditTime"
                                    type="daterange"
                                    placeholder="选择日期范围">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="计划时间" label-width="80px">
                            <el-date-picker
                                    v-model="form.planTime"
                                    type="daterange"
                                    placeholder="选择日期范围">
                            </el-date-picker>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class=" bg-purple">
                        <el-form-item label="负责人" label-width="80px">
                            <el-select v-model="form.type" placeholder="请选择">
                                <el-option v-for="item in options" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="bg-purple" style="text-align: right">
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
                        label="用车人"
                        width="180">
                    <el-table-column
                            prop="name"
                            label="联系电话"
                            width="120">
                    </el-table-column>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="任务类型"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="所选车型">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="创建时间">
                    <el-table-column
                            prop="address"
                            label="预计时间">
                    </el-table-column>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="有无变更">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="负责人">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="操作人">
                    <el-table-column
                            prop="address"
                            label="操作时间">
                    </el-table-column>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="操作">
                    <template scope="scope">
                        <el-button
                                @click.native.prevent="deleteRow(scope.$index, tableData)"
                                type="text">
                            查看详情
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
                    phone: '',
                    type: '',
                    creditTime: '',
                    planTime: '',

                },
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
                }]
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

                    query: {id: rows[index].id, name: this.form.name}
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